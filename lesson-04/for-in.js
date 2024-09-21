// Vòng lặp loop là một cấu trúc điều khiển dùng để lặp lại một đoạn code nhiều lần.
// thường sử dụng khi cần thực hiện một hành động nhiều lần cho đến khi một điều kiện 
// nào đó được thỏa mãn.
// lặp qua các thuộc tính của đối tượng
let people = {
    name: "John Doe",
    age: 30,
    hobbie: ['play games', 'gym', 'listen to music']
}

for (let prop in people) {
    console.log(`${prop}: ${people[prop]}`);
    if (prop  === 'hobbie') {
        console.log('Hobbies:')
        people[prop].forEach(hobby => console.log(`- ${hobby}`))
    }
}
