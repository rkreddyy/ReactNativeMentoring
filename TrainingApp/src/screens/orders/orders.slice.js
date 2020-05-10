import { createSlice } from '@reduxjs/toolkit';
import { getOrdersHistory } from '../../store/services/orders';

const initialState = {
    isLoading: false,
    error: undefined,
    orders: [],
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        getOrders(state) {
            state.isLoading = true;
        },
        getSuccessOrders(state, action) {
            state.isLoading = false;
            state.orders = action.payload.orders;
        },
        getFailedOrders(state, action) {
            state.isLoading = false;
            state.error = action.payload.error;
        },
    },
});

export const OrdersActions = {
    ...ordersSlice.actions,
};

export default ordersSlice.reducer;

export const fetchOrders = () => (dispatch, getState) => {
    dispatch(OrdersActions.getOrders());

    const { userToken } = getState().auth;

    getOrdersHistory(userToken)
        .then(({ orders, error }) => {
            if (error) {
                dispatch(OrdersActions.getFailedOrders({ error }));
            } else {
                dispatch(OrdersActions.getSuccessOrders({ orders }));
            }
        })
        .catch(error => {
            dispatch(OrdersActions.getFailedOrders({ error: error.message }));
        });
};
