//Bai06
const simulateTask = (name: string, time: number): Promise<string> => {
    return new Promise((reslove, _) => {
        setTimeout(() => {
            reslove(`${name} done in ${time}s`)
        }, time)
    })
}

const runTasks = async () => {
    const task = [
        simulateTask("Task 1", 5000),
        simulateTask("Task 2", 2000),
        simulateTask("Task 3", 5000),
        simulateTask("Task 4", 6000)
    ]

    const result = await Promise.all(task);

    task.forEach((item) => console.log(item))
}


runTasks();