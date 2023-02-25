let students = [
  { id: 1, year: 2002, name: "Mirziyod Sunatillayev" },
  { id: 2, year: 2000, name: "Mirbosit Haydarov" },
  { id: 3, year: 1999, name: "Rahmonberdiyev Jamoliddin" },
  { id: 4, year: 2000, name: "Saidkamolxo'ja Jamolov" },
  { id: 5, year: 2000, name: "Shaxzod Ahmedov" },
  { id: 6, year: 2001, name: "Rafael Bekbayev" },
  { id: 7, year: 2000, name: "Otabek Shirinov" },
  { id: 8, year: 1995, name: "Olimjon Arslanov" },
];

//! Sort yil
// const sortY = students.sort((a, b) => a.year - b.year);
// console.log(sortY);

//! sort Name
// const sortN = students.sort((a, b)=> a.name.localeCompare(b.name));
// console.log(sortN);

//! delete User
// const deleteUser = (id) => {
//     let res = students.filter((value) => value.id !== id);
//     students = res;
// }
//! createUser
// const createUser = (name, year) => {
//     let res = {
//         id: students.length + 1,
//         name: name,
//         year: year
//     };
//     students = [...students, res];
// }

// const createUser = (user) => {
//     students = [...students, { id: students.length + 1, ...user }];
// }

// createUser({name: "Abu Bakr Siddiq",year:573});


//! updateUser

// const updateUser = (data) => {
//     let res = students.map((value) =>
//         value.id === data.id ? { ...value, [data.type]: data.value } : value
//     );
//     students = res;
// }
// updateUser({ id: 2, type: 'name', value: "Gulbashakar" });
// updateUser({ id: 2, type: 'year', value: 2002 });


//! filterUser

const filterUser = (data) => {
    let res = students.filter((value) =>
        value.name.toLowerCase().includes(data.toLowerCase())
    );
    students = res;
}
filterUser('mir');
console.log(students);
