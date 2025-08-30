async function addTwo(num: number): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num + 2;
}

async function multiplyByThree(num: number): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    return num * 3;
}

async function subtractOne(num: number): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num - 1;
}

async function performCalculations() {
    let result = await addTwo(5);        
    console.log(result);                 

    result = await multiplyByThree(result);
    console.log(result);

    result = await subtractOne(result);     
    console.log(result);
}

performCalculations();
