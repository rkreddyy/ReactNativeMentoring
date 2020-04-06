import AsyncStorage from '@react-native-community/async-storage';
import { AUTHENTICATE, LOGOUT } from './actionTypes';
import { AUTH_URL } from '../../constants/endPoints';

export const authenticate = (userId, token) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};

export const signup = (email, password) => {
  return async dispatch => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await fetch(`${AUTH_URL}/create`,
      {
        method: 'POST',
        body: formData
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_EXISTS') {
        message = 'This email exists already!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    dispatch(
      authenticate(resData.loginName, resData.token)
    );

    saveDataToStorage(loginName, resData.token);
  };
};

export const login = (loginName, password) => {
  return async dispatch => {
    let formData = new FormData();
    formData.append("loginname", loginName);
    formData.append("password", password);
    const response = await fetch(`${AUTH_URL}/login`,
      {
        method: 'POST',
        body: formData
      }
    );

    if (!response.ok) {
      throw new Error('Invalid username or password!');
    }

    const resData = await response.json();
    dispatch(
      authenticate(resData.loginName, resData.token)
    );
    saveDataToStorage(loginName, resData.token);
  };
};

export const logout = () => {
  AsyncStorage.removeItem('userData');
  return { type: LOGOUT };
};

const saveDataToStorage = (loginName, token) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: loginName
    })
  );
};
