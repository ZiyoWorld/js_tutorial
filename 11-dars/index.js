

//task 1. sonlardan iborat arrayning ham 7 ga,
// ham 19 ga bo'linadigan elementlari yig'indisi





    // const arr = [7, 19, 14, 18, 38, 133, 266];
    // let sum = 0;
    // for (let i of arr){
    //     if (i % 19 === 0 && i % 7 === 0) {
         // console.log("yes it is", i);
    //         console.log(sum += i);
    //     }
        // else {
         //     console.log("no, it isn't", i);
         // }
    // }


//task 2. sonlardan iborat arrayning juft elementlari
// yig'indisidan, toq elementlari yig'indisini ayirish kerak

// const arr = [15, 48, 64, 19, 23, 26];

// let plus = 0;
// let minus = 0;
// let sum = 0;
// for (let val of arr) {
//     if (val % 2 === 0) {
//         plus += val;
//     } else if (val % 2 === 1) {
//         minus += val;
//     } else {
//         console.log("not found");
//     }
//     sum = plus - minus;
// }

// console.log(`${plus} - ${minus} = ${sum}`);

//task 3. Sonning tub yoki tub emasligini aniqlash
// function showPrimes(n){
//     for(let i = 2; i < n; i++){
//         if(!isPrime(i)) continue;
//         console.log(i);
//     }
// }
// function isPrime(n){
//     for(let i = 2; i < n; i++){
//         if(n % i == 0) return false;
//     }
//     return true;
// }
// showPrimes(30);

// function showPrimes(n) {
//     for (let i = 2; i < n; i++){
//         if (!isPrime(i)) continue;
//         console.log(i);
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i < n; i++){
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// showPrimes(30)

//task 4. Sonlardan iborat arrayning elementlarini
// shu arrayda teskari tartibda joylashtiring

// const ar = [1, 2, 3, 4, 5, 6];
// ar.reverse();
// console.log(ar);


//task 5. Sonlardan iborat arrayning elementlari orasidan
// bir xillarini faqat 1 tasini qoldirib, qolganini o'chirish
// [1, 5, 2, 1, 5, 8, 5, 2] ====> [1, 5, 2, 8];






// console.log(res);


// const findDuplicates = (arr) => {
//     let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
//     let results = [];
//     for (let i = 0; i < sorted_arr.length - 1; i++) {
//       if (sorted_arr[i + 1] == sorted_arr[i]) {
//         results.push(sorted_arr[i]);
//       }
//     }
//     return results;
//   }
  
//   let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
// console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);
  


// function eliminateDuplicates(arr) {
//     var i,
//         len = arr.length,
//         out = [],
//         obj = {};
  
//     for (i = 0; i < len; i++) {
//       obj[arr[i]] = 0;
//     }
//     for (i in obj) {
//       out.push(i);
//     }
//     return out;
//   }
  
//   console.log(eliminateDuplicates([1,6,7,3,6,8,1,3,4,5,1,7,2,6, 8, 15,]));

// let n = [2, 3, 1, 7, 8, 9, 6];
// let str = ["orange", "Apple", "banana", "Kiwi"];

// let students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Topilov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov " },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra " },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// ];

// let res = students.find((value) => {
//   return value.id === 5;
// });
// console.log(res);


// let res = students.findIndex((value) => {
//   return value.id === 5;
// });
// console.log(res);





// let res = {
//   2002: [
//     { id: 3, year: 2002, name: "Najmiddin Nazarov " },
//     { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   ],
//   2007: [
//     { id: 3, year: 2002, name: "Najmiddin Nazarov " },
//     { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   ],
// };

// let num = [1, [2, [3, [4]]], 5, 6, 7, 8];
// let n = [2, 3, 1, 1, 7, 8, 8, 6];

// console.log(new Array(3, 2, 3));
// console.log(Array.from("webbrain", (v) => v.toUpperCase()));

// let res = n.filter((value, index, array) => array.indexOf(value) === index);

let str = ["orange", "Apple", "banana", "Kiwi"];
// let n = [2, 3, 1, 7, 8, 9, 6, 7, '15'];
let students = [
  { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
  { id: 2, year: 2000, name: "Asilbek Topilov" },
  { id: 3, year: 2002, name: "Najmiddin Nazarov " },
  { id: 4, year: 2002, name: "Mominov Abdulloh" },
  { id: 5, year: 1995, name: "Sardor Tursunboyev" },
  { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra " },
  { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
  { id: 8, year: 2002, name: "Shukurov Shohruh" },
];


// let arr = [1, [2, [3, [4]]], 5, 6, 7, 8];
// console.log(arr);
// console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(3));
// console.log(arr.flat(Infinity).reduce( (s,c)=> s + c, 0));

let n = [2, 3, 1, 7, 8, 8, 9, 1, 9, 6, 2, 7];

// let res = n.filter((value, index, array) => array.indexOf(value) === index);
// console.log(res);


// console.log(
//   new Map([
//     ["a", 1],
//     ["b", 2],
//   ]).keys()
// )

// let obj = {
//   name: "Mirziyod",
//   status: "IT Center",
// }

// console.log(Object.entries(obj));
console.log(Array.from("aaaa"))
console.log(Array.from("mirziyod", (v) => v.toUpperCase()));


// let a = [0, 1, 2, 3, 4, 5, 6, 7];

// let res = a.reduce((sum, current, i) => {
// console.log(current, i, current - i);
//   return i;
// }, 0);
// console.log(res);

//? a.copyWithin

// console.log(n.fill("mir", 2));

// console.log(n.every((value) => isNaN(value)));
//! some and every;
// console.log(n.every((value) => typeof value === "number"));
// console.log(n.some((value) => typeof value === "string"));




/// forEach and map;

// let res = n.forEach((element) => {
//   console.log(element);
// })
// console.log("=======");
// let resmap = n.map(element => {
//   console.log(element);
// });

// console.log(res);
// console.log("=====");
// console.log(resmap);

 