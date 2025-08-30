"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Bai11
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
const myFunction = async () => {
    try {
        const value = await myPromise;
        console.log(value);
    }
    catch (error) {
        console.log(error);
    }
};
myFunction();
