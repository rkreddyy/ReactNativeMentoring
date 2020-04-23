import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import LogStateMiddleware from './logStateMiddleware';

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), LogStateMiddleware],
});

export default store;
