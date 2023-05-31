// ! ToDo 1
// const restaurant = {
//   name: "Bakso Mang Dicoding",
//   city: "Bandung",
//   "favorite drink": "Es Teh",
//   "favorite food": "Bakso",
//   isVegan: false,
// };

// let name = restaurant.name;
// let favoriteDrink = restaurant["favorite drink"];

// console.log(restaurant.name);
// console.log(favoriteDrink);

// ! ToDo 2
// let evenNumber = [];

// for (var i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     evenNumber.push(i);
//   }
// }

// console.log(evenNumber);

// ! ToDo 3
const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);

const priceInJPY = 5000;

const priceInIDR = priceInJPY * currency.get("JPY");

console.log(priceInIDR);

// ! lat bagian function
function minimal(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else if (a === b) {
    return a;
  }
}

let hasil = minimal(2, 2);
console.log(hasil);

function findIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}

let find = findIndex([1, 2, 3, 4, 5], 3);
console.log(find);
