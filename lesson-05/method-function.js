// là hàm phương thức: là hàm định nghĩa, khai báo bên trong đối tượng
// được coi là một phương thức của đối tượng.


const app = {
    // biến static
    name: "Node.js",

    // phương thức
    sayHello: function() {
        console.log(`Hello from ${this.name}`);
    },

    // phương thức với đối số
    greet: (name) => {
        console.log(`Hello, ${name} from ${this.name}`);
    }  // ****arrow function sẽ không có this
};
app.sayHello()
app.greet()