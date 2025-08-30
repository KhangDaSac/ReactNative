const downloadFile = async (): Promise<void> => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000); 
  });
  console.log("Hoàn thành")
};

downloadFile();
