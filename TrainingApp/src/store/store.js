import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import LogStateMiddleware from './logStateMiddleware';

const appStore = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: false,
        }),
        LogStateMiddleware,
    ],
});

export default appStore;