"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simulateTask = (time) => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
};
const myFunction = async () => {
    try {
        const value = await simulateTask(2000);
        console.log(value);
    }
    catch (error) {
        console.log(error);
    }
};
myFunction();
