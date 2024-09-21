//  Trong js, đối tượng object là một cấu trúc dữ liêu linh hoạt và mạnh mẽ,
// cho phép lưu trữ và quản lý các dữ liệu phức tạp. Đối tượng bao gồm các cặp key-value.
// Mỗi key là một chuỗi string và giá trị có thể là bất kì loại dữ liệu nào, bao gồm các 
// đối tượng khác(nested object)


// cú pháp object literal

let person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};
console.log(person)


// cú pháp new

let person2 = new Object();
person2.name = 'Jane Doe';
person2.age = 28;
person2.address = {
    street: '456 Elm St',
    city: 'Los Angeles',
    state: 'CA'
};

console.log(person2)

// Có 2 cách để truy cập đến thuộc tính của Object
console.log(person2.name)
console.log(person2['name'])

// Theem sửa xóa thuộc tính của Object
person2.gender = 'male';
delete person2.age
console.log(person2)