"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchUser = async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    return response.json();
};
const fetchUsers = async (ids) => {
    const userPromises = ids.map(id => fetchUser(id));
    return Promise.all(userPromises);
};
const userIds = [1, 2, 3, 4];
fetchUsers(userIds)
    .then(users => console.log(users))
    .catch(error => console.error(error));
