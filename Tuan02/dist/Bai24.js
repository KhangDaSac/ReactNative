"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postData = async (data) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Lỗi HTTP: ${response.status}`);
        }
        const result = await response.json();
        console.log("Kết quả từ API:", result);
    }
    catch (error) {
        console.error("Lỗi khi gửi POST request:", error);
    }
};
postData({
    title: "Bài viết mới",
    body: "Đây là nội dung bài viết",
    userId: 1,
});
