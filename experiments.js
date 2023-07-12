const array1 = [0, [1, 2, 3, 4, 5, 6]];
const array2 = [[7, 8, 9], 10];
const coba = (a, b, ...c) => {
  console.log(...a, b, c);
};

coba(array1, "hello", array2);

// ! destructuring
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   middleName: "C.",
//   currentAge: 28,
// };

// let { firstName, lastName, middleName = "", currentAge = 18 } = person;

// console.log(middleName);
// console.log(currentAge);

// method
const namaLengkap = "Farhan Rizqi Aminullah";
let email = "farhanrizqi008@gmail.com";
let nomorHandphone = "089657514884";
let umur = 22;
const tempatTanggalLahir = "Tangerang, 26 Juni 2000";
let alamat = "Gading Asri Jl.Cempaka C.69, kec.Karantengah";
let kota = "Cianjur";
let provinsi = "Jawa Barat";
let kodePos = "43281";
let programmingExp = ["HTML", "CSS", "JavaScript"];
let riwayatPendidikan = [
  {
    nama: "SDN Ibu Jenab 1 Cianjur",
    tingkat: "SD",
    tahunMulai: 2006,
    tahunBerakhir: 2012,
    jurusan: null,
    diRekomendasi: false,
    lokasi: "Cianjur, Jawa Barat",
    pengajarFav: ["Bu Fitri", "Pa Yayat"],
    materiFav: [
      {
        nama: "Bahasa Inggris",
        date: 2006,
        pengajar: "Bu Fitri",
        alasan: ["karena suka film barat", "suka mendengarkan lagu barat"],
        apakahSulit: false,
      },
      {
        nama: "Olahraga",
        date: 2006,
        pengajar: undefined,
        alasan: ["karena sehat", "menyenangkan"],
        apakahSulit: false,
      },
      {
        nama: "Seni Budaya",
        date: 2006,
        pengajar: undefined,
        alasan: ["menyenangkan", "dapat berkreasi"],
        apakahSulit: false,
      },
    ],
  },
  {
    nama: "SMPN 4 Cianjur",
    tingkat: "SMP",
    tahunMulai: 2012,
    tahunBerakhir: 2015,
    jurusan: null,
    diRekomendasi: false,
    lokasi: "Cianjur, Jawa Barat",
    pengajarFav: ["Bu Enen", "Bu Rita"],
    materiFav: [
      {
        nama: "Bahasa Inggris",
        date: 2012,
        pengajar: "Bu Rita",
        alasan: ["karena suka film barat", "suka mendengarkan lagu barat"],
        apakahSulit: false,
      },
      {
        nama: "Olahraga",
        date: 2012,
        pengajar: "Pa Toto",
        alasan: ["karena sehat", "menyenangkan"],
        apakahSulit: false,
      },
      {
        nama: "Seni Budaya",
        date: 2012,
        pengajar: "Pa Edi",
        alasan: ["menyenangkan", "dapat berkreasi"],
        apakahSulit: false,
      },
      {
        nama: "Matematika",
        date: 2012,
        pengajar: "Bu Rita",
        alasan: ["menantang", "memancing rasa penasaran"],
        apakahSulit: true,
      },
    ],
  },
  {
    nama: "SMKN 1 Cianjur",
    tingkat: "SMK",
    tahunMulai: 2015,
    tahunBerakhir: 2018,
    jurusan: "Rekayasa Perangkat Lunak",
    diRekomendasi: false,
    lokasi: "Cianjur, Jawa Barat",
    pengajarFav: ["Pa Yayat", "Pa Luddie"],
    materiFav: [
      {
        nama: "Bahasa Inggris",
        date: 2015,
        pengajar: "Pa Nurrohman",
        alasan: ["karena suka film barat", "suka mendengarkan lagu barat"],
        apakahSulit: false,
      },
      {
        nama: "Olahraga",
        date: 2015,
        pengajar: "Pa Fahmi",
        alasan: ["karena sehat", "menyenangkan"],
        apakahSulit: false,
      },
      {
        nama: "Pemrograman Web",
        date: 2015,
        pengajar: "Pa Yayat",
        alasan: [
          "menantang",
          "menarik perhatian karena dapat menemukan hal-hal baru",
        ],
        apakahSulit: true,
      },
    ],
  },
  {
    nama: "Universitas Pendidikan Indonesia",
    tingkat: "Universitas",
    tahunMulai: 2018,
    tahunBerakhir: 2023,
    jurusan: "Pendidikan Bahasa Perancis",
    diRekomendasi: false,
    lokasi: "Bandung, Jawa Barat",
    pengajarFav: ["Madame Dini", "Madame Iim"],
    materiFav: [
      {
        nama: "Francais des Medias",
        date: 2021,
        pengajar: "Madame Icha",
        alasan: ["karena bisa berkreasi", "dapat melatih kreativitas"],
        apakahSulit: false,
      },
      {
        nama: "Comprehension Ecrite",
        date: 2018,
        pengajar: "Madame Iim",
        alasan: ["karena mudah", "lebih bisa menjawab tulisan daripada lisan"],
        apakahSulit: false,
      },
      {
        nama: "Francais des affairs",
        date: 2021,
        pengajar: "Madame Iim",
        alasan: [
          "menambah wawasan",
          "dapat mempelajari dunia kerja di Prancis",
        ],
        apakahSulit: false,
      },
    ],
  },
];

