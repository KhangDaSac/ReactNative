"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Bai07
const firstResolved = (promises) => {
    return new Promise((resolve, reject) => {
        let rejectedCount = 0;
        const total = promises.length;
        promises.forEach(promise => {
            promise.then(value => resolve(value), () => {
                rejectedCount++;
                if (rejectedCount === total) {
                    reject(new Error('All promises rejected'));
                }
            });
        });
    });
};
const p1 = new Promise((_, reject) => setTimeout(reject, 100)); // rejects
const p2 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));
const p3 = new Promise((resolve) => setTimeout(resolve, 300, 'Third'));
firstResolved([p1, p2, p3])
    .then(result => console.log('First resolved:', result))
    .catch(err => console.error('Error:', err.message));
