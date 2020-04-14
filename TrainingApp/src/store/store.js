import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './reducers';
// import LogStateMiddleware from './logStateMiddleware';

const store = configureStore({
    reducer: rootReducer,
    // middleware: [...getDefaultMiddleware(), LogStateMiddleware],
    middleware: [...getDefaultMiddleware()],
});


export default store;
