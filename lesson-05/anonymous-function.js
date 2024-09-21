// Là hàm ẩn danh, Thường được sử dụng làm đối số cho các hàm khác,
// ví dụ như trong các hàm xử lý sự kiện hoặc các hàm callback

// thường sử dụng trong function expressions.
setTimeout(function() {
    console.log('sau 3 giay thi hien dong message nay.')
}, 3000)

setTimeout(() => {
    console.log('sau 3 giay thi hien dong message nay.')
}, 3000)