import { createReducer } from '@reduxjs/toolkit';

import HeaderActions from './header.actions';

const initialHeaderState = { isSearchVisible: false };

const headerReducer = createReducer(initialHeaderState, {
    [HeaderActions.toggleSearch]: ({ isSearchVisible }) => {
        return { isSearchVisible: !isSearchVisible };
    },
});

export default headerReducer;
