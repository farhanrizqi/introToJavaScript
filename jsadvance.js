// ! soal 1
// ? soal 1 a
// const getDataPost = (method, url, callback) => {
//   const ajax = new XMLHttpRequest();
//   ajax.open(method, url);
//   ajax.send();

//   ajax.onreadystatechange = () => {
//     if (ajax.status === 200) {
//       const hasil = JSON.parse(ajax.responseText);
//       callback(hasil);
//     } else {
//       console.log("ada error");
//     }
//   };
// };
// getDataPost("get", "https://jsonplaceholder.typicode.com/posts", (posts) => {
//   posts.map((item) => {
//     console.log(`title: ${item.title}`);
//     console.log(`body: ${item.body}`);
//   });
// });
// ? soal 1 b

// const getDataPost = (method, url) => {
//   return new Promise((resolve, reject) => {
//     const ajax = new XMLHttpRequest();
//     ajax.open(method, url);
//     ajax.send();

//     ajax.onreadystatechange = () => {
//       if (ajax.status === 200) {
//         const hasil = JSON.parse(ajax.responseText);
//         resolve(hasil);
//       } else {
//         reject("ada error");
//       }
//     };
//   });
// };

// getDataPost("GET", "https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     res.map((item) => {
//       console.log(`title: ${item.title}`);
//       console.log(`body: ${item.body}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ! soal 2
const generateId = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        let id = "";
        const max = 9;
        for (let i = 0; i < num; i++) {
          id += Math.floor(Math.random() * (max + 1));
        }
        resolve(id);
      } else {
        reject("parameter harus berupa angka");
      }
    }, 1000);
  });
};

generateId(15)
  .then((res) => {
    console.log(`your ID: ${res}`);
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });
