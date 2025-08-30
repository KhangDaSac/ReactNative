"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queueProcess = async (tasks) => {
    for (const task of tasks) {
        try {
            const result = await task();
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    }
};
// Example usage
const tasks = [
    () => new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000)),
    () => new Promise((resolve) => setTimeout(() => resolve("Task 2 done"), 1500)),
    () => new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 500)),
    () => new Promise((resolve) => setTimeout(() => resolve("Task 4 done"), 700)),
    () => new Promise((resolve) => setTimeout(() => resolve("Task 5 done"), 1200)),
];
queueProcess(tasks);
