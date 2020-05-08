import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

import { signIn, signOut, restorePassword } from '../../store/services/auth';

const initialState = {
    isSignedIn: false,
    isLoading: false,
    isStartScreenLoading: true,
    userToken: undefined,
    signInError: undefined,
    signOutError: undefined,
    signInForm: {
        userName: undefined,
        email: undefined,
        password: undefined,
    },
    restorePasswordForm: {
        email: undefined,
        password: undefined,
        isLoading: false,
        error: undefined,
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInRequest(state, action) {
            if (!state.isSignedIn) {
                state.isLoading = true;
            }
        },
        getSuccessSignIn(state, action) {
            state.isLoading = false;
            state.userToken = action.payload.token;
            state.isSignedIn = true;
            state.isStartScreenLoading = false;
        },
        getFailedSignIn(state, action) {
            state.isLoading = false;
            state.signInError = action.payload.error;
            state.isSignedIn = false;
            state.isStartScreenLoading = false;
        },
        signOutRequest(state, action) {
            if (state.isSignedIn) {
                state.isLoading = true;
            }
        },
        getSuccessSignOut(state, action) {
            state = initialState;
        },
        getFailedSignOut(state, action) {
            state.isLoading = false;
            state.signOutError = action.payload.error;
        },
        setSignInEmail(state, action) {
            state.signInForm.email = action.payload.email;
            state.signInForm.userName = undefined;
        },
        setSignInUserName(state, action) {
            state.signInForm.email = undefined;
            state.signInForm.userName = action.payload.userName;
        },
        setSignInPassword(state, action) {
            state.signInForm.password = action.payload.password;
        },
        restorePasswordRequest(state) {
            state.restorePasswordForm.isLoading = true;
        },
        setRestorePasswordFormEmail(state, action) {
            state.restorePasswordForm.email = action.payload.email;
        },
        getSuccessPasswordRestore(state, action) {
            state.restorePasswordForm.isLoading = false;
            state.restorePasswordForm.password = action.payload.password;
        },
        getFailedPasswordRestore(state, action) {
            state.restorePasswordForm.isLoading = false;
            state.restorePasswordForm.error = action.payload.error;
        },
    },
});

export const AuthActions = {
    ...authSlice.actions,
};

export default authSlice.reducer;

export const fetchSignIn = ({ email, userName, password }) => dispatch => {
    dispatch(AuthActions.signInRequest());
    signIn({ email, userName, password })
        .then(({ status, token, error }) => {
            if (status === 1) {
                dispatch(AuthActions.getSuccessSignIn({ token }));
                saveDataToStorage(token);
            } else {
                dispatch(AuthActions.getFailedSignIn({ error }));
            }
        })
        .catch(error => {
            dispatch(AuthActions.getFailedSignIn({ error }));
        });
};

export const fetchSignOut = ({ token }) => dispatch => {
    dispatch(AuthActions.signOutRequest());
    signOut({ token })
        .then(({ status, error }) => {
            if (status === 1) {
                dispatch(AuthActions.getSuccessSignOut());
            } else {
                dispatch(AuthActions.getFailedSignOut({ error }));
            }
        })
        .catch(error => {
            dispatch(AuthActions.getFailedSignOut({ error }));
        });
};

export const fetchRestorePassword = ({ email }) => dispatch => {
    dispatch(AuthActions.restorePasswordRequest());
    restorePassword({ email })
        .than(({ status, password, error }) => {
            if (status === 1) {
                dispatch(AuthActions.getSuccessPasswordRestore({ password }));
            } else {
                dispatch(AuthActions.getFailedPasswordRestore({ error }));
            }
        })
        .catch(error => {
            dispatch(AuthActions.getFailedPasswordRestore({ error }));
        });
};

const saveDataToStorage = (token) => {
    AsyncStorage.setItem('userData', JSON.stringify({ token }));
};  
