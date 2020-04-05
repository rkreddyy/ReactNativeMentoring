import { AsyncStorage } from 'react-native';
import { LOGIN, SIGNUP, LOGOUT } from './actionTypes';
import { AUTH_URL } from '../../constants/endPoints';

let timer;

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      `${AUTH_URL}/accounts:signUp?key=AIzaSyBY8UJq_xLD0nEe1HZHuvEOUfYIS9gg4pA`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
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
    console.log(resData);
    dispatch(
      authenticate(
        resData.localId,
        resData.idToken,
        parseInt(resData.expiresIn) * 1000
      )
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );
    saveDataToStorage(resData.idToken, resData.localId, expirationDate);
  };
};

export const login = (loginName, password) => {
  return async dispatch => {
    const response = await fetch(
      `${AUTH_URL}/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify({
          loginName,
          password: password
        })
      }
    );

    if (!response.ok) {
      throw new Error('Invalid username or password!');
    }

    const resData = await response.json();
    dispatch({ type: LOGIN, userId: loginName, token: token });

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
