"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myPromise = new Promise((resolve, reject) => {
    reject("Something error!");
});
const myFunction = async () => {
    try {
        const value = await myPromise;
    }
    catch (error) {
        console.log(error);
    }
};
myFunction();
