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
