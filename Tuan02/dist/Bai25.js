"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const downloadFile = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
    console.log("Hoàn thành");
};
downloadFile();
