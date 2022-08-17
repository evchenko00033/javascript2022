



// for (let i = 0; i < 11; i++) {
//
// }
// //
// for (let user of users) {                                                            /// а в чому між цими циклами різниця?
//
// }




// let i = 0;
// while (i < users.length) {
//     let user = users[i];
//     document.write(`<div>${user.name} ///${users[i].age}/// ${user.status}</div>`);      ///Чому в тегах ми пишемо product.title а не products[0].title?
//     i++;
// }
///
// for (let product of products) {
//     document.write(`<div>
// <h3>${product.title}${product.price}</h3>
// <img src="${product.image}" alt="">
// </div>`)
// }




//Функції

// function print() {
//     console.log(`Hello`);                                                                     /// чому пустий аргумент функції print?
// }
// print();

//
// function print(arr) {
//     console.log(`Hello`);                                                                         /// чому в консолі виводить два рази?
//     console.log(arr)
// }
//
// print();
// print(`Привіт`);


//  function writer(a, b) {
//     console.log(a * b);
// }

// let x = writer(5, 6);
// console.log(x);


/// в чому між ними різниця
//
function writers(a, b) {
     return a*b;
}
let x = writers(5, 6);
console.log(x);
// console.log(writers(6, 8));


let arrayLoop = [1, 12, 3];

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},                                                               //// чому вони по різному оголошуються?
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


// 3 функції, в чому різниця?


// function writer() {
//     document.write(`text`);          ////Чому в аргументі пусто?
// }
// writer();




// function writer(text) {
//     document.write(`<div>${text}</div>`);
// }
//
// writer('hello');






// function arrayPrinter(array){
//     for (const item of array) {
//         console.log(item);
//     }
// }
// arrayPrinter(users);






//
// function sumTwoNumbers(a, b) {
//     let res = a + b;
//     return res;
// }                                                        ////чому тут є return, а вижче нема?
// sumTwoNumbers(100, 200);

// console.log(sumTwoNumbers(100, 200);)

// let x = sumTwoNumbers(100, 200);                     //// 3 види?
// console.log(x);















// let x = function (array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// };
//
// x(users);







// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function usersFilter(arrayOfUsers) {
//     let filteredUsers = [];
//     for (const user of arrayOfUsers) {
//         if (user.status) {
//             filteredUsers[filteredUsers.length] = user;
//         }
//     }
//     return filteredUsers;
//
// }
//
// usersFilter(users);



let a = 2;
let b = 'hello';

console.log(a += 3);
console.log(a);
// console.log(b += ' world'); // concatenation
// expected output: "hello world"
