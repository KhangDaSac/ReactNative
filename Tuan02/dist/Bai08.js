"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Bai08
const square = (x) => Promise.resolve(x * x);
const double = (x) => Promise.resolve(x * 2);
const addFive = (x) => Promise.resolve(x + 5);
Promise.resolve(2)
    .then(square)
    .then(double)
    .then(addFive)
    .then(result => console.log(result))
    .catch(console.error);
