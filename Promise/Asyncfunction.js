//! Async Function

async function getusers() {
  try {
    let response = (await fetch("https://jsonplaceholder.typicode.com/users"))
      .json()
      .then((data) => {
        data.forEach((user) => {
          console.log(user.username);
        });
      });
  } catch (error) {
    console.log("data not found");
  }
}
getusers();

// async function getusers(){
//     response= fetch("https://jsonplaceholder.typicode.com/users")
//     data = response.json().then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//         console.log("data not found")
//     })
// }
// getusers();
// console.log("hello");

// setTimeout(function () {
//   console.log("Ram");
// }, 1000);

// function getusers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       data.forEach((user) => {
//         console.log(user.username);
//       });
//     })
//     .catch((error) => {
//       console.log("data not found");
//     });
// }
// getusers();
// console.log("hello");t
