"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Bai09
const filterEvenNumbers = (arr) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
};
filterEvenNumbers([1, 2, 3, 4, 5, 6])
    .then(evenNums => console.log('Even numbers:', evenNums))
    .catch(console.error);
