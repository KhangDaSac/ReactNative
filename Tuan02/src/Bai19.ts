const fetchUser = async (id: number): Promise<any> => {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    return response.json();
}

const fetchUsers = async (ids: number[]): Promise<any[]> => {
    const userPromises = ids.map(id => fetchUser(id));
    return Promise.all(userPromises);
}

const userIds = [1, 2, 3, 4];
fetchUsers(userIds)
    .then(users => console.log(users))
    .catch(error => console.error(error));