const golonganDarah = "A";
let hobi = ["mendengarkan musik", "olahraga", "bermain game"];
let makananFav = [
  {
    nama: "Fu Yung Hai",
    asal: "China",
  },
  {
    nama: "Cheese Cake",
    asal: "Yunani",
  },
  {
    nama: "Macarons",
    asal: "France",
  },
];

const biodata = {
  namaLengkap: namaLengkap,
  email: email,
  nomorHandphone: nomorHandphone,
  umur: umur,
  tempatTanggalLahir: tempatTanggalLahir,
  alamat: alamat,
  kota: kota,
  provinsi: provinsi,
  kodePos: kodePos,
  programmingExp: programmingExp,
  riwayatPendidikan: riwayatPendidikan,
  golonganDarah: golonganDarah,
  hobi: hobi,
  makananFav: makananFav,
  printNama: () => {
    console.log(`Nama : ${this.namaLengkap}`);
  },
  printEmail: () => {
    console.log(`email : ${this.email}`);
  },
  printPhoneNumber: () => {
    console.log(`nomor : ${this.nomorHandphone}`);
  },
};

// const pushMethod = (key, value) => {
//   biodata[key] = value;
// };

// pushMethod("printNama", (namaLengkap) => {
//   return `halo nama saya ${namaLengkap}`;
// });
// pushMethod("printEmail", (email) => {
//   return `ini email saya ${email}`;
// });
// pushMethod("printPhoneNumber", (nomorHandphone) => {
//   return `dan ini nomor saya ${nomorHandphone}`;
// });

// const cetakNama = biodata.printNama(namaLengkap);
// const cetakEmail = biodata.printEmail(email);
// const cetakNomor = biodata.printPhoneNumber(nomorHandphone);

biodata.printNama(namaLengkap);
biodata.printEmail(email);
biodata.printPhoneNumber(nomorHandphone);

// console.log(cetakNama);
// console.log(cetakEmail);
// console.log(cetakNomor);

const persegi = (num) => {
  let b = "";
  for (let i = 1; i <= num; i++) {
    for (let a = 1; a <= num; a++) {
      if (i == 1 || i == num || a == 1 || a == num) {
        b += " *";
      } else {
        b += "  ";
      }
    }
    b += "\n";
  }
  console.log(b);
};

persegi(6);

const printTriangleWithNumberExp = (num) => {
  if (typeof num === "number") {
    for (let i = num; i >= 1; i--) {
      let bintang = "";
      for (let j = num; j >= i; j--) {
        if (j >= i) {
          bintang += j;
        } else {
          bintang += " ";
        }
      }
      console.log(bintang);
    }
  } else if (isNaN(num)) {
    console.log("paramter harus angka");
  } else {
    console.log("parameter harus angka");
  }
};

printTriangleWithNumberExp(5);

// menggunakan return
// const printSquare2 = (num) => {
//   let persegi = "";
//   for (let i = 0; i < num; i++) {
//     let bintang = "";
//     for (let j = 0; j < num; j++) {
//       bintang += " *";
//     }
// console.log(bintang);
//     persegi += bintang + "\n";
//   }
//   return persegi;
// };

// const print = printSquare2(5);
// console.log(print);

// !
// const pokemonData = (method, url) => {
//   return new Promise((resolve, reject) => {
//     const ajax = new XMLHttpRequest();
//     ajax.open(method, url);
//     ajax.send();

//     ajax.onreadystatechange = () => {
//       if (ajax.status === 200) {
//         const data = JSON.parse(ajax.responseText);
//         const pokeDataArr = [];
//         data.results.forEach((dataPoke) => {
//           const id = dataPoke.url.split("/").slice(-2, -1)[0];
//           const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

//           const pokeData = {
//             image: img,
//             name: dataPoke.name,
//             url: dataPoke.url,
//           };
//           pokeDataArr.push(pokeData);
//         });
//         resolve(pokeDataArr);
//       } else {
//         reject("ada error");
//       }
//     };
//   });
// };
// pokemonData("get", "https://pokeapi.co/api/v2/pokemon")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const scoreAverage = () => {
  let scoreSum = 0;
  for (let i = 0; i < arguments.length; i++) {
    scoreSum += arguments[i];
  }
  let scoreAvg = scoreSum / arguments.length;
  console.log(scoreAvg);
  if (scoreAvg >= 90) {
    console.log("Grade = A");
  } else if (scoreAvg >= 80 && scoreAvg <= 89) {
    console.log("Grade = B");
  } else if (scoreAvg >= 70 && scoreAvg <= 79) {
    console.log("Grade = C");
  } else if (scoreAvg >= 60 && scoreAvg <= 69) {
    console.log("Grade = D");
  } else if (scoreAvg <= 59) {
    console.log("Grade = E");
  } else {
    console.log("Sorry your grade is unknown. Please contact your teacher");
  }
};

scoreAverage(1, 2, 3, 4);

const pertambahan = (num1, num2) => {
  return num1 + num2;
};

// ! search
const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const search = (keyword, limit, hasil) => {
  const filter = names
    .filter((name) => name.toLowerCase().includes(keyword.toLowerCase()))
    .slice(0, limit);
  hasil(filter);
};

const hasil = (result) => {
  console.log(result);
};

search("an", 2, hasil);
