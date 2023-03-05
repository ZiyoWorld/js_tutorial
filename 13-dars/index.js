// let student = [1, 2, 3, 4, 5];

// let res = student.reduce((value, curr) => {
//     console.log(value);
// }, student);

// console.log(res);

//! Moment Js

// console.log(Date.now());
// let date = new Date();
// console.log(date);
// console.log(date.getTime());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

// const getToday = (synobl) => {
//     let date = new Date();
//     return `Today: ${date.getDate()}${synobl}${date.getMonth() + 1}
//     ${synobl}${date.getFullYear()}`
// }

// console.log(getToday("/"));
// console.log(getToday("-"));

// let weeks = ['Yakshanba', 'Dushanba'];
// let date = new Date();

// JSON - javaScript Object Notition;

// let user = {
//     name: "webbrain",
//     year: 123456,
//     data: {fullName: "Mirziyod", founded: 1245}
// };
// let json = JSON.stringify(user, ["name", "year", "data", "fullName", "founded"], 4);
// console.log(json);
// let json = JSON.stringify(user);
// console.log(json);
// let obj = JSON.parse(json);

// console.log(obj);

//! HomeWork Moment Js;
//Format Dates
//moment().format('MMMM Do YYYY, h:mm:ss a'); // February 25th 2023, 11:11:14 pm

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const moment = (symb) => {
//     let dates = new Date();
//     return {
//         format(data) {
//             const act = data.split(' ');
//             let obj = {
//                 "MMMM": month[dates.getMonth()],
//                 "Do": `${dates.getDate()}th`,
//                 "YYYY": dates.getFullYear(),
//                 "h:mm:ss": `${dates.getHours()}:${dates.getMinutes()}:${dates.getSeconds()}`,
//                 "a": "am",
//             };
//             for (let i in obj) {
//                 let res = act.filter((value) => {
//                     return value === obj[i];
//                 });
//                 return res;
//             }

//         }
//     }

// };
// let result = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(result);

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[1]);
// Expected output: "fox";

const moment = () => {
  let dates = new Date();
  return {
    format: function (data) {
      let act = data.split(" ");
      let res = act.map((value) => {
        return value;
      });
      // console.log(res);
      let str = "";
      let obj = {
        MMMM: month[dates.getMonth()],
        Do: `${dates.getDate()}th`,
        YYYY: dates.getFullYear(),
        "h:mm:ss": `${dates.getHours()}:${dates.getMinutes()}:${dates.getSeconds()}`,
        a: "am",
      };
      let w = "";
      while (res) {
        console.log(res);
        res++;
      }
      // switch (act) {
      //     case act.includes(obj["MMMM"]): return obj["MMMM"];
      //     case act.includes(obj["Do"]): return obj["Do"];
      //     case act.includes(obj["YYYY"]): return obj["YYYY"];
      //     case act.includes(obj["h:mm:ss"]): return obj["h:mm:ss"];
      //     case act.includes(obj["a"]): return obj["a"];
      //     default: return "Xato";
      // }
    },
  };
};

let result = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(result);

// const getToday = (symobl) => {
//   let date = new Date();
//   return `Today: ${date.getDate()}${symobl}${
//     date.getMonth() + 1
//   }${symobl}${date.getFullYear()}`;
// };

// console.log(getToday("-"));
// console.log(getToday("/"));
