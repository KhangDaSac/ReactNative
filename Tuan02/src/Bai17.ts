const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
    Promise.resolve(4)
];

const processPromises = async () => {
    for await (let value of promises) {
        console.log(value);
    }
}

processPromises();