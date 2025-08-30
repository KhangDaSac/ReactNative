"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchCompletedTodos = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const todos = await response.json();
        const completedTodos = todos.filter(todo => todo.completed);
        console.log(completedTodos);
        return completedTodos;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};
fetchCompletedTodos();
