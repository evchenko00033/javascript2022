//prev


// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport"
// content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>owu.com.ua - OKTEN SCHOOL</title>
// </head>
// <body>
//
// <script>
//
//    arrayLoop([1, 12, 3]);
//
//    function arrayLoop(array) {
//        for (const item of array) {
//            console.log(item);
//        }
//    }
//
//    let users = [
//        {name: 'vasya', age: 31, status: false},
//        {name: 'petya', age: 30, status: true},
//        {name: 'kolya', age: 29, status: true},
//        {name: 'olya', age: 28, status: false},
//        {name: 'max', age: 30, status: true},
//        {name: 'anya', age: 31, status: false},
//        {name: 'oleg', age: 28, status: false},
//        {name: 'andrey', age: 29, status: true},
//        {name: 'masha', age: 30, status: true},
//        {name: 'olya', age: 31, status: false},
//        {name: 'max', age: 31, status: true}
//    ];
//    arrayLoop(users);
//
//    let x = function (array) {
//        for (const arrayElement of array) {
//            console.log(arrayElement);
//        }
//    };
//    x(users);
//
//    console.log(arrayLoop([1, 2, 3]));
//
//
//    function usersFilter(arrayOfUsers) {
//        let filteredUsers = [];
//        for (const user of arrayOfUsers) {
//            if (user.status) {
//                filteredUsers[filteredUsers.length] = user;
//            }
//        }
//        return filteredUsers;
//
//    }
//
//
//    let users = [
//        {name: 'vasya', age: 31, status: false},
//        {name: 'petya', age: 30, status: true},
//        {name: 'kolya', age: 29, status: true},
//        {name: 'olya', age: 28, status: false},
//        {name: 'max', age: 30, status: true},
//        {name: 'anya', age: 31, status: false},
//        {name: 'oleg', age: 28, status: false},
//        {name: 'andrey', age: 29, status: true},
//        {name: 'masha', age: 30, status: true},
//        {name: 'olya', age: 31, status: false},
//        {name: 'max', age: 31, status: true}
//    ];
//    let resultofFilter = usersFilter(users);
//    console.log();
//    for (const item of resultofFilter) {
//        document.write(`<div>${item.name}</div>`);
//    }
//
//
//    let arra = [];
//
//    function foobar() {
//        for (const argument of arguments) {
//
//        }
//    }
//
//
//     // function asd(x, ...a) {
//     //     console.log(a);
//     // }
//     //
//     // asd(1, 2, 3, 4);
//
//
//     let calc = (a, b) => a + b;
//     console.log(calc(10, 20));
//
//     let user = {
//     username: 'max',
//     greeting: function () {
//     console.log(this);
//     return `hello my name is ${this.username}`;
// },
//     vitannya: () => {
//     console.log(this);
//     return `hello my name is ${this.username}`;
// }
// }
//
//     console.log(user.greeting());
//     console.log(user.vitannya());
//
//     </script>
//     </body>
//     </html>


//lesson



// 'use strict';

/*function declaration*/

function writer(text) {
    document.write(`<div>${text}</div>`);
}

writer('hello');
writer('okten');
writer(10500);


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
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
//
// function arrayPrinter(array){
//     for (const item of array) {
//         console.log(item);
//     }
// }
//
// debugger;
// arrayPrinter(users);
// arrayPrinter(products);


// function sumTwoNumbers(a, b) {
//     let res = a + b;
//     return res;
// }
//
// let x = sumTwoNumbers(100, 200);
// console.log(x);

// function tax(sum, taxBound) {
//     return sum - (sum / 100) * taxBound;
// }
//

// let sallaryWithotPDFO = tax(10000, 20);
// console.log(sallaryWithotPDFO);
// let sallaryWithotPDFO_and_WarTax = tax(sallaryWithotPDFO, 2);
// console.log(sallaryWithotPDFO_and_WarTax);
// let result = tax(sallaryWithotPDFO_and_WarTax, 5);
// console.log(result);


// function calculator(a, b, action) {
//
//     let res;
//     switch (action) {
//         case '+':
//             res = a + b;
//             break;
//         case '-':
//             res = a - b;
//             break;
//
//         default:
//             res = 0;
//     }
//     return res;
// }
//
// console.log(calculator(10, 20, '+'));
// console.log(calculator(10, 20, '-'));


// function foo() {
//     console.log(arguments);
// }
//
// foo(1, 2, 3, 4, 5, 'asd', true);

// function upgradeCalc() {
//     let res = 0;
//     switch (arguments[0]) {
//         case '+':
//
//             for (let i = 1; i < arguments.length; i++) {
//                 const num = arguments[i];
//                 res += num;
//             }
//             break;
//
//         case '-':
//             for (let i = 1; i < arguments.length; i++) {
//                 const num = arguments[i];
//                 res -= num;
//             }
//             break;
//
//
//     }
//
//     return res;
//
// }
//
// console.log(upgradeCalc('+', 1, 2, 3, 4));
// console.log(upgradeCalc('-', 1, 2, 3, 4));


/*function expression*/

// let calc = (a,b)=>{
//     return a + b;
// }
//
// console.log(calc(10, 20));

// // hoisting
// console.log(asd());
// function asd() {
//     return 1000;
// }
//
//
// let qwe = () => {
//     return 2000;
// }
// console.log(qwe());


// let zxc = (a, b) => a + b;
// console.log(zxc(10, 20));


/*rest argument*/

// function foobar(a,b,c,...xxx) {
//     console.log(xxx);
// }
//
// foobar(1, 2, 3, 4, 5)

let asd = {
   name: 'vasya',
   greeting: function () {
      console.log(`hello my name is ${this.name}`);
      //    this -> asd
   },
   vitannya: () => {
      console.log(`hi my name is ${this.name}`);
      // this -> window
   }
}

asd.greeting();

asd.vitannya();
console.log(window);

console.log(Math.round(Math.random() * 100));

let user  = {
   name: 'vasya',
   greetings: function(){
      f = () => console.log(this);
      f();
   }
}
user.greetings();
