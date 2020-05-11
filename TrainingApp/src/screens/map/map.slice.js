import { createSlice } from '@reduxjs/toolkit';
import Geolocation from '@react-native-community/geolocation';

import { DEFAULT_LOCATION } from '../../constants/default-coordinates';

const initialState = {
    isLoading: false,
    error: undefined,
    currentPosition: DEFAULT_LOCATION,
};

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        fetchCurrentPosition(state) {
            state.isLoading = true;
        },
        getSuccessCurrentPosition(state, action) {
            state.isLoading = false;
            state.currentPosition.latitude = action.payload.coords.latitude;
            state.currentPosition.longitude = action.payload.coords.longitude;
        },
        getFailedCurrentPosition(state, action) {
            state.isLoading = false;
            state.error = action.payload.error;
        },
    },
});

export const MapActions = {
    ...mapSlice.actions,
};

export default mapSlice.reducer;

export const fetchGetCurrentPosition = () => (dispatch, getState) => {
    dispatch(MapActions.fetchCurrentPosition());
    Geolocation.getCurrentPosition(
        info => {
            dispatch(MapActions.getSuccessCurrentPosition({ coords: info.coords }));
        },
        error => {
            dispatch(MapActions.getFailedCurrentPosition({ error: error.message }));
        },
    );
};