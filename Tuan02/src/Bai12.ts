const simulateTask = (time: number): Promise<string> => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

const myFunction = async () => {
    try {
        const value = await simulateTask(2000);
        console.log(value);
    } catch (error: any) {
        console.log(error);
    }
}

myFunction();