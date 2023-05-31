// ! constructor function
//* constructor function dibedakan dengan cara penamaan dengan huruf kapital dan hanya dapat dibuat dengan regular function
// function Car(brand, color, engine) {
//   this.brand = brand;
//   this.color = color;
//   this.engine = engine;
// }

// Car.prototype.drive = function () {
//   console.log(`${this.brand} with ${this.color} color is driving`);
// };

// Car.prototype.reverse = function () {
//   console.log(`${this.brand} with ${this.color} color is reversing`);
// };

// * membuat objek mobil dengan constructor function car
// const car1 = new Car("toyota", "blue", "v12");
// const car2 = new Car("ford", "green", "v8");
// const car3 = new Car("mazda", "yellow", "v8");

// console.log(car1);
// car1.drive();
// car2.reverse();

//! membuat function constructor dengan class
// class Car {
//   constructor(brand, name, color) {
//     this.brand = brand;
//     this.name = name;
//     this.color = color;
//     this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
//   }
// }
//   drive() {
//     console.log(`${this.color} ${this.brand} ${this.name} is driving`);
//   }
//   reverese() {
//     console.log(`${this.color} ${this.brand} ${this.name} is reversing`);
//   }
//   turn() {
//     console.log(`${this.color} ${this.brand} ${this.name} is reversing`);
//   }
// }

// const car1 = new Car("Toyota", "Supra", "black");

// console.log(car1);
// car1.drive();

// ! getter and setter
// * ada dua tipe data properti yaitu data property dan accessor property
// *data property, properti yang langsung menampung sebuah nilai dalam sebuah objek
// *accessor property, properti yang dikontrol oleh getter dan setter
// * nilai yang didapatkan dikontrol oleh method get dan menetapkan nilai dengan cara set

// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }

//   get akun() {
//     return `${this.username} ${this.password}`;
//   }

//   set akun(akun) {
//     const [username, password] = akun.split(" ");
//     this.username = username;
//     this.password = password;
//   }
// }

// const user = new User("Farhan", "admin");
// console.log(user);
// console.log(user.akun);

// user.akun = "Farhan admin";
// console.log(user);
// console.log(user.akun);

// * private ditandai dengan '#'
// class Car {
//   #chassisNumber = null;

//   constructor(brand, color, engine) {
//     this.brand = brand;
//     this.color = color;
//     this.engine = engine;
//     this.#chassisNumber = this.#generateChassisNumber();
//   }

//   get chassisNumber() {
//     return this.#chassisNumber;
//   }

//   set chassisNumber(chassisNumber) {
//     console.log("you are not allowed to change this number");
//   }

//   #generateChassisNumber() {
//     return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
//   }
// }

// const car = new Car("BMW", "Red", "V8");
// console.log(car._chassisNumber);
// car._chassisNumber = "BMW-1";
// console.log(car._chassisNumber);
// console.log(car.#generateChassisNumber());

// class Mail {
//   constructor(sender, receiver, subject, body) {
//     this.sender = sender;
//     this.receiver = receiver;
//     this.subject = subject;
//     this.body = body;
//   }

//   //? Methods
//   send() {
//     console.log(`sending mail from${this.sender} to ${this.receiver}`);
//   }

//   sendLater(delay) {
//     console.log(`sending after ${delay}ms`);

//     setTimeout(() => {
//       this.send();
//     }, delay);
//   }

//   saveAsDraft() {
//     console.log(`saving mail as draft`);
//   }
// }

// ! pewarisan

