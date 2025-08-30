const fetchUser = (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: `User ${id}`,
        email: `user${id}@example.com`
      });
    }, 1000);
  });
}

const getUserInfo = async (id: number) => {
  const user = await fetchUser(id);
  console.log(user);
}

getUserInfo(1); 
