import { PRODUCT_URL } from '../../utils/endPoints';

/* eslint-disable no-undef */
export function getProductById(id) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD;',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`${PRODUCT_URL}/product&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getProductResourcesByProductId(id) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD;',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`${PRODUCT_URL}/resources&product_id=${id}`, requestOptions).then(
        response => response.json(),
    );
}

export function getRelatedProductsByProductId(id) {
    var myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD;',
    );

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`${PRODUCT_URL}/related&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getProductReviewsByProductId(id) {
    var myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD;',
    );

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    fetch(`${PRODUCT_URL}/product&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getCategoryById(id) {
    var myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD;',
    );

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`${PRODUCT_URL}/category&category_id=36`, requestOptions).then(response =>
        response.json(),
    );
}
