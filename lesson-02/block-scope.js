// Scope: được xác định bởi cặp dấu{}
// Kết luận về Scope - phạm vi một khối {block scope}
// Biến khai báo bằng let và const có phạm vi trong một khối, nghĩa là nó chỉ tồn tại
// trong khối mà nó được khai báo.

// Biến khai báo bằng var có 2 trường hợp:
    // 1. Phạm vi toàn cục nếu nó được khai báo bên ngoài bất kỳ hàm nào (ngoài cùng của file)
    // 2. Phạm vi cụ thể trong một hàm nếu nó được khai báo bên trong một hàm. Điều này khiến cho var
    // có scope lỏng lẻo. Vậy nên thực tế chỉ sử dụng let, const để khai báo biến.

// Note: Let và const xuất hiện khi có phiên bản ES6, var từ xưa.
const testScope = () => {
    {
        var scopeVar = "Nghiax -var";
        let scopeLet = "Nghiax -let";
        const scopeConst = "Nghiax -const"; 
    }
    console.log(scopeVar);
    // console.log(scopeLet);
    // console.log(scopeConst);
}

testScope();