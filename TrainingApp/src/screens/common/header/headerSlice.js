import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSearchVisible: false,
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        toggleSearch(state) {
            state.isSearchVisible = !state.isSearchVisible;
        },
    },
});

export const HeaderActions = {
    ...headerSlice.actions,
};

export default headerSlice.reducer;
