//Bai03
function rejectWithError(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 1000);
  });
}

rejectWithError().catch((error) => {
  console.error(error.message);
});
