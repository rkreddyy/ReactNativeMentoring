import { createSlice } from '@reduxjs/toolkit';

import { signIn, signOut, restorePassword, checkTokenIsAlive } from '../../store/services/auth';
import { AppStorage } from '../../utils/app-async-storage';

const initialState = {
    isSignedIn: false,
    isLoading: false,
    userToken: undefined,
    isTokenChecked: false,
    isTokenAlive: false,
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
        setUserData(store, action) {
            store.isSignedIn = true;
            store.userToken = action.payload.token;
            store.signInForm.userName = action.payload.userName;
            store.signInForm.email = action.payload.email;
            store.signInForm.password = action.payload.password;
        },
        tokenIsAliveCheck(state) {
            state.isLoading = true;
        },
        getSuccessTokenIsAliveCheck(state) {
            state.isLoading = false;
            state.isTokenAlive = true;
            state.isTokenChecked = true;
        },
        getFailedTokenIsAliveCheck(state, action) {
            state.isLoading = false;
            state.isTokenAlive = false;
            state.isTokenChecked = true;
            state.error = action.payload.error;
        },
        signInRequest(state, action) {
            if (!state.isSignedIn) {
                state.isLoading = true;
            }
        },
        getSuccessSignIn(state, action) {
            state.isLoading = false;
            state.userToken = action.payload.token;
            state.isSignedIn = true;
        },
        getFailedSignIn(state, action) {
            state.isLoading = false;
            state.signInError = action.payload.error;
            state.isSignedIn = false;
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
                AppStorage.setUserDataToAsyncStorage({ userName, email, password, token });
            } else {
                dispatch(AuthActions.getFailedSignIn({ error }));
            }
        })
        .catch(error => {
            dispatch(AuthActions.getFailedSignIn({ error }));
        });
};

export const setUserDataIfTokenAlive = ({ userName, email, password, token }) => dispatch => {
    dispatch(AuthActions.tokenIsAliveCheck());

    checkTokenIsAlive(token)
        .then(({ status, request }) => {
            if (status === 1) {
                dispatch(AuthActions.getSuccessTokenIsAliveCheck());
                dispatch(
                    AuthActions.setUserData({
                        userName,
                        email,
                        password,
                        token,
                    }),
                );
            } else {
                dispatch(AuthActions.getFailedTokenIsAliveCheck({ error: request }));
            }
        })
        .catch(error => {
            dispatch(AuthActions.getFailedTokenIsAliveCheck({ error: error.message }));
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
