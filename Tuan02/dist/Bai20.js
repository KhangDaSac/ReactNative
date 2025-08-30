"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchUser = async (id) => {
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('API call timed out')), 2000));
    const fetchPromise = fetch(`https://dummyjson.com/users/${id}`).then(response => response.json());
    return Promise.race([fetchPromise, timeout]);
};
const fetchUsers = (ids) => {
    const userPromises = ids.map(id => fetchUser(id));
    return Promise.all(userPromises);
};
const userIds = [1, 2, 3, 4];
fetchUsers(userIds)
    .then(users => console.log(users))
    .catch(error => console.error(error));
