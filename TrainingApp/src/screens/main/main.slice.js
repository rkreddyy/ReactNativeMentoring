import { createSlice } from '@reduxjs/toolkit';

import { getCategories, getProductsByCategoryId } from '../../store/services/catalog';

const initialState = {
    isLoading: false,
    error: undefined,
    categories: [],
    productsByCategoryId: {},
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        fetchCategories(state) {
            state.isLoading = true;
        },
        getSuccessCategories(state, action) {
            state.isLoading = false;
            state.categories = action.payload.categories;
        },
        getFailedCategories(state, action) {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        fetchCategoryPreviewData(state) {
            state.isLoading = true;
        },
        getSuccessCategoriesPreviewData(state, action) {
            state.isLoading = false;
            state.productsByCategoryId[action.payload.categoryId] = action.payload.products;
        },
        getFailedCategoriesPreviewData(state, action) {
            state.isLoading = false;
            state.error = action.payload.error;
        },
    },
});

export const MainActions = {
    ...mainSlice.actions,
};

export default mainSlice.reducer;

export const fetchCategories = () => dispatch => {
    dispatch(MainActions.fetchCategories());
    getCategories()
        .then(({ subcategories }) => {
            dispatch(MainActions.getSuccessCategories({ categories: subcategories }));
            dispatch(MainActions.fetchCategoryPreviewData());
            subcategories.forEach(category => {
                dispatch(fetchCategoryPreviewData(category.category_id));
            });
        })
        .catch(error => {
            dispatch(MainActions.getFailedCategories({ error: error.message }));
        });
};

export const fetchCategoryPreviewData = id => dispatch => {
    dispatch(MainActions.fetchCategoryPreviewData());
    getProductsByCategoryId(id, 3)
        .then(data => {
            dispatch(MainActions.getSuccessCategoriesPreviewData({ products: data.rows, categoryId: id }));
        })
        .catch(error => {
            dispatch(MainActions.getFailedCategoriesPreviewData({ error: error.message }));
        });
};
