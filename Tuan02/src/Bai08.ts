//Bai08
const square = (x: number): Promise<number> =>
  Promise.resolve(x * x);

const double = (x: number): Promise<number> =>
  Promise.resolve(x * 2);

const addFive = (x: number): Promise<number> =>
  Promise.resolve(x + 5);

Promise.resolve(2)
  .then(square)
  .then(double)
  .then(addFive)
  .then(result => console.log(result)) 
  .catch(console.error);