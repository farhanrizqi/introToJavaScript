// ! array
let month = ["januari", "maret", "april"];
let year = [2019, 2018, [2017.1, 2017.2], 2016];
console.log(year[2][1]);
console.log(`berikut tampilan dari array month: ${month}`);
console.log(month);

//! push, memasukkan value ke array pada index terakhir
month.push("mei");
console.log(`berikut tampilan array setelah di push ${month}`);

//! delete menghapus value di array
delete month[0];
console.log(`berikut tampilan array setelah delete ${month}`);

//! shift & unshift, shift untuk menghapus index awal array dan unshift untuk memasukkan value pada index awal array
month.shift();
console.log(`berikut tampilan array setelah di shift ${month}`);
month.unshift("januari");
console.log(`berikut tampilan array setelah di unshift ${month}`);

//! splice, digunakan untuk mengubah, menghapus, menambahkan value kedalam array pada index yang diinginkan
month.splice(1, 1);
console.log(`berikut tampilan array setelah di splice ${month}`);

month.splice(1, 0, "februari");
month.splice(2, 0, "maret");
console.log(
  `berikut tampilan array setelah memasukkan nilai menggunakan splice ${month}`
);

//! spread operator '...' digunakan untuk meleburkan nilai pada array
const fav = ["musik", "makan", "tidur"];
console.log(fav);
console.log(...fav);

const warna = ["biru", "merah", "kuning"];
const gabung = [...fav, ...warna];
// const gabung = [fav, warna];
console.log(gabung);

//! spread operator on obj literal
const nama = {
  firstName: "Farhan",
  umur: 30,
};
const akhir = {
  lastName: "Rizqi",
  gender: "L",
};

const gabungObj = { ...nama, ...akhir };
console.log(gabungObj);

//!  Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.
//! Destructuring Object
const profile = {
  firstName: "Farhan",
  lastName: "Rizqi",
  age: 22,
};

// let firstName = 'Aminullah';
// let age = 23;

// ({firstName, age} = profile);

// const {firstName, lastName, age} = profile;
// console.log(firstName, lastName, age);

//! Default Values (undefined) dan untuk assign value menggunakan "="
// const {firstName, lastName, age, isMale} = profile;
// console.log(firstName, lastName, age, isMale);
//! assign
const { firstName, lastName, age, isMale = true } = profile;
console.log(firstName, lastName, age, isMale);

//! assigning to different local variables names
const {
  firstName: localFirstName,
  lastName: localLastName,
  age: localAge,
} = profile;
console.log(localFirstName, localLastName, localAge);

// ! destructuring array
const buah = ["jambu", "mangga", "sirsak"];

// const [indexSatu, indexDua, indexTiga] = buah;
// const [, , indexTiga] = buah;
// console.log(indexTiga);

//! destructuring array assignment
// let myFood = "ice cream";
// let herFood = "ice block";

// [myFood, herFood] = buah;

// console.log(myFood, herFood);

//! switching values
let a = 1;
let b = 2;
console.log(`sebelum di swap ${a} dan ${b}`);

[a, b] = [b, a]; //menukar nilai a menjadi b dan b menjadi a

console.log(`setelah di swap ${a} dan ${b}`);

//! Map
//* Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object.
//* yang membedakan adalah Map memperbolehkan key dengan tipe data apapun, dibandingkan Object yang hanya string dan symbol

// const myMap = new Map([
//   ["1", "sebuah string key"],
//   [1, "sebuah number key"],
//   [true, true],
// ]);

//* mendapatkan nilai menggunakan get() dan untuk menambahkan pasangan key-value menggunakan set()
const myNama = new Map([
  ["jakarta", "indonesia"],
  ["karangtengah", "cianjur"],
  ["ledeng", "bandung"],
]);

console.log(myNama.size);
console.log(myNama.get("jakarta"));
myNama.set("ciputat", "tangerang");
console.log(myNama.size);
console.log(myNama.get("ciputat"));

//* cara menggunakan fitur .has dan .delete map
myNama.delete("ciputat");

console.log(myNama.size);

//! set
//* set merupakan kumpulan nilai (set of values). data pada set tidak berurutan dan juga tidak diindeks.
//* data pada set juga bersifat unik dan tidak ada duplikasi

const numberSet = new Set([1, 4, 5, 6, 4, 1]);
numberSet.add(12);
numberSet.add(10);
numberSet.delete(10);

console.log(numberSet);

//! WeakMap
//* weakmap merupakan varian dari map yang mendukung garbage collection. garbage collection merupakan
//* proses dimana interpreter js mengambil kembali memori yang tidak lgi dapat di jangkau dan tidak dapat digunakan oleh program

// const visitMap = new Map();

// function countUser(user) {
//   let count = visitMap.get(user) || 0;
//   visitMap.set(user, count + 1);
// }

// let jonas = { name: "jonas" };
// countUser(jonas);

// jonas = null;

// // * setTimeout merupakan fungsi yang digunkan untuk menunda eksekusi kode yang
// setTimeout(function () {
//   console.log(visitMap);
// }, 1000);

// ! weakMap
const { inspect } = require("util");

const visitCountMap = new WeakMap();

function countUser(user) {
  let count = visitCountMap.get(user) || 0;
  visitCountMap.set(user, count + 1);
}

let jonas = { name: "john" };
countUser(jonas);

jonas = null;

setTimeout(function () {
  console.log(inspect(visitCountMap, { showHidden: true }));
}, 10000);
