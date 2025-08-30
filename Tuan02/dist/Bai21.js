"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTodo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
};
getTodo();
