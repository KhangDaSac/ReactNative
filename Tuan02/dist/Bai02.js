"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Bai02
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
myPromise
    .then((value) => {
    console.log('Promise resolved with value: ' + value);
})
    .catch((error) => {
    console.error('Promise rejected with error: ' + error);
});
