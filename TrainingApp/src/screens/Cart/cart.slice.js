import { createSlice } from '@reduxjs/toolkit';

import { addProductToCart, getProductsInCart } from '../../store/services/cart';
import { AppModalActions } from '../../navigation/app-modal/app-modal.slice';
import { getHideModalButtonConfig } from '../../navigation/app-modal/app-modal';

const initialState = {
    isLoading: false,
    products: [],
    error: undefined,
    totals: [],
    weight: undefined,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        fetchGetProductsInCart(state) {
            state.isLoading = true;
        },
        getSuccessProducts(state, action) {
            state.isLoading = false;
            state.products = action.payload.products;
            state.totals = action.payload.totals;
            state.weight = action.payload.weight;
        },
        getFailedProducts(state, action) {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        fetchAddToCart(state) {
            state.isLoading = true;
        },
        getSuccessAdding(state, action) {
            state.isLoading = false;
            state.products = action.payload.products;
            state.totals = action.payload.totals;
            state.weight = action.payload.weight;
        },
        getFailedAdding(state, action) {
            state.isLoading = false;
            state.error = action.payload.error;
        },
    },
});

export const CartActions = {
    ...cartSlice.actions,
};

export default cartSlice.reducer;

export const fetchAddProductToCart = ({ product }) => (dispatch, getState) => {
    dispatch(CartActions.fetchAddToCart());

    const { userToken } = getState().auth;

    addProductToCart({ productId: product.id, token: userToken })
        .then(({ products, totals, weight, error }) => {
            if (error) {
                dispatch(CartActions.getFailedAdding({ error }));
                dispatch(
                    AppModalActions.showModal({
                        iconName: 'warning',
                        message: 'There are no living internet connection',
                        buttons: [getHideModalButtonConfig({ dispatch, label: 'Ok' })],
                    }),
                );
            } else {
                dispatch(CartActions.getSuccessAdding({ products, totals, weight }));
                dispatch(
                    AppModalActions.showModal({
                        iconName: 'check-circle',
                        message: 'Product added to your cart',
                        buttons: [getHideModalButtonConfig({ dispatch, label: 'Ok' })],
                    }),
                );
            }
        })
        .catch(error => {
            dispatch(CartActions.getFailedAdding({ error: error.message }));
            dispatch(
                AppModalActions.showModal({
                    iconName: 'warning',
                    message: 'There are no living internet connection',
                    buttons: [getHideModalButtonConfig({ dispatch, label: 'Ok' })],
                }),
            );
        });
};

export const fetchGetProductsInCart = () => (dispatch, getState) => {
    dispatch(CartActions.fetchGetProductsInCart());

    const { userToken } = getState().auth;

    getProductsInCart(userToken)
        .then(({ products, totals, weight, error }) => {
            if (error) {
                dispatch(CartActions.getFailedProducts({ error }));
            } else {
                dispatch(CartActions.getSuccessProducts({ products, totals, weight }));
            }
        })
        .catch(error => {
            dispatch(CartActions.getFailedProducts({ error: error.message }));
        });
};
