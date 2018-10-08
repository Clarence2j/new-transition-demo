let baseUrl = '';
let routerMode = 'hash';
let baseImgPath;

if(process.env.NODE_ENV == 'development'){
    
    // baseUrl = 'https://mockTest.com.cn';
    baseUrl = '';
    // baseUrl = 'linTest';
    // baseUrl = 'https://finsuitdev.udomedia.com.cn';
    // baseUrl = 'http://192.168.100.177:8080';
    // baseImgPath = 'linTest/img';
}

export {
    baseUrl,
    baseImgPath,
    routerMode
}