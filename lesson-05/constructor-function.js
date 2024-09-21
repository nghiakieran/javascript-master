// hàm khởi tạo: sử dụng để tạo đối tượng mới. Kết hợp với new

function Car(make, model, year) {
    // thuộc tính (properties) của đối tượng
    this.make = make;
    this.model = model;
    this.year = year;

    // phương thức (methods) của đối tượng
    this.drive = function() {
        return `${this.make} ${this.model} is driving`;
    };
}

const myCar = new Car("Toyota", "Camry", 2021);

console.log(myCar.drive()); // Output: Toyota Camry is driving