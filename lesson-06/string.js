// charAt() trả về ký tự tại một vị trí cụ thể trong chuỗi. Vị trí bắt đầu từ 0. Trả về String
// rỗng nếu vị trí không tồn tại.
const str1 = 'Hello world'
console.log(str1.charAt(0));

// concat() được sử dụng để nối hai hoặc nhiều chuỗi lại với nhau và trả về một chuỗi mới.
// Không làm thay đổi chuỗi gốc ban đầu
const str2 = 'Hello';
const str3 = 'Nghia';
console.log("After concat(): ", str2.concat(' ').concat(str3));

// includes() kiểm tra xem chuỗi có chứa một chuỗi con cụ thể hay không.
// Trả về true nếu chuỗi con được tìm thấy. Ngược lại thì false.
const str4 = "NghiaLee";
console.log("After includes():", str4.includes('nghia')); //false m phan biet hoa thuong

// indexOf() trả về index của lần xuất hiện đầu tiên của chuỗi con trong chuỗi.
// Nếu chuỗi con không được tìm thấy, nó sẽ trả về -1.
const str5 = "NghiaLee";
console.log("After indexOf():", str4.indexOf('Lee')); //5, phan biet hoa thuong


// split() chia chuỗi thành một mảng các chuỗi con dựa trên một ký tự nhận diện.
//  Sẽ không làm thay đổi chuỗi gốc ban đầu.
const str6 = 'JS, TS, React, Node, Nghia';
console.log('After split(): ', str6.split(', '));//ket qua tao ra mot mang

// slice() trả về một chuỗi con từ một chuỗi gốc ban đầu, từ vị trí startIndex đến endIndex
// (không bao gồm endIndex). Không làm thay đổi chuỗi gốc ban đầu. Nếu chúng ta cố tình để start > end
//  thì slice sẽ trả về chuỗi rỗng.
const str7 = 'JS is fun and not easy';
const sliceResult = str7.slice(0, 10);
const sliceResult_2 = str7.slice(10, 0);

console.log('After slice(): ', sliceResult); // 'JS is fun'

console.log('After slice_2(): ', sliceResult_2); // ''


// substring() khá giống slice(): nó cũng trả về một chuỗi con từ một chuỗi gốc ban đầu, từ chỉ số startIndex
// đến endIndex (không bao gồm endIndex). Tuy nhiên khác với slice() ở 1 điểm: substring() sẽ hoán đổi
// startIndex và endIndex nếu chung ta vô startIndex lớn hơn endIndex
const str8 = 'JS is fun and not easy';
const subStringResult = str8.substring(0, 10);
const subStringResult_2 = str8.substring(10, 0);

console.log('After substring(): ', subStringResult); // 'JS is fun'

console.log('After substring_2(): ', subStringResult_2); // 'JS is fun and not easy'