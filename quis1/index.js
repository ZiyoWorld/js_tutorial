//! Вопрос 1:   Как работает метод bind?

// A : Привязывает контекст и вызывает функцию ✔

// B : Привязывает контекст и возвращает новую функцию

// C : Вызывает функцию, передавая массив аргументов

// D : Этого метода не существует

// let user = {
//   name: "Mirziyod",
//   lastName: "Sunatillayev",
//   getName() {
//     console.log(this.name, this.lastName);
//   },
// };

// function registerFunc(age, status) {
//   console.log(this);
// }

// const reg = registerFunc.bind(user);
// reg();

// const meetups = [
//   { name: "JavaScript", isActive: true, members: 100 },
//   { name: "Angu", isActive: true, members: 900 },
//   { name: "Node", isActive: false, members: 100 },
//   { name: "React", isActive: true, members: 500 },
// ];

// meetups.reduce((sum, meetup) => sum + meetup.members, 0);
// const membersOne = (meetups) => meetups.filter((meetup) => meetup.isActive); //1500;
// meetups.reduce((sum, meetup) => meetup.members + sum, { sum: 0 });
// let rs = membersOne(meetups);
// console.log(rs);

// let a = [0, 1, 2, 3, 4, 5, 6, 7];

// let res = a.reduce((sum, current, i) => {
// console.log(current, i, current - i);
//   return i;
// }, 0);
// console.log(res);

// let arr = [1, 2, 3, 4, 5];

// let result = meetups.reduce((sum, meetup) => sum + meetup.members, 0);

// console.log(result); // 15
//!Вопрос 2:   Какую из четырех строк необходимо дописать, чтобы получить желаемый результат?

// A : 1

// B : 2

// C : 3

// D : 4 ✔

//? Вопрос 3:   Каким образом используя только css можно задать стили,
// которые применятся при наведении на элемент?

// A : использовать псевдокласс hover ✔

// B : использовать псевдоэлемент hover

// C : использовать css хук onHover

// D : в чистом css нет возможности задать стили для наведения на элемент

//! Что записывается в свойство [[Scope]] функции?

// A : Текущий LexicalEnvironment

// B : Текущий LexicalEnvironment или window ✔

// C : у функции нет такого свойства

// D : LexicalEnvironment, в котором эта функция была вызвана

// В [[SCOPE]] записывается иерархическая цепь объектов лексических
// окружений вышестоящих(порождающих) контекстов. Это свойство остаётся
//  неизменным до тех пор пока функция не уничтожена сборщиком мусора.
//  2

//? В каком случае / случаях может произойти фриз страницы?

// A : Выполняется бесконечный цикл в синхронном коде

// B : callback внутри setTimeout бесконечно вызывает setTimeout

// C : Внутри промиса бесконечно создаются другие промисы

// D : В случаях 1 и 3 ✔

//* Вопрос 6: Что произойдет при исполнении этого кода?

// A : Ошибка при использовании spread оператора

// B : [1, 2, NaN] ✔✔✔

// C : Ошибка при парсинге третьего элемента

// D : [1, 2, 3]

//* const map = new Map();
// map.set("0", "1");
// map.set("s2", "2s");
// map.set("3s", "s3");

// const arr = [...map.values()];
// const result = arr.map((value) => parseInt(value, 10));
// console.log(result);

//? Вопрос 7:   Что будет выведено в консоль?

// A : {}

// B : null

// C : { a: 10 } ✔✔✔✔

// D : В коде ошибка

// var a = {};
// (function b(a) {
//   a.a = 10;
//   a = null;
// })(a);
// console.log(a);

//! Вопрос 8: Что будет в консоле после исполнения кода?
// A : "ad+be+cf"
// B : "a+b+c+d+e+f" ✔✔✔
// C : "abcdef"
// D : "fedcba"

// const s1 = ["a", "b", "c"];
// const s2 = ["d", "e", "f"];

// const result = s1.concat(s2).join("+");

// console.log(result);

//? Вопрос 9:   Какое или какие хранилища будут
//? хранить данные даже после закрытие браузера?

// A : CookieStorage, SessionStorage
// B : SessionStorage
// C : LocalStorage, CookieStorage ✔✔✔
// D : LocalStorage, SessionStorage
// Существуют два типа хранилищ данных, которые могут
// сохранять данные даже после закрытия браузера - это
// Cookies и Local Storage.

