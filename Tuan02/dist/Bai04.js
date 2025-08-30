"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Bai04
const myPromise = new Promise((resolve, _) => {
    resolve(Math.random());
});
myPromise
    .then((value) => {
    console.log('Random number is ' + value);
})
    .catch((error) => {
    console.error('Something error: ' + error);
});
