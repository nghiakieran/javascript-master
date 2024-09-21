// Hoisting: Biến khai báo bằng let sẽ được hoisted (di chuyển lên đầu phạm vi khối (scope) của nó )
// nhưng lại không được khởi tạo giá trị mặc định ban đầu nào cả. Cho nên chúng ta không thể
// sử dụng biến trước khi khai báo.

// console.log("name: ", name);

let name = "Nghia";
console.log("name: ", name);
// Tái khai báo: Không thể tái khai báo cùng một biến let nhiều lần.


// Gán lại: Có thể gán lại giá trị của biến let
name = "Nghĩa - 3";
console.log("name: ", name);