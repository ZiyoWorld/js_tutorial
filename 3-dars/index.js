// if, else
// 0, null, undefiend,
// let temp = 1;
// if(temp === 0){
//     console.log("Havo Issiq");
// }
// if(true === undefined){
//     console.log("true");
// }

//! not information is - undefined


// let temp = "sovuq"; // issiq, yomg'ir, sovuq, qor;

// if(temp === "issiq"){
//     console.log(`Havo ${temp} yengil kiyinib oling;`);
// }
// else if(temp === "sovuq"){
//     console.log(`Havo ${temp} qalinroq kiyinib oling;`);
// }
// else if(temp === "yomg'ir"){
//     console.log(`Havo ${temp} soyabon oling;`);
// }
// else if(temp === "qor"){
//     console.log(`Havo ${temp} qalinroq kiyining va soyabon oling;`);
// }
// else{
//     console.log("nomalum ob-havo");
// }

// if (temp === "sovuq") {
//     console.log("nomalum ob-havo");
// }

// temp = 12; // temp >0 && temp < 10, temp >10 && temp<15, temp >15 && temp<25

// if (temp < 0) {
//   console.log("havo juda sovuq");
// } else if (temp < 10) {
//   console.log("havo  sovuq");
// } else if (temp < 15) {
//   console.log("havo issiq");
// } else if (temp < 25) {
//   console.log("havo juda issiq");
// }

//! it can read from top to end
// temp = 5;
// if (temp < 0) {
//   console.log("havo juda sovuq");
// } else if (temp < 25) {
//   console.log("havo juda issiq");
// } else if (temp < 15) {
//   console.log("havo issiq");
// } else if (temp < 10) {
//   console.log("havo  sovuq");
// }


//! ikkala shartni ham qanoatlantirish kerak
//  temp = 25; // temp >0 && temp < 10, temp >10 && temp<15, temp >15 && temp<25

// if (temp < 0) {
//   console.log("havo juda sovuq");
// } else if (temp <= 25 && temp >= 15) {
//   console.log("havo juda issiq");
// } else if (temp <= 15 && temp >= 10) {
//   console.log("havo issiq");
// } else if (temp <= 10 && temp >= 0) {
//   console.log("havo  sovuq");
// } else {
//   console.log("not found");
// }

// if('condition'){'code'}
// else if('condition'){'code'}
// else{'code'}

// if ("condition") console.log("havo juda issiq");
// else if ("condition") return true;
// else return false;

// temp = 5; // temp >0 && temp < 10, temp >10 && temp<15, temp >15 && temp<25

// if (temp < 0) console.log("havo juda sovuq");
// else if (temp <= 25 && temp > 15) console.log("havo juda issiq");
// else if (temp <= 15 && temp > 10) console.log("havo issiq");
// else if (temp <= 10 && temp > 0) console.log("havo  sovuq");
// else console.log("not found");

// let temp = -15;

// temp < 0 ? console.log("havo juda sovuq") : console.log("yaxshi");




// Nullish ?? // null with undefined

console.log(NaN || 1);
console.log(NaN ?? 1);
console.log(NaN ?? 2);

console.log(null || 1);
console.log(null ?? 1);

console.log(undefined || 1);
console.log(undefined ?? 1);

console.log(null ?? 0);

// OR || => null, undefined, 0, false, NaN,






// let a = null;

// console.log(a);

// console.log(2 ** 50);


// review

//console.log(!(1 !== "0" && true && "hey"));


// —  If else with single condition
// - else ni quyish error baoundirers
// —  If else with multi state condition
// —  If else with boolean conversion
// - ternary operations multi and single
// —  order in if 
// —  Nullish
// —  Difference between ?? and ||