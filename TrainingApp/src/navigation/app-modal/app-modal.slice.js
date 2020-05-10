import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isVisible: false,
    iconName: undefined,
    message: undefined,
    buttons: undefined,
};

const appModalSlice = createSlice({
    name: 'appModal',
    initialState,
    reducers: {
        showModal(state, action) {
            state.isVisible = true;
            state.iconName = action.payload.iconName;
            state.message = action.payload.message;
            state.buttons = action.payload.buttons;
        },
        hideModal(state) {
            state.isVisible = false;
            state.faIcon = undefined;
            state.message = undefined;
            state.buttons = undefined;
        },
    },
});

export const AppModalActions = {
    ...appModalSlice.actions,
};

export default appModalSlice.reducer;
