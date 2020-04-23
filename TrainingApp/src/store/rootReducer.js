import { combineReducers } from '@reduxjs/toolkit';

import headerReducer from '../screens/common/header/headerSlice';
import authReducer from '../screens/auth/authSlice';

const rootReducer = combineReducers({
    header: headerReducer,
    auth: authReducer,
});

export default rootReducer;
