/* eslint-disable no-undef */
export function getProductById(id) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185e9c974eb2b97238720453',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`https://34.73.95.65/index.php?rt=a/product/product&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getProductResourcesByProductId(id) {
    const myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185e9c97927f6a4626199439',
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`https://34.73.95.65/index.php?rt=a/product/resources&product_id=${id}`, requestOptions).then(
        response => response.json(),
    );
}

export function getRelatedProductsByProductId(id) {
    var myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185e9c97c86f90c641860172',
    );

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`https://34.73.95.65/index.php?rt=a/product/related&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getProductReviewsByProductId(id) {
    var myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185e9c97f99b9f2728619839',
    );

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    fetch(`https://34.73.95.65/index.php?rt=a/product/product&product_id=${id}`, requestOptions).then(response =>
        response.json(),
    );
}

export function getCategoryById(id) {
    var myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'language=en; currency=USD; customer=UGw5TlZ0VU5aMGsxNlRUbGdINUkva0xUKzZJRlpQR01XdVhTTUxFUXRVaXhjWXRTMTRndERNU2VLNmhYcVF5SGFpS2V6ZDNYaGpSU0FtclBhUEM3ZEtpMytLY20wcUNpRHg5MW10eTdpTVNPMTErVWVwR0x0VEJZam5ZekNad2dxekk4ajR4Y3lCVG5uemhEdDJ3MllBPT06OlAdTj4FFihFPjrK_NLhN_c%3D; PHPSESSID=e4185e9c988deb11d748943743',
    );

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch('https://34.73.95.65/index.php?rt=a/product/category&category_id=36', requestOptions).then(response =>
        response.json(),
    );
}
