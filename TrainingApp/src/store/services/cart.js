import { CHECKOUT_API } from '../../constants/endPoints'

/* eslint-disable no-undef */
export function getProductsInCart(token) {
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

    return fetch(`${CHECKOUT_API}/cart`, requestOptions).then(response => response.json());
}

export function addProductToCart({ token, productId, quantity = 1 }) {
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

    return fetch(
        `${CHECKOUT_API}/cart&product_id=${productId}&quantity=${quantity}`,
        requestOptions,
    ).then(response => response.json());
}
