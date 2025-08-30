const fakeApiCall = (url: string, shouldFail = false): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject('Failed');
            } else {
                resolve('Success');
            }
        }, 1000);
    });
};

const handleMultipleApiCalls = async () => {
    const apiCalls = [
        fakeApiCall("https://api.example.com/user"),
        fakeApiCall("https://api.example.com/posts", true),
        fakeApiCall("https://api.example.com/comments"),
        fakeApiCall("https://api.example.com/likes", true),
        fakeApiCall("https://api.example.com/friends")
    ];

    const results = await Promise.allSettled(apiCalls);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Task ${index + 1}: ${result.value}`);
        } else {
            console.log(`Task ${index + 1}: ${result.reason}`);
        }
    });
};

handleMultipleApiCalls();
