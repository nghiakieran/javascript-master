// concat() dùng để nối hai hoặc nhiều mảng lại với nhau, không làm thay đổi mảng gốc,
// mà trả về một mảng mới chứa tất cả các phần tử của các mảng được nối
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const concatResult = arr1.concat(arr2)
console.log('After concat(): ', concatResult)

// slice() trả về một mảng con của mảng ban đầu, từ vị trí startIndex đến endIndex
// (khong bao gom endIndex). Khong làm thay đổi mảng gốc.
const arr3 = [1, 2, 3, 4, 5, 6]
const sliceResult = arr3.slice(1, 6);
console.log('After slice(): ', sliceResult)

// splice() dung để thay đổi nội dung của mảng bằng cách xóa, thêm hoặc sửa phần tử của mảng.
// Sẽ làm thay đổi mảng gốc ban đầu.
const arr4 = [1, 2, 3, 4, 5, 6]
const resultSplice = arr4.splice(2, 3, 'a', 'b');
console.log('After splice(): ', resultSplice);
console.log('                ', arr4);

// every() kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện của hàm callback không.
// Trả về true nếu tất cả thỏa mãn, ngược lại trả về false

const arr5 = [1, 2, 3, 4 , 5, 6]
const allPositive = arr5.every((num) => {
    return num > 0;
})
// cach khac: num => num > 0;

console.log('After every(): ', allPositive);

// findIndex() trả về chỉ số index cùa phần tử đầu tiên trong mảng thỏa mãn điều kiện 
// trong hàm callback. Nếu không có phần tử nào thỏa mãn, trả về -1.

const arr6 = [1, 2, 3, 4, 5, 6]
const findIndexResult = arr6.findIndex(num => num > 3)
console.log('After findIndex(): ', findIndexResult);

// toString() Nối tất cả phần tử trong mảng thành một chuỗi String

const arr7 = [1, 2, 3, 4, 5, 6]
const toStringResult = arr7.toString()
console.log('After toString(): ', toStringResult);

// join() Nối tất cả phần tử trong mảng thành một chuỗiString (khác toString ở điểm)
//  nó có thể chỉ định thêm dấu phân cách.

const arr8 = [1, 2, 3, 4, 5, 6]
const joinResult = arr8.join('-')
console.log('After join(): ', joinResult);

