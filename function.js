// ! declaring function
// function greeting(name, language) {
//   if (language === "french") {
//     console.log(`bonjour, ${name}`);
//   } else if (language === "english") {
//     console.log(`hello, ${name}`);
//   } else {
//     console.log(`halo, ${name}`);
//   }
// }

// greeting("farhan", "english");

// ! return value in function
// function greeting(name, language) {
//   if (language === "french") {
//     return `bonjour, ${name}`;
//   } else if (language === "english") {
//     return `hello, ${name}`;
//   } else {
//     return `halo, ${name}`;
//   }
// }

// let greetingPerson = greeting("farhan", "english");
// console.log(greetingPerson);

// ! expression function
// const greeting = function (name, language) {
//   //* fungsi yang tidak bernama disebut anonymous function
//   if (language === "french") {
//     return `bonjour, ${name}`;
//   } else if (language === "english") {
//     return `hello, ${name}`;
//   } else {
//     return `halo, ${name}`;
//   }
// };

// console.log(greeting("farhan", "french"));

// ! function parameter
// const user = {              //* parameter dapat menggunakan key dari suatu object.
//   age: 23,
//   name: "farhan",
//   state: "indonesia",
// };

// function introduce({ name, state }) {
//   console.log(`hi name is ${name} and i'm from ${state}`);
// }

// introduce(user);

// function operasiFormula(num1, num2) {            //* parameter yang tidak terdefinisikan bernilai undefined
//   const hasil = num1 ** num2;
//   console.log(`${num1}^${num2} = ${hasil}`);
// }

// operasiFormula(1);

// function operasiFormula(num1, num2 = 2) {
//   //* kita bisa menentukan default value parameter
//   const hasil = num1 ** num2;
//   console.log(`${num1}^${num2} = ${hasil}`);
// }
// operasiFormula(8);

// ! rest parameter
// * rest  parameter menggunakan tanda '...' seperti spread operator. digunakan untuk menggabungkan parameter
// function tambah(...num) {
//   let result = 0;
//   for (let i of num) {
//     result += i;
//   }
//   return result;
// }

// console.log(tambah(1, 2, 3, 4, 5));

// ! arrow function
const nama = (awal, akhir) => {
  console.log(`nama saya ${awal} ${akhir}`);
};

nama("farhan", "rizqi");

// * kita bisa tidak menggunakan 'return' jika pada function satu baris
const angka = (a, b) => a * b;
console.log(angka(2, 3));

// ! scoping
// * pendefisian variable harus diperhaitkan, jika pendeklarasian pada variable pada function lokal tidak menggunakan var, let, atau const
// * variable tersebut akan menjadi global
// * penulisan variable global diusahakan seminimal mungkin

// ! closure
function init() {
  const name = "farhan";
  function halo() {
    console.log(`nama saya ${name}`);
  }
  halo();
}

init();
