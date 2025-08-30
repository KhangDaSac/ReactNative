"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
const simulateWait = async () => {
    console.log("Bắt đầu");
    await delay(5000);
    console.log("Hoàng thành");
};
simulateWait();
