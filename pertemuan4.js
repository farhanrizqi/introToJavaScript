// soal no 1
const storedObjects = {};

const isiObject = (key, value) => {
  storedObjects[key] = value;
};

isiObject("nama", "farhan");
isiObject("kota", "cianjur");
console.log(storedObjects);

// soal no 2
const printSquare1 = (num) => {
  for (let i = 0; i < num; i++) {
    let bintang = "";
    for (let j = 0; j < num; j++) {
      bintang += " *";
    }
    console.log(bintang);
  }
};

printSquare1(4);

// soal no 3
const returnFirstName = (fullName) => {
  let firstName = fullName.split(" ", 1);
  return firstName;
};

const printFirstName = returnFirstName("Farhan Rizqi Aminullah");
console.log(printFirstName);

const returnDay = (clock) => {
  if (clock <= 12 && clock >= 5) {
    return "pagi";
  } else if (clock <= 15 && clock >= 13) {
    return "siang";
  } else if (clock <= 18 && clock >= 16) {
    return "sore";
  } else if ((clock <= 24 && clock >= 19) || (clock <= 4 && clock >= 0)) {
    return "malam";
  } else {
    return "mohon masukan angka 1 - 24";
  }
};

const print = returnDay(1);
console.log(print);
