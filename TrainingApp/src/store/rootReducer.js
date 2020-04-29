import { combineReducers } from '@reduxjs/toolkit';

import headerReducer from './header/headerSlice';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
    header: headerReducer,
    auth: authReducer,
});

export default rootReducer;
