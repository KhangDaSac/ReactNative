const myFunction = async (num: number) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num * 3;
}

myFunction(10).then(result => console.log(result))