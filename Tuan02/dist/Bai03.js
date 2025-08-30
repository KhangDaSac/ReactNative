"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Bai03
function rejectWithError() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
rejectWithError().catch((error) => {
    console.error(error.message);
});
