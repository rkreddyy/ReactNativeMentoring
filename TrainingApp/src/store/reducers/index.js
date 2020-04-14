import { combineReducers } from '@reduxjs/toolkit';

import headerReducer from './header';
import authReducer from './authSlice';

const rootReducer = combineReducers({
    header: headerReducer,
    auth: authReducer,
});

export default rootReducer;
