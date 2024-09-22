// 
/**
 * Trong js,  mangr array là một kiểu dữ liệu dùng để lưu trữ danh sách các giá trị.
 * Các giá trị trong mảng có thể là bất kỳ kiểu dữ liệu nào, number, object, thâm chí là mảng khác.
 * Mảng trong js có các chỉ số - index từ -. nghĩa là phần tử đầu tiên của mảng có index là 0
 */

let arr = ["apple", "banana", "cherry"];
console.log("Last item: ", arr[arr.length - 1]);

arr.push('carrot');

console.log("After adding: ", arr);

arr.pop();

console.log("After removing: ", arr);

arr.unshift('mango');

console.log("After adding at the beginning: ", arr);

arr.shift();

console.log("After removing at the beginning: ", arr);
console.log("----------------");
arr.forEach((item, index) => {
    console.log(`Index: ${index}, Item: ${item}`);
})

//  map() tạo một mảng mới với các phần tử biến đổi từ mảng gốc
// không ảnh hưởng mảng ban đầu.
console.log("-----------------")
let newArr = arr.map((item) => {
    return item + " (new)";
})

console.log("New array after mapping: ", newArr);

//  filter() tạo một mảng mới với các phần tử từ mảng gốc theo điều kiện đã cho.

console.log("-----------------")
let filteredArr = arr.filter((item) => {
    return item.startsWith('c');
})

console.log("Filtered array: ", filteredArr);

// find() tìm phần từ đầu tiên thỏa mãn điều kiện

console.log("-----------------")
let foundItem = arr.find((item) => {
    return item.startsWith('c');
})

console.log("Found item: ", foundItem);

// reduce() tính tổng, trung bình, max, min của mảng

console.log("-----------------")
let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.length;
}, 0);

console.log("Sum of lengths: ", sum);

// some() kiểm tra xem mảng có ít nhất 1 phần tử thỏa mãn
// điều kiện không, trả về boolean
// tìm ra là trả về luôn, tối ưu rất tốt

console.log("-----------------")
let hasCarrot = arr.some((item) => {
    return item === 'carrot';
})

console.log("Has carrot: ", hasCarrot);

