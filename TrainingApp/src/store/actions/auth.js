import AsyncStorage from '@react-native-community/async-storage';
import { AUTHENTICATE, LOGOUT } from './actionTypes';
import { AUTH_URL } from '../../constants/endPoints';

export const authenticate = (userId, token) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};

export const signup = (loginName, email, password, firstName, lastName, address1, city, postalCode) => {
  return async dispatch => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirm", password);
    formData.append("loginname", loginName);
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("address_1", address1);
    formData.append("city", city);
    formData.append("postcode", postalCode);
    formData.append("agree", 1);
    const response = await fetch(`${AUTH_URL}/create`,
      {
        method: 'POST',
        body: formData
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const resData = await response.json();
    // dispatch(
    //   authenticate(loginName, resData.token)
    // );

    // saveDataToStorage(loginName, resData.token);
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
      authenticate(loginName, resData.token)
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
