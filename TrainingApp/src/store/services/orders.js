import { ORDERS_API } from '../../constants/endPoints'

/* eslint-disable no-undef */
export function getOrdersHistory(token) {
    var myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD;',
    );

    var formdata = new FormData();
    formdata.append('token', token);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
    };

    return fetch(ORDERS_API, requestOptions).then(response => response.json());
}
