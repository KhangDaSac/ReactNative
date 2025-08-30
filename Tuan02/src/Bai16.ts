const addTwo = async (num: number): Promise<number> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num + 2;
}

const multiplyByThree = async (num: number): Promise<number> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num * 3;
}

const subtractOne = async (num: number): Promise<number> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num - 1;
}

const myFunction = async () => {
    let results = await Promise.all([
        addTwo(10),
        multiplyByThree(20),
        subtractOne(30)
    ]);

    console.log(results);
}

myFunction();