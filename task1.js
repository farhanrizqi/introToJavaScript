// ! nomor 1
// const biodata = {
//   name: "Farhan Rizqi Aminullah",
//   age: 23,
//   hobbies: ["mendengarkan musik", "olahraga", "bermain game"],
//   IsMarried: false,
//   schoolList: [
//     {
//       name: "SDN Ibu Jenab 1",
//       yearIn: 2006,
//       yearOut: 2012,
//       major: null,
//     },
//     {
//       name: "SMPN 4 Cianjur",
//       yearIn: 2012,
//       yearOut: 2015,
//       major: null,
//     },
//     {
//       name: "SMKN 1 Cianjur",
//       yearIn: 2015,
//       yearOut: 2018,
//       major: "Rekayasa Perangkat Lunak",
//     },
//     {
//       name: "Universitas Pendidikan Indonesia",
//       yearIn: 2018,
//       yearOut: 2023,
//       major: "Pendidikan Bahasa Prancis",
//     },
//   ],
//   skills: [
//     {
//       skillName: "Programming",
//       level: "beginner",
//     },
//     {
//       skillName: "Microsoft Office",
//       level: "beginner",
//     },
//     {
//       skillName: "French",
//       level: "beginner",
//     },
//     {
//       skillName: "English",
//       level: "advanced",
//     },
//   ],
//   interestInCoding: true,
// };

// ! nomor 2
const scoreAverage = (indo, eng, math, ipa) => {
  if (
    typeof indo === "number" &&
    typeof eng === "number" &&
    typeof math === "number" &&
    typeof ipa === "number"
  ) {
    let scoreAvg = (indo + eng + math + ipa) / 4;
    if (scoreAvg >= 90) {
      console.log(`Your score Average: ${scoreAvg}`);
      console.log("Grade = A");
    } else if (scoreAvg >= 80 && scoreAvg <= 89) {
      console.log(`Your score Average: ${scoreAvg}`);
      console.log("Grade = B");
    } else if (scoreAvg >= 70 && scoreAvg <= 79) {
      console.log(`Your score Average: ${scoreAvg}`);
      console.log("Grade = C");
    } else if (scoreAvg >= 60 && scoreAvg <= 69) {
      console.log(`Your score Average: ${scoreAvg}`);
      console.log("Grade = D");
    } else if (scoreAvg <= 59) {
      console.log(`Your score Average: ${scoreAvg}`);
      console.log("Grade = E");
    } else {
      console.log("Sorry your grade is unknown. Please contact your teacher");
    }
  } else {
    console.log("Please enter all the scores");
  }
};
const mtk = 80;
const bahasaIndonesia = "70";
const bahasaInggris = 50;
const ipa = 69;

scoreAverage(mtk, bahasaIndonesia, bahasaInggris, ipa);

// ! nomor 3
// const printSegitiga = (num) => {
//   if (typeof num === "number") {
//     for (i = num; i >= 1; i--) {
//       let str = "";
//       for (j = 1; j <= i; j++) {
//         str += j;
//       }
//       console.log(str);
//     }
//   } else {
//     console.log("Data harus number!");
//   }
// };

// printSegitiga(5);

// !
// let data = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
// };

// const newData = {
//   ...data,
//   ...{
//     name: "Farhan",
//     email: "farhanrizqi008@gmail.com",
//     hobby: "listening to music",
//   },
// };

// const {
//   address: { street, city },
// } = data;
// console.log(street, city);

// console.log(newData);
