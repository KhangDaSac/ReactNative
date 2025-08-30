const fetchUser = async (id: number): Promise<any> => {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('API call timed out')), 2000)
  );

  const fetchPromise = fetch(`https://dummyjson.com/users/${id}`).then(response => response.json());

  return Promise.race([fetchPromise, timeout]);
}

const fetchUsers = (ids: number[]): Promise<any[]> => {
  const userPromises = ids.map(id => fetchUser(id));
  return Promise.all(userPromises);
}

const userIds = [1, 2, 3, 4];
fetchUsers(userIds)
  .then(users => console.log(users))
  .catch(error => console.error(error));
