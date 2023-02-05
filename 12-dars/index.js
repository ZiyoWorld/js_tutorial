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

// CRUD

const sortByYear = () => {
  let res = students.sort((a, b) => a.year - b.year);
  students = res;
}
// sortByYear();

const sortByName = () => {
  let res = students.sort((a, b) => a.name.localeCompare(b.name));
  students = res;
}
// sortByName();


const deleteUser = (id) => {
  let res = students.filter((value) => value.id !== id);
  students = res;
}
// deleteUser(8);

const createUser = (user) => {
  // console.log(user)
  students = [...students, {id: students.length + 1, ...user }];
}
// createUser({ name: "Miraziz Sunatillayev", year: 2004 });


const updateUser = (data) => {
  let res = students.map((value) => 
    value.id === data.id ? { ...value, [data.type]: data.value } : value
  );
  students = res;
}
// updateUser({ id: 2, type: 'name', value: "Gulbashakar" });
// updateUser({ id: 2, type: 'year', value: 2002 });

const filterUser = (data) => {
  let res = students.filter((value) =>
    value.name.toLowerCase().includes(data.toLowerCase())
  );
  students = res;
};

// filterUser('mirziyod');

const getFilter = ({ key, value }) => {
  let res = students.filter((usr) =>
    `${usr[key]}`.toLowerCase().includes(`${value}`.toLowerCase())
  );
  students = res;
}

getFilter({ key: 'id', value: 3 });
getFilter({ key: 'name', value: "Mirziyod" });




console.log(students);