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
const myPromise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
});

myPromise
    .then((value) => {
        console.log('Promise resolved with value: ' + value);
    })
    .catch((error) => {
        console.error('Promise rejected with error: ' + error);
    });