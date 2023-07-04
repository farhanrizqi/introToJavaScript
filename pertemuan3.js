// soal no 1
const printOddNumber = (num) => {
  for (i = 1; i <= num; i += 2) {
    console.log(i);
  }
};

printOddNumber(10);

// soal no 2
const printPijarCamp = (num) => {
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("pijarCamp");
    } else if (i % 5 === 0) {
      console.log("camp");
    } else if (i % 3 === 0) {
      console.log("pijar");
    } else {
      console.log(i);
    }
  }
};

printPijarCamp(15);

// soal no 3
const combineArray = () => {
  const fav = ["musik", "makan", "tidur"];
  const warna = ["biru", "merah", "kuning"];
  return [...fav, ...warna];
};

const combinedArray = combineArray();
console.log(combinedArray);

const combineObjects = () => {
  const nama = {
    firstName: "Farhan",
    umur: 30,
  };
  const akhir = {
    lastName: "Rizqi",
    gender: "L",
  };

  return { ...nama, ...akhir };
};

const combinedObjects = combineObjects();
console.log(combinedObjects);
