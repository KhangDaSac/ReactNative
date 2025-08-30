const fetchWithRetry = async (url: string, retries: number): Promise<any> => {
  let attempt = 0;

  while (attempt <= retries) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Lỗi ở lần ${attempt + 1}`);

      attempt++;

      if (attempt > retries) {
        console.error("Hết số lần thử");
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
};

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1", 3)
  .then((data) => console.log("Hoàn tất:", data))
  .catch(() => console.log("Thất bại"));
