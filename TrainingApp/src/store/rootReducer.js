import { combineReducers } from '@reduxjs/toolkit';

import headerReducer from '../screens/components/header/header.slice';
import authReducer from '../screens/auth/auth.slice';
import mainReducer from '../screens/main/main.slice';
import productListReducer from '../screens/product-list/product-list.slice';
import appModalReducer from '../navigation/app-modal/app-modal.slice';
import cartReducer from '../screens/cart/cart.slice';
import ordersReducer from '../screens/orders/orders.slice';
import mapReducer from '../screens/map/map.slice';

const rootReducer = combineReducers({
    header: headerReducer,
    auth: authReducer,
    main: mainReducer,
    productList: productListReducer,
    appModal: appModalReducer,
    cart: cartReducer,
    orders: ordersReducer,
    map: mapReducer,
});

export default rootReducer;
