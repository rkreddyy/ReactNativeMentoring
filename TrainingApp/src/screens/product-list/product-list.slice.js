import { createSlice } from '@reduxjs/toolkit';

import { getProductsByCategoryId } from '../../store/services/catalog';

const CHUNK_SIZE = 6;

const initialState = {
    isLoading: false,
    error: undefined,
    products: [],
    chunkNumber: 0,
    totalChunksCount: undefined,
};

const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        fetchProducts(state) {
            state.isLoading = true;
        },
        getSuccessProducts(state, action) {
            state.isLoading = false;
            state.totalChunksCount = action.payload.totalChunks;
            state.products = action.payload.products;
            state.chunkNumber = state.chunkNumber + 1;
        },
        getFailedProducts(state, action) {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        refreshProducts(state) {
            state.isLoading = true;
        },
        getSuccessRefresh(state, action) {
            state.isLoading = false;
            state.totalChunksCount = action.payload.totalChunks;
            state.products = action.payload.products;
        },
        getFailedRefresh(state, action) {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        resetState(state) {
            // eslint-disable-next-line no-unused-vars
            for (const key in initialState) {
                state[key] = initialState[key];
            }
        },
        loadMoreProducts(state) {
            state.isLoading = true;
        },
        getSuccessLoadMore(state, action) {
            state.isLoading = false;
            state.totalChunksCount = action.payload.totalChunks;
            if (action.payload.products) {
                state.products = state.products.concat(action.payload.products);
                state.chunkNumber = state.chunkNumber + 1;
            }
        },
        getFailedLoadMore(state, action) {
            state.isLoading = false;
            state.error = action.payload.error;
        },
    },
});

export const ProductListActions = {
    ...productListSlice.actions,
};

export default productListSlice.reducer;

export const fetchProducts = (categoryId, currentChunk) => dispatch => {
    dispatch(ProductListActions.fetchProducts());
    getProductsByCategoryId(categoryId, CHUNK_SIZE, currentChunk)
        .then(data => {
            dispatch(
                ProductListActions.getSuccessProducts({ products: data.rows, categoryId, totalChunks: data.total }),
            );
        })
        .catch(error => {
            dispatch(ProductListActions.getFailedProducts({ error: error.message }));
        });
};

export const refreshProducts = (categoryId, currentChunk) => dispatch => {
    dispatch(ProductListActions.refreshProducts());
    getProductsByCategoryId(categoryId, CHUNK_SIZE * currentChunk)
        .then(data => {
            dispatch(
                ProductListActions.getSuccessRefresh({ products: data.rows, categoryId, totalChunks: data.total }),
            );
        })
        .catch(error => {
            dispatch(ProductListActions.getFailedRefresh({ error: error.message }));
        });
};

export const loadMoreProducts = (categoryId, currentChunk) => dispatch => {
    dispatch(ProductListActions.loadMoreProducts());
    getProductsByCategoryId(categoryId, CHUNK_SIZE, currentChunk)
        .then(data => {
            dispatch(
                ProductListActions.getSuccessLoadMore({ products: data.rows, categoryId, totalChunks: data.total }),
            );
        })
        .catch(error => {
            dispatch(ProductListActions.getFailedLoadMore({ error: error.message }));
        });
};
