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
// const simulateTask = (time: number): Promise<string> => {
//     return new Promise((resolve, _) => {
//         setTimeout(() => {
//             resolve("Task done");
//         }, time);
//     });
// }

// simulateTask(5000)
//     .then((value) => console.log(value));

//Bai06
// const simulateTask = (name: string, time: number): Promise<string> => {
//     return new Promise((reslove, _) => {
//         setTimeout(() => {
//             reslove(`${name} done in ${time}s`)
//         }, time)
//     })
// }

// const runTasks = async () => {
//     const task = [
//         simulateTask("Task 1", 5000),
//         simulateTask("Task 2", 2000),
//         simulateTask("Task 3", 5000),
//         simulateTask("Task 4", 6000)
//     ]

//     const result = await Promise.all(task);

//     task.forEach((item) => console.log(item))
// }

// runTasks();

//Bai07
const firstResolved = <T>(promises: Promise<T>[]): Promise<T> =>{
  return new Promise<T>((resolve, reject) => {
    let rejectedCount = 0;
    const total = promises.length;

    promises.forEach(promise => {
      promise.then(
        value => resolve(value),
        () => {
          rejectedCount++;
          if (rejectedCount === total) {
            reject(new Error('All promises rejected'));
          }
        }
      );
    });
  });
}

const p1 = new Promise<string>((_, reject) => setTimeout(reject, 100)); // rejects
const p2 = new Promise<string>((resolve) => setTimeout(resolve, 200, 'Second'));
const p3 = new Promise<string>((resolve) => setTimeout(resolve, 300, 'Third'));

firstResolved([p1, p2, p3])
    .then(result => console.log('First resolved:', result))
    .catch(err => console.error('Error:', err.message));
