"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function addTwo(num) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num + 2;
}
async function multiplyByThree(num) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num * 3;
}
async function subtractOne(num) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num - 1;
}
async function performCalculations() {
    let result = await addTwo(5);
    console.log(result);
    result = await multiplyByThree(result);
    console.log(result);
    result = await subtractOne(result);
    console.log(result);
}
performCalculations();
