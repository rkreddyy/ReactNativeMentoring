import { PRODUCT_URL } from '../../constants/endPoints'

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

    return fetch(`${PRODUCT_URL}/related&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getProductReviewsByProductId(id) {
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

    fetch(`${PRODUCT_URL}/product&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getCategoryById(id) {
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

    return fetch(`${PRODUCT_URL}/category&category_id=${id}`, requestOptions).then(
        response => response.json(),
    );
}

export function getCategories() {
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

    return fetch(`${PRODUCT_URL}/category&category_id=0`, requestOptions).then(response =>
        response.json(),
    );
}

/**
 * @param {*} id - category id
 * @param {*} limit - limiting products count in one page
 * @param {*} page - number of page with results to get
 */
export function getProductsByCategoryId(id, limit = 10, page = 1) {
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

    return fetch(
        `${PRODUCT_URL}/filter&category_id=${id}&rows=${limit}&page=${page}`,
        requestOptions,
    ).then(response => response.json());
}
