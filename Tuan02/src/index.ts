//Bai01
// const myPromise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello Async");
//     }, 2000);
// });

// myPromise
//     .then((value) => {
//         console.log('Promise resolved with value: ' + value);
//     })
//     .catch((error) => {
//         console.error('Promise rejected with error: ' + error);
//     });

//Bai02
// const myPromise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 1000);
// });

// myPromise
//     .then((value) => {
//         console.log('Promise resolved with value: ' + value);
//     })
//     .catch((error) => {
//         console.error('Promise rejected with error: ' + error);
//     });

//Bai03
// function rejectWithError(): Promise<never> {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("Something went wrong"));
//     }, 1000);
//   });
// }

// rejectWithError().catch((error) => {
//   console.error(error.message);
// });

//Bai04
// const myPromise: Promise<number> = new Promise((resolve, _) => {
//     resolve(Math.random());
// });

// myPromise
//     .then((value) => {
//         console.log('Random number is ' + value);
//     })
//     .catch((error) => {
//         console.error('Something error: ' + error);
//     });

//Bai05
const simulateTask = (time: number): Promise<string> => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

simulateTask(5000)
    .then((value) => console.log(value));