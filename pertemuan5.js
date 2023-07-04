// soal no 1
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
};

const pushMethod = (key, value) => {
  biodata[key] = value;
};

pushMethod("printNama", (namaLengkap) => {
  return `halo nama saya ${namaLengkap}`;
});
pushMethod("printEmail", (email) => {
  return `ini email saya ${email}`;
});
pushMethod("printPhoneNumber", (nomorHandphone) => {
  return `dan ini nomor saya ${nomorHandphone}`;
});

const cetakNama = biodata.printNama(namaLengkap);
const cetakEmail = biodata.printEmail(email);
const cetakNomor = biodata.printPhoneNumber(nomorHandphone);

console.log(cetakNama);
console.log(cetakEmail);
console.log(cetakNomor);

// soal no 2
const greeting = (
  clock,
  functionReturnDay,
  fullName,
  functionReturnFirstName
) => {
  const jam = functionReturnDay(clock);
  const firstName = functionReturnFirstName(fullName);

  console.log(`Selamat ${jam}, ${firstName}! `);
};

// returnDay
const functionReturnDay = (clock) => {
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

// returnFirstName
const functionReturnFirstName = (fullName) => {
  let firstName = fullName.split(" ", 1);
  return firstName;
};

const clock = 14;
const fullName = "Farhan Rizqi Aminullah";

greeting(clock, functionReturnDay, fullName, functionReturnFirstName);

// soal no 3
const printTriangleWithNumber = (num) => {
  if (typeof num === "number") {
    for (let i = num; i >= 1; i--) {
      let bintang = "";
      for (let j = 1; j <= i; j++) {
        bintang += j + " ";
      }
      console.log(bintang);
    }
  } else if (isNaN(num)) {
    console.log("paramter harus angka");
  } else {
    console.log("parameter harus angka");
  }
};

printTriangleWithNumber(5);
