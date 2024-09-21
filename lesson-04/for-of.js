// for of: dùng để lặp qua các giá trị của một iterable object (những đối tượng có thể lặp),
// phổ biên như array, String,...

// Sự khác biệt với for in: 
// 
let fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
    console.log(fruit);
}

let username = "Le Chi Nghia";

for (let char of username) {
    console.log(char);
}



let people = {
    name: "John Doe",
    age: 30,
    hobbie: ['play games', 'gym', 'listen to music']
}

for (let key of people) { // error vì json object không phải là một iterable object
    console.log(`${key}: ${people[key]}`);
}