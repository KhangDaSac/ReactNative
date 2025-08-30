//Bai11
const myPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});

const myFunction = async () => {
    try {
        const value = await myPromise;
        console.log(value);
    } catch (error: any) {
        console.log(error)
    }
}

myFunction()