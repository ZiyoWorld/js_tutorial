// 1 - lesson
// —  JS nima?
// —  JS qanday ishlaydi
// —  Single Thread?
// —  Variables - var, let, const
// —  Data Types
// —  Primiteve - number, bigInt, string, boolean, null, undefined, symbols
// —  NonPrimitive - objects, arrays, functions
// —  null vs undefined
// —  alert(), prompt(), confirm(), confirm()

// 2-dars
// —  Type convirsions
// —  Operators + - * / % () = ++ -- **
// —  Comparision == ===
// —  Logical Operations || && !

// 3-dars
// —  If else with single condition
// —  If else with multi state condition
// —  If else with boolean conversion
// —  order in if
// —  Nullish
// —  Difference between ?? and ||

// 4-dars
// —  Github is important!
// — Javob berishdagi quvlamachoqlik
// —  Switch case
// —  For loop
// —  For loop parametilarining tushurib qoldirilishi
// —  Infinite loops
// —  var bilan let farqi
// —  Toq va Juft sonni topish. 99% kishi buni xato yo'lda qiladi.
// —  Nested Loops
// —  Label of inner Loops

// 5-dars
// —  While!
// — do while
// —  Function decloration
// —  Function Expression
// —  Arrow Function
// —  Shadowed variable
// —  Default parameter
// — Functions with return

// 6-dars
// —  Savol Javob!
// —  Tushuntirib berish boshqa level!
// —  Logica nega kerak?
// —  Objects
// —  Dynamic access to keys
// —  Copying vs Referencing
// —  Object assign
// —  structeredClone( )

// 7 - dars
// —  Savol Javob!
// — Uyga vazifadan chiqmagan masalalar yechimi.
// — Call Stack va Heap qanday malumot saqlaydi?
// — this method.
// — Constructor Functions
// — Symobls as a Key
// — Object keylarini yozilish usullari
// — Distructure  { }
// — Renaming variables
// — Spread operator (...)
// — Updating Objects

// 8 - dars
// —  Savol Javob!
// — Number representation
// — Decimal, Binary va Hex
// — Math - abs, floor, ceil, round, trunc, random, min, max, pow, sign, sqrt, cbrt
// — Methods, toString, toFixed, parseInt, parseFloat, isNaN, Object.is, toPrecision,
// — Strang JS
// —  Optional Chaining
// — Homework

// 9-dars
// —  Homework explanation
// —  Quots
// —  Special characters
// —  Accessing chars
// —  Loop
// —  Comparion
// —  Methods: toUpperCase, toLowerCase, indexOf, includes,
// endsWith, padEnd, slice,
//  splice, substring, substr, eval,
//  trim, split, concat, new String, search,
// find, valueOf, replace, mathc,
//  search va boshqalar...

// 10-dars
// —  Array nima?
// —  Accessing array element
// —  new Array
// —  Loops with arrays
// —  Methods: length, at, pop, push, shift, unshift,
// splice, slice, concat, indexOf, lastIndexOf va boshqalar...

// 11-dars
// —  Advanced Array
// —  find va findIndex ishlash tezligidagi farqi.
// —  forEach va Map farqi
// —  Multi dimansional arrays
// —  new Set va new Map
// —  Exercises
// —  Methods: filter, sort, find, findIndex, forEach, map, reduce,
// every, some, fill, copyWithin, flat, flatMap, Array.from, new Set, new Map

// 12-dars
// —  Advanced Array CRUD exercise
// — Savol Javob
// —  C - Create, adding user info
// —  R - Reading, filter, sort, order...
// —  U - Update, change user info, mapping
// —  D - Deleting user info, filter
// —  Exercises
// —  Methods: filter, sort, find, forEach, map, reduce, every, some,
// fill, copyWithin, flat, flatMap, Array.from, new Set, new Map

// 13- dars
// — Datastructure with arrays
// — Datastructure with objects
// —  new Date(), getFullYear, getDate, getTime, getMonth, getDay,
//  getHoures, getMinutes, getSeconds va boshqalar
// —  JavaScript Object Notation
// —  JSON.stringify()
// —  JSON.parse()
// —  Exercises

// 14-dars

// — new Map: set, get, delete, clear
// — new Map as a generator
// — Loops with new Map
// — new Set: add, has, delete, clear
// — Loops with new Set
// — new WeakMap
// — new WeakSet

// 15-dars
// — Recursion function nima?
// — Recursion qanday ishlaydi?
// — Kompaniya oyliklarini recursion bilan hisoblash
// — Recursiya bilan oddiy loopning farqlari va ustunligi.
// — Homework: 1) fibonacci raqamini topish, 2) Factorial raqam tipish 3) Raqamlar yig'indisini topish

// let n = 1;
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumTo(100)); ''

// const result = [5, 6, 9].slice(1);
// console.log(result);

// function foo() {}
// foo.x = 10;
// console.log(foo.x);

var a = "h";
function b() {
  console.log(a);
  var a = "world";
  console.log(a);
}
b();
