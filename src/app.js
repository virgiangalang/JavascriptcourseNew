//function definition
// const perpangkatan = function(n) {
//   return n * n;
// };
// console.log(perpangkatan(5));
// console.log(sayHello());

//ES6 Arrowfunction
const perpangkatan = n => {
  return n * n;
};

console.log(perpangkatan(7));
// function perpangkatan(n) {
//   return n * n;
// }
// console.log(perpangkatan(4));

// function sayHello() {
//   alert("Hello");
// }
// console.log(sayHello());

const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title Baru dari JS File";