//! Вопрос 10:   Как активировать срабатывание обработчиков при всплытии события?

// A : При подписке на событие нужно третьим аргументов передать флаг true
// B : Нужно делать подписку на специальный тип событий, например: 'bubling:click'
// C : Никак, это поведение по умолчанию
// D : При подписке на событие нужно третьим аргументом передать флаг false
//* Куки (Cookies) - Это текстовые файлы, которые браузер хранит на компьютере пользователя.
// Куки позволяют сайту запомнить входные данные пользователя и предоставить
// персонализированный опыт пользователя. После закрытия браузера, данные,
// хранящиеся в куки, не удаляются, а сохраняются и при последующем открытии
// браузера снова доступны для использования.

//* Local Storage - Это объект-хранилище, доступное в браузерах, которое позволяет
// сохранять данные в виде пар ключ-значение. Данные, хранящиеся в Local Storage,
// также сохраняются после закрытия браузера и могут быть использованы в будущем.
// Также, Local Storage может хранить данные объемом гораздо большим, чем Cookies.

//* Однако, важно помнить, что данные, хранящиеся в Cookies и Local Storage, могут
// быть удалены пользователем самостоятельно или с помощью соответствующих настроек
// браузера. Кроме того, данные в Local Storage доступны только в рамках одного
// домена, то есть они не будут доступны для других сайтов.

//! Вопрос 10:   Как активировать срабатывание обработчиков при
// всплытии события?

// A : При подписке на событие нужно третьим аргументов передать флаг true

// B : Нужно делать подписку на специальный тип событий, например: 'bubling:click'

// C : Никак, это поведение по умолчанию

// D : При подписке на событие нужно третьим аргументом передать флаг false

// var x = 10;
// function bar(funArg) {
//   var x = 30;
//   funArg();
// }
// console.log(x);
// function foo() {
//   console.log(x);
// }
// foo.x = 20;
// bar.x = 40;
// bar(foo);

// Вопрос 11:   Что будет выведено в консоль?

// A : 10 ✔

// B : 20

// C : 30

// D : 40

// Вопрос 12:   Сколько потоков имеет JS?

// A : 0

// B : 1 ✔

// C : 2

// D : не ограничено

// js или в браузерах весь код на JavaScript выполняется в
// одном потоке. В браузерах один и тот же поток рендерит
// содержимое веб-страницы на экран. По сути, один поток
// выполнения занимается всеми задачами, потому что приложения
// JavaScript пользуются преимуществами асинхронного
// выполнения.

//* Вопрос 13:   Отличие sessionStorage от LocalStorage

// A : sessionStorage отправляет данные на сервер при каждом запросе

// B : область видимости localStorage распространяется на все вкладки страницы, sessionStorage только на одну

// C : localStorage может использоваться для хранения файлов ✔✔

// D : localStorage позволяет хранить больший объем данных чем sessionStorage

//! Вопрос 14:   Что будет в консоле после исполнения кода?

// A : [5, 7, 4]

// B : [7, 4] ✔✔✔✔✔✔✔✔✔

// C : [7, 9, 4]

// D : [4, 7]

// const result = [5, 7, 9].slice(1);
// console.log(result);
// result.pop();
// result.push(4);
// console.log(result);

//? Вопрос 15:   Каким образом будут расположены элементы на странице,
// если ширина элемента с классом flex более 1000 пикселей?

// A : Будут расположены в столбец с равным растоянием между элементами

// B : Будут расположены в строку с равным рассоянием между элементами

// C : Будут расположены в столбец с равным расстоянием между элементами и границами блока ✔✔

// D : Будут расположены в строку с равным расстоянием между элементами и границами блока

//! Вопрос 16:   Специфичность (вес) какого css-селектора является наибольшим?

// A : class

// B : id ✔

// C : tag

// D : pseudo-element

//? Вопрос 17:   Что будет выведено в консоль?

// A : promise, undefined

// B : 10, undefined

// C : promise, promise ✔✔✔

// D : Ошибка вызовов async функций без await

// async function bar() {
//   return await console.log(Promise.resolve(10));
// }
// async function foo() {
//   console.log('2')
// }
// const res1 = foo();
// const res2 = bar();
// console.log(res1, res2);

//! Вопрос 18:   Что делает метод stopPropagation?

// A : Прекращает дальнейшую передачу текущего события. ✔✔✔✔

// B : Отменяет действие события браузера

