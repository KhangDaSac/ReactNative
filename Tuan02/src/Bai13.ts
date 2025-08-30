const myPromise:Promise<string> = new Promise((resolve, reject) => {
    reject("Something error!")
})

const myFunction = async () => {
    try {
        const value = await myPromise;
    } catch (error: any) {
        console.log(error)
    }
}

myFunction();