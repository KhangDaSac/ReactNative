"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bai01
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
myPromise
    .then((value) => {
    console.log('Promise resolved with value: ' + value);
})
    .catch((error) => {
    console.error('Promise rejected with error: ' + error);
});
