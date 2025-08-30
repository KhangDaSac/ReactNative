//Bai10
const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve("Success!");
        } else {
            reject("Failure!");
        }
    }, 1000);
});

myPromise
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error))
    .finally(() => console.log("Done"));