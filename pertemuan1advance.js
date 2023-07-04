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
        // const max = 10;
        for (let i = 0; i < num; i++) {
          id += Math.floor(Math.random() * 10);
        }
        resolve(id);
      } else {
        reject("parameter harus berupa angka");
      }
    }, 1000);
  });
};

generateId(10)
  .then((res) => {
    console.log(`your ID: ${res}`);
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });

// ! soal 3
const pokemonData = () => {
  return new Promise((resolve, reject) => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    fetch(url)
      .then((res) => res.json())
      .then((dataPoke) => {
        const pokeData = dataPoke.results.map((poke) => {
          const id = poke.url.split("/").slice(-2, -1)[0];
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          console.log(`name: `, poke.name);
          console.log(`url: `, poke.url);
          console.log(`image: `, img);
          console.log(`----------------`);
        });

        resolve(pokeData);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

pokemonData();

// !
// const pokemonData = async () => {
//   const url = "https://pokeapi.co/api/v2/pokemon";
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     data.results.map(async (data) => {
//       const id = data.url.split("/").slice(-2, -1)[0];
//       const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

//       console.log(`name : `, data.name);
//       console.log(`url : `, data.url);
//       console.log(`image : `, img);
//       console.log("-----------------");
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// pokemonData();

// ! soal 4

const getDataTodo = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

getDataTodo()
  .then((res) => {
    res.map((item) => {
      console.log(item.title);
    });
  })
  .catch((err) => {
    console.log(err);
  });
