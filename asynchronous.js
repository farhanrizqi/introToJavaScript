// const order = (callbackProduction) => {
//   console.log("order received");
//   callbackProduction();
// };

// const production = () => {
//   console.log("production started");
// };

// order(production);

// ! Callback sebagai injection function
// const calculate = (x, y) => {
//   result = x + y;
//   return result;
// };

// const hasil = calculate(2, 3);
// console.log(hasil);

// ? using callback
// const calculate = (x, y, callback) => {
//   result = x + y;

//   if (callback === "function") {
//     result = callback(x, y);
//   }
//   return result;
// };

// const sum = calculate(10, 20, function (x, y) {
//   return `Rp. ${x + y}`;
// });
// console.log(sum);

// ! callback ajax
// const coba = (callback) => {
//   // inisialisasi library XML Http Request
//   const xhr = new XMLHttpRequest();

//   // set target request
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");

//   // implementasi xhr
//   xhr.onreadystatechange = () => {
//     if (xhr.status === 200) {
//       callback(xhr.responseText);
//     } else {
//       callback("failed");
//     }
//   };
//   xhr.send();
// };

// const hasil = (data) => {
//   if (data != "failed") {
//     data = JSON.parse(data);
//     console.log(data);
//   }
// };

// coba(hasil);

// ! promise
const janjian = new Promise((resolve, reject) => {
  // resolve("berhasil");
  reject("gagal");
});

janjian
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
