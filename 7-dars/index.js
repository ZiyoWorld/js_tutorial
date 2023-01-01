// let obj = { name: "webbrain" };

// let obj2 = structuredClone(obj);

// console.log(obj2);

// let obj = {
//   name: "webbrain",
//   age: 23,
//   child: {
//     name: "eshmat",
//     age: 11,
//     child: {
//       name: "toshmat",
//       age: 33,
//     },
//   },
// };

// let sum = 0;

// while (obj) {
//   sum += obj.age;

//   obj = obj.child;
// }

// console.log(sum);


// function sayHi(){
//     console.log("HI");
// };

// let user = {
//     name: "webbrain",
//     // name,
//     satHI(){
//         console.log(`I said hey ${this.name}`);
//         console.log(`I said hey ${user.name}`);
//     },
//     getName: function(){
//         return ()=>{
//             console.log(`Hi function ${this.name}`); 
//         }
//     },
// }
// user.satHI();
// user.getName()(); /// tarif function this.faqat wrapper qilish orqali.


// function getName(name){
//     console.log(new.target); // new.target bu constructor ili yo'qligini aniqlaydi
    // this.name = name;
  // this.sayHi = function(){
    //     console.log("he", this);
  //     return "hey";
    // }
// }

 //  console.log(new getName().sayHi());

// new getName("Eshmat");
 // new getName("Toshmat").sayHi();

// let func = {};

// func.name = "test";

// console.log(func);


// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 == id2);
// console.log(id1 === id2);
// console.log(id1);

// let obj = {
//     [id1]: "Mirziyod",
//     ["id2"]: "Academy1",
//     "id2": "Academy2",
//     id2: "Academy3",
//     [id2]: "Academy",
// };

// console.log(obj['id2']);

// let name = "Mirziyod";

// let obj = {
//     name: "webbrain",
//     title: "IT center",
//     age: 254545,
//     child: {
//         name: "testing name",
//     }
// }


// const {name:NewName, title, age, child:{childname: test}} = obj;
// console.log(name, title, age);
// console.log(test);

// for (value in obj){
//     console.log(obj[value]);
// };



let obj = {
    name: "webbrain",
    title: "IT center",
    age: 254545,
    child: {
        name: "testing name",
    },
};

console.log(obj);
obj = {...obj.child}
console.log(obj);
// console.log(...obj);



