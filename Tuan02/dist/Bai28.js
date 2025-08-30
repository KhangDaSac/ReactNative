"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncTask = (taskName, delay) => {
    return new Promise((resolve) => {
        console.log(`Bắt đầu ${taskName}...`);
        setTimeout(() => {
            resolve(`Hoàn thành ${taskName} sau ${delay / 1000}s`);
        }, delay);
    });
};
const batchProcess = async () => {
    console.log("Bắt đầu xử lý.");
    const tasks = [
        asyncTask("Tác vụ 1", 2000),
        asyncTask("Tác vụ 2", 3000),
        asyncTask("Tác vụ 3", 1000),
        asyncTask("Tác vụ 4", 4000),
        asyncTask("Tác vụ 5", 1500),
    ];
    try {
        const results = await Promise.all(tasks);
        console.log("Tất cả tác vụ đã hoàn thành!");
        results.forEach((result, index) => {
            console.log(`Kết quả ${index + 1}: ${result}`);
        });
    }
    catch (error) {
        console.error(error);
    }
};
batchProcess();