// C : Останавливает цепочку вызова событий для последующих слушателей DOM элемента

// D : Вызывает событие

//* Вопрос 19:   За что отвечает свойство overflow?

// A : управляет тем, как ведёт себя содержимое блочного элемента, если его размер превышает допустимую длину/ширину. ✔✔✔

// B : применяется для изменения алгоритма расчета ширины и высоты элемента.

// C : определяет горизонтальное/вертикальное выравнивание текста в пределах элемента

// D : устанавливает способ позиционирования элемента относительно окна браузера или других объектов на веб-странице

//! Вопрос 20:   Существует ли возможность на странице, полученной с одного домена отправить запрос на другой домен?

// A : Да, можно воспользоваться CORS и указать на стороне сервера дополнительные заголовки HTTP запроса

// B : Да, необходимо на стороне клиента сделать ajax запрос с указанием другого домена

// C : Нет, по причине SOP не существует возможности отправить на другой домен запрос ✔✔✔

// D : Да, но можно отправить только GET запрос, так как он считается безопасным

//! Вопрос 21:   Что будет выведено в консоль?

// A : 10 ✔✔✔✔✔✔✔✔✔✔

// B : undefined

// C : Ошибка объявления свойства "x"

// D : {x: 10}

// function foo() {}
// foo.x = 10;
// console.log(foo.x);

//* Вопрос 22:   Что будет выведено в консоль?

// A : hello, world

// B : В коде ошибка

// C : hello, hello

// D : undefined, world ✔✔✔✔

// var a = "hello";
// function b() {
//   console.log(a);
//   var a = "world";
//   console.log(a);
// }
// b();

//* Вопрос 23:   Какое из четырех реализаций приведет к ожидаемому результату?

// A : 1

// B : 2

// C : 3 ✔✔✔✔✔

// D : 4

// const numbers = [-2, 4, -1, 6, 8];

// const result = numbers.filter((n) => n > 0).map((n) => n * 2);

// console.log(result);

//! Вопрос 24:   Что такое семантическая верстка?

// A : Подход к написанию HTML с учетом семантики тегов

// B : Подход к написанию HTML с учетом внешнего вида страницы

// C : Подход к написанию HTML, предполагающий логичную и
//  последовательную иерархию страницы

// D : Подход к написанию HTML  с учетом семантики тегов,
//  предполагающий логичную и последовательную иерархию страницы ✔✔✔✔✔

//? Вопрос 25:   Как расшифровывается HTTP?

// A : Протокол передачи гипертекста ✔✔✔✔

// B : Протокол частичной передачи текста

// C : Личная передача гипертекста

// D : Практичная передача части текста

//! Вопрос 26:   Что такое рекурсия?

// A : Вызов функцией самой себя  ✔✔✔✔

// B : Прохождение по циклу с вызовом разных функций

// C : Прохождение по циклу с вызовом одной и той же функции

// D : передача одной функции в другую функцию

//! Вопрос 27:   Что произойдет во время исполнения этого кода?

// A : Ошибка объявления свойства "x"

// B : В консоле увидим объект {x: 40} ✔✔✔✔

// C : В консоле увидим {}

// D : В консоле увидим null

// const a = {};
// function clear(obj) {
//   obj.x = 40;
//   obj = null;
// }
// clear(a);
// console.log(a);

//* Вопрос 28:   Что будет в консоле, после того как три раза нажмем на кнопку?

// A : 1, 2, 3

// B : 0, 1, 2

// C : undefined, undefined, undefined

// D : NaN, NaN, NaN ✔✔✔✔

// class GODListener {
//   constructor() {
//     this.counter = 0;
//   }

//   handleClick() {
//     this.counter += 1;
//     console.log(this.counter);
//   }
// }

// const element = document.getElementById("testBtn");
// const listener = new GODListener();
// element.addEventListener("click", listener.handleClick);

// Вопрос 29:   Какие типы данных существуют в js (Стандарт языка ES6)

// A : boolean, string, number, undefined, null, symbol

// B : byte, short, int, long, float, double, char, boolean

// C : boolean, string, number, undefined, null, object

// D : boolean, string, number, undefined, null, symbol, object  ✔✔✔

//! Вопрос 30:   Каким способом можно найти на странице элемент имеющий идентификатор 'test'

// A : document.getElementById('test') ✔✔✔✔

// B : document.findById('test')

// C : document.querySelector('test')

// D : document.queryById('#id')
