// arrayLoop([1, 12, 3]);
//
// function arrayLoop(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
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




// users.forEach(value => console.log(value));
// console.log(users);

// for (let user of users) {
//     console.log(user);



// function x(text) {
//     document.write(`<div>${text}</div>`)
// }
// x(`ssfdgsfgvcvbcvxb`);
// x(`users`);


// function x(text) {
//     console.log(text);
// }
// function x(array) {
//     for (let arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// x(users)






// }
// arrayLoop(users);
//
// // let x = function (array) {
// //     for (const arrayElement of array) {
// //         console.log(arrayElement);
// //     }
// // };
// // x(users);
//
// console.log(arrayLoop([1, 2, 3]));


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
//
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
// let resultofFilter = usersFilter(users);
// console.log();
// for (const item of resultofFilter) {
//     document.write(`<div>${item.name}</div>`);
// }
//
//
// let arra = [];
//
// function foobar() {
//     for (const argument of arguments) {
//
//     }
// }


// function asd(x, ...a) {
//     console.log(a);
// }
//
// asd(1, 2, 3, 4);


// let calc = (a, b) => a + b;
// console.log(calc(10, 20));
//
// let user = {
//     username: 'max',
//     greeting: function () {
//         console.log(this);
//         return `hello my name is ${this.username}`;
//     },
//     vitannya: () => {
//         console.log(this);
//         return `hello my name is ${this.username}`;
//     }
// }
//
// console.log(user.greeting());
// console.log(user.vitannya());
