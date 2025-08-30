const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const simulateWait = async (): Promise<void> => {
  console.log("Bắt đầu");
  await delay(5000);
  console.log("Hoàng thành");
};

simulateWait();
