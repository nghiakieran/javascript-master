// Hoisting: Biến khai báo bằng var sẽ được hoisted (di chuyển lên đầu phạm vi khối (scope) của nó )
// và đồng thời biến đó được khởi tạo giá trị mặc định ban đầu là undefined. Cho nên chúng ta có thể
// sử dụng biến trước khi khai báo nó mà không gặp lỗi.  (biến được declare lên đầu hàm một cách implicit)
console.log("name: ", name);

var name = "Nghia";
console.log("name: ", name);

// Tái khai báo: Có thể tái khai báo cùng một biến var nhiều lần trong cùng
// một phạm vi mà không gặp lỗi
var name = "Nghĩa - 2";
console.log("name: ", name);

// Gán lại: Có thể gán lại giá trị của biến var
name = "Nghĩa - 3";
console.log("name: ", name);