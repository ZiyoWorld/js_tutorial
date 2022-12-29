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


// for(let i = 1; i< 10; i++){
     //console.log(i);
//     if(i % 2 === 0)console.log(`juft son ${i}`);
//     else console.log(`toq son ${i}`);
// }

function showPrimes(n){
    for(let i = 2; i < n; i++){
        if(!isPrime(i)) continue;
        console.log(i);
    }
}
function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0) return false;
    }
    return true;
}
showPrimes(30);