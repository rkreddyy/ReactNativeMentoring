import { AUTH_API } from '../../constants/endPoints'

/* eslint-disable no-undef */
export function signIn({ email, userName, password }) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD;',
    );

    const formData = new FormData();
    if (email) {
        formData.append('email', email);
    }
    if (userName) {
        formData.append('loginname', userName);
    }
    formData.append('password', password);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
    };

    return fetch(`${AUTH_API}/login`, requestOptions).then(response => response.json());
}

export function signOut(token) {
    const myHeaders = new Headers();
    myHeaders.append('Cookie', 'language=en; currency=USD;');

    const formData = new FormData();
    formData.append('token', token);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow',
    };

    return fetch(`${AUTH_API}/logout`, requestOptions).then(response => response.json());
}

export function restorePassword(email) {
    return Promise.reject(email);
}

export function checkTokenIsAlive(token) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD;',
    );

    const formdata = new FormData();
    formdata.append('token', token);
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
    };

    return fetch(`${AUTH_API}/login`, requestOptions).then(response => response.json());
}
