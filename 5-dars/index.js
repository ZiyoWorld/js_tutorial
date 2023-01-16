// let i = 3;
// while (i < 10) {
//   console.log(`hey`);
//   i++;
// }

//! while do while

// let i = 0;
// do {
//   console.log(i);
//   i--;
// } while (i == 1);

// method
// alert(), prompt(), confirm();


// getAvr();
// let id = 1;
// console.log(id);

// function getAvr() {
//   console.log("Abdulloh, Welcome to Webbrain");
// }

// const getAvr = function () {
//   console.log("Abdulloh, Welcome to Webbrain");
// };
// getAvr();

// const getAvr =()=>{}

// let name = 'webbrain'

// const getAvr = function (name, surname, age) {
//   console.log(`Name: ${name}`);
//   console.log(`Surname: ${surname}`);
//   console.log(`Age: ${age}`);
//   console.log(`================`);
// };
// getAvr(20, "F");
// getAvr();
// getAvr("Najmiddin", "Nazarov", 20);
// getAvr("Iqboljon", "Iqboljon F", 20);
// getAvr("Asilebk", "Asilebk F", 20);

// const telegram = (name, surname = "") => {
//   if (surname) console.log(name, surname);
//   else console.log(name);
// ||,??
//   surname ? console.log(name, surname) : console.log(name);
//   console.log(name, surname || "");
//   console.log(name, surname);
// };

// telegram("webbrain", "Academy");

// const gpa = (a = 0, b = 0, c = 0, d = 0) => {
//   let res = (a + b + c + d) / 4;
//   console.log(res);
//    return "okay?";
// };

// console.log(gpa(4.5, 3, 3.5, 2)); //3.25
// console.log(gpa(4, 3, 5, 2));//3.5
// console.log(gpa(5, 3, 3, 2));//3.25

// console.log((gpa(4.5, 3, 3.5, 2) + gpa(4, 3, 5, 2) + gpa(5, 3, 3, 2)) / 3);

// const getValue = () => {
//     let id = document.getElementById("gpa");
//     id.innerHTML = `GPA: ${getNum}`;
//  };

// const getNum = (a) => {
//   let total = 193;
//    console.log((a * 100) / total);
//   return (a * 100) / total;
// };
// getNum(150);

// console.log(parseInt(getNum(159)));

// const getGpa = (a = 0, b = 0, c = 0, d = 0) => {
//   let res = (a + b + c + d) / 4;
//   return res;
// };

// const getValue = () => {
//   let id = document.getElementById("gpa");
//   id.innerHTML = `GPA: ${getGpa(5, 3, 3, 2)}`;
// };

// const getGPA = (name, callback) => {
//   console.log("Hey", name);
//   callback();
// };

// getGPA("Webbrain", getValue);

// for(let i=1; i <= 5; i++){
      
//   for(let j = 1; j <=5; j++){
//      console.log(i * j);
//   }
// }

// function sum(x, y){
 
//   if(y === undefined) y = 5;
//   if(x === undefined) x = 8;
//   const z = x + y;
//   console.log(z);
// }
// sum();          // 13
// sum(6);         // 11
// sum(6, 4)       // 10

// let calculator = (function(){
//   let data = { number: 0};
   
//   return {
//       sum: function(n){
//           data.number += n;
//       },
//       subtract: function(n){
//           data.number -= n;
//       },
//       display: function(){
//           console.log("Result: ", data.number);
//       }
//   }
// })();
// calculator.sum(10);
// calculator.sum(3);
// calculator.display();   // Result: 13
// calculator.subtract(4);
// calculator.display();   // Result: 9;



// review
// — while!
// — do while
// — Function decloration
// — Function Expression
// — Arrow Function
// — Shadowed variable
// — Default parameter
// — Functions with return
// - Hoisting!


// const lavel = () => {
//     let name = "Discussinon";
//     console.log(name);
// }
// lavel();
// console.log(name);

// const func1 = (name, surname) => {
//     console.log(`${name} === ${surname} === ${age}`)
// }
// func1("Mirziyod", "Sunatillayev");

