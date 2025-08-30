"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const callApiMultipleTimes = async (urls) => {
    for (const url of urls) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    }
};
const apiUrls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
];
callApiMultipleTimes(apiUrls);
