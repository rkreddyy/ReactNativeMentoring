import { AUTH_URL } from '../../constants/endPoints';

export function signIn({ email, userName, password }) {
    // eslint-disable-next-line no-undef
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

    return fetch(`${AUTH_URL}/login`, requestOptions).then(response => response.json());
}

export function signOut(token) {
    // eslint-disable-next-line no-undef
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

    return fetch(`${AUTH_URL}/logout`, requestOptions).then(response => response.json());
}

export function restorePassword(email) {
    return Promise.reject(email);
}
