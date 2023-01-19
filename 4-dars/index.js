// let a=4

// if(a==1){}
// if(a==2){}
// if(a==3){}
// if(a==4){}
// if(a==5){}
// if(a==6){}

// console.log(0 || 1);
// console.log(0 ?? 1);

// if -> <,>,<=,>=, ==, ===
// switch -> ===
// let data = "bulut";
// switch (data) {
//   case 1:
//     console.log("teng");
//     break;
//   case "bulut":
//     console.log("bugun bulut");
//     break;
//   case "qor":
//     console.log("bugun qor");
//     break;
//   default:
//     console.log("no data");
// }

// console.log("Hello Muhammad");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");

// console.log(1);
// console.log(2);
// console.log(3);

//! why do we need to us if and for loop

// for(let i = 1; i< 10; i++){
     //console.log(i);
//     if(i % 2 === 0)console.log(`juft son ${i}`);
//     else console.log(`toq son ${i}`);
// }

// var sum = 0;
// for (let i = 1; i < 12; ){
//      console.log(`Sum = ${(sum)} + ${i} = ${(sum += i)}`);
//      if (sum ===  10) break;
//      console.log(i);
//      i += i;
// }



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



// var sum = 0;
// for (i = 1; i <= 12; i++){
//      if (i % 3 === 0) continue;
//      console.log(`${i}`);
// }

// for (i = 10; i >= 1; i--){
//      for (j = 1; j <= 10; j++){
//           console.log(j);
//      }
// }


// 2 lik karra jadvali

// outer: for (i = 1; i <= 10; i += 3){
//     inner: for (j = 1; j <= 10; j += 3){
//          if (i === 4) break;
//          console.log(j, 'j');
         
//      }
//      console.log(i, 'i');
// }





// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );

// —  Github is important!
// — Javob berishdagi quvlamachoqlik
// —  Switch case
// —  For loop
// —  For loop parametilarining tushurib qoldirilishi
// —  Infinite loops //!
// —  var bilan let farqi
// —  Toq va Juft sonni topish. 99% kishi buni xato yo'lda qiladi.
// —  Nested Loops //!
// —  Label of inner Loops //!
// - break and continue
// - homework karra jadvali


// console.log("Mirziyod,Faruxbek and Azizbek");
// console.log("Mirziyod,Faruxbek and Azizbek");
// console.log("Mirziyod,Faruxbek and Azizbek");
// console.log("Mirziyod,Faruxbek and Azizbek");
// console.log("Mirziyod,Faruxbek and Azizbek");
// console.log("Mirziyod,Faruxbek and Azizbek");
// console.log("Mirziyod,Faruxbek and Azizbek");
// console.log("Mirziyod,Faruxbek and Azizbek");

// for (let i in obj1) {
     
// }

// for(let i of arr){

//}

// for (let i = 0; i < 15; i++){
//      console.log(i);
// }



function fizzBuzz(input) {
     if (input % 15 === 0) return "FizzBuzz";
     else if (input % 5 === 0) return "Buzz";
     else if (input % 3 === 0) return "Fizz";
     else return "Number is not define";
}
const output = fizzBuzz(43);
console.log(output);

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// Shart:
//  - son 3 ga bo'linadigan bo'lsa -> Fizz
//  - son 5 ga bo'linadigan bo'lsa -> Buzz
//  - son 3 va 5 ga bo'linadigan bo'lsa -> FizzBuzz
//  - son 3 va 5 ga bo'linmaydigan bo'lsa -> sonni o'zini chiqarsin!


// karra jadvali;

// for (let i = 1; i < 10; i++){
//      for (let j = 1; j < 10; j++){
       //document.write(`${i} * ${j} = ${i * j}`)
//           console.log(`${i} * ${j} = ${i * j}`);
//      }
// }

//task 1. sonlardan iborat arrayning ham 7 ga,
// ham 19 ga bo'linadigan elementlari yig'indisi

// const arr = [7, 19, 133, 266, 399];
// let sum = 0;
// for (let i of arr) {
//      if (i % 7 === 0 && i % 19 === 0) {
//           sum += i;
//           console.log(sum);
//      }
// }

//task 2. sonlardan iborat arrayning juft elementlari
// yig'indisidan, toq elementlari yig'indisini ayirish kerak;

// const arr2 = [5, 8, 12, 16, 19, 23, 28];
// let sum1 = 0;
// let sum2 = 0; 
// for (let i of arr2) {
//      if (i % 2 === 0) {
//           sum1 = sum1 + i;
//      } else if (i % 2 === 1) {
//           sum2 = sum2 + i;
//      } else {
//           console.log("array yuq");
//      }
//      console.log(`${sum1} - ${sum2} = ${sum1 - sum2}`);
// }

//task 3. Sonning tub yoki tub emasligini aniqlash