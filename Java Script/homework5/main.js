// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function storoni(a, b) {
//     document.write(`<ul><li>${a * b}</li><li>${a * b}</li><li>${a * b}</li></ul>`);
//
// }
//
// storoni(5, 6);

//
// let foo = (a, b) => a * b;
// console.log(foo(5, 6));
// let foo = (a, b) => { return a * a * b};
// console.log(foo(5, 9));

///////?????????????????????????????????
// function storoni(a, b) {
//        return a * b;
// }
//
// console.log(storoni(5, 7));

// storoni(5, 7);


//
// function whriter(a, b) {
//     console.log(a * b);
// }
//
// whriter(5, 5);

/////?????????????????????????????????????????
//
// function whriters(a, b) {
//     return a * b;
//
// }
// console.log(whriters(6, 6));

// ???????????????????



// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function storoni(r, Pi) {
//     return Pi * r * r;
//                                                                  Є return можем вивести в змінну
// }
// let x =storoni(10, 3.14)
// console.log(x);


// function storoni(r, Pi) {
//     document.write(`<div>${Pi * r * r}</div>`);
//     console.log(Pi * r * r);
//     document.write(`<ol><li>${Pi*r*r}</li><li>${Pi*r*r}</li><li>${Pi*r*r}</li></ol>`)        //немаэ return не можем вивести в змінну
//     alert(Pi * r * r);
// }
//
// storoni(20, 3.14);

// function elements(r,Pi) {
//     document.write(`<h2>${Pi * r * r}</h2>`);
//     return Pi * r * r;
// }
//
// console.log(elements(10, 3.14));;
//
//


// function sides(pi, r) {
//     let area = pi * r * r;
//     return area;
// }
// let y = sides (3.14, 10);
// console.log(y);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// S=2πR(h+R)

// function sides(pi, r, h) {
//     let area = 2 * pi * r*(h + r);
//     return area;
// }
//
// let z = sides(3.14, 10, 5);
// console.log(z);

// - створити функцію яка приймає масив та виводить кожен його елемент

// !!!!!!!!!!!!!!!
// let arrey = [1, 5, `sdfgfg`, true, false,];
// //


// function arr(array) {
//     for (let arrayElement of array) {
//         console.log(arrayElement);
////                                                    ///виводить елементи масиву
//     }
// }
//
// arr(arrey);

//
// function arr(array) {
//     console.log(array);                          /// виводить масив з елементами
//
// }
//
// arr(arrey);
// function x(yyyyy) {
//
//     console.log(yyyyy)
// }
//
// x(arrey)






//
// function foo(universal) {
//     console.log(universal);
//
// }
//
// foo(arrey);
//















// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function tex(text) {
//     document.write(`<p>text</p><p>text</p><p>text</p><p>text</p>`)
//
// }
//
// tex(`Hello`);
//
//






// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
//

// function lizhki(text) {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//         </ul>`);
// }
//
// lizhki(`ssfgfgsdfg`);
//


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function linamber(text, namber) {
//     document.write(`<ol>`)
//     for (let i = 0; i < namber; i++) {
//         // const textElement = text[i];
//         document.write(`<li>${text}---${i+1}</li>`)
//     }
//
//
//     document.write(`</ol>`)
// }
//
// linamber(`Hello`, 5);










// function lizhka(text,namber) {
// document.write(`<ul>`)
//     for (let i = 0; i < namber; i++) {
//         document.write(
//             `<li>${text}${i+1}</li>`);
//
//     }
//
//     document.write(`</ul>`)
// }
// lizhka(`Hello`,5);











// function li(universal, number) {
//     document.write(`<ul>`);
//     for (let i = 1; i < number+1; i++) {
//         document.write(`<li>${universal} ${i}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// li(`Hello`, 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

// let x = [5, 9, `asdfa`, true,];
//

// function arr(array) {
//     for (const arrayElement of array) {
//         document.write(`<ul><li>${arrayElement}</li></ul>`);
//     }
//
// }
//
// arr(x);


// function arr(arrey) {
//     for (let i = 0; i < arrey.length; i++) {
//         const arreyElement = arrey[i];
//         document.write(`<ul><li>${arreyElement}</li></ul>`)
//     }
//
// }
//
// arr(x);
//


//
// function arr(asdf) {
//     for (let argument of asdf) {
//         document.write(`<ul><li>${argument}</li></ul>`);
//     }
//
// }
//
// arr(x);








// function array(universal) {
    // for (i = 0; i < universal.length; i++) {
    //
    // }



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.


// let users = [
//     {id: 1, name: `gfdsasdf`, age: 86},
//     {id: 2, name: `fdasdfsdfad`, age: 95},
//     {id: 3, name: `qwerewqwe`, age: 555},
// ];

//
// function arr(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}---${arrayElement.name}---${arrayElement.age}</div>`);
//
//     }
//
// }
//
// arr(users);
//
//





// let users = [
//     {id: 1, name: `gfdsasdf`, age: 86},
//     {id: 2, name: `fdasdfsdfad`, age: 95},
//     {id: 3, name: `qwerewqwe`, age: 555},
// ];
//
//
// function oo(masiv) {
//     for (let i of masiv) {
//         document.write(`<div>${i.id}---${i.age}----${i.name}</div>`);
//     }
//
// }
//
// oo(users);


// - створити функцію яка повертає найменьше число з масиву
// let y = [5, 6, -9, 0];
// //

//
// function foo(arr) {
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (min > arrElement) {
//             min = arrElement;
//
//         }
//     }
//     return min;
// }
//
// console.log(foo(y));


// let foo = (arr)=>{
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (min > arrElement) {
//             min = arrElement;
//         }
//     }
//     return min;
// }
// console.log(foo(y));
// //
// function arr(array) {
//     let min = array[0];
//
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
//
//
//
// console.log(arr(y));







// function arr(masiv) {
//     let min = masiv[0];
//     for (let masivElement of masiv) {
//
//         if (masivElement < min) {
//             min = masivElement;
//         }
//
//     }
//     return min;
// }
//
// console.log(arr(x));

//
// let array = [1,2,3,4,-5];
// function foo(arr) {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if(minElement < min) {
//             min = minElement;
//         }
//     }
//     return min;
// }
//
// console.log(foo(array));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//

// let x = [1, 2, 10,-5];
//
// let foo = (arr) => {
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum = sum + arrElement;
//     }
//     return sum;
// };
// console.log(foo(x));

// function foo(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum = sum + arrElement;
//
//     }
//     return sum;
// }
//
// console.log(foo(x));


// let x = [1, 2, -4];
//
// function foo(arr) {
//     let summ = 0;
//     for (let arrElement of arr) {
//
//     }
//
// }


//
// let array = [1,2,3,4];
//
// const foo = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// };
//
// console.log(foo(array));
//
//

//
//     let array = [1,2,3,4,-5]
// function arr(array) {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
//
// console.log(arr(array));


// let x = [1, 2,3,4];
// function foo(arr) {
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum += arrElement;
//     }return sum
// }
//
// console.log(foo(x));
//


//
// console.log(5 === '5');
// console.log('asd' === 'asd');
// console.log('asd' > 'asdq');
// console.log(5 != '6');


// console.log(`a`,typeof 5);

// console.log(100 + 200 + '');
// console.log('' + 100 + 200);
//
// console.log(+'100500asd');
// console.log(parseInt('100500asd'));
// console.log(parseInt('100500.123'));
// console.log(parseFloat('100500.123'));
//
//
// console.log(!!-1000);
// console.log(!!0);
//
// console.log(!!'asd');
// console.log(!!''); // false
//
// console.log(!!'0'); //true
//
//
// console.log(true + '');
// console.log(+false);
// console.log(100 - true);
// let user = {id: 1, name: 'agshdfagh'};
// console.log(!!user);

//
// let arr = [1, 2, 3, 4, true];
// console.log(!!arr);
//
// let a ;
//
// console.log(!!a);
//
// let b = null;
// console.log(!!null);
//
// console.log(typeof NaN);
// console.log(!!NaN);





// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// let a = 'hello ';
// let b = 'owu ';
// let c = 'com';
// let d = 'ua';
// let e = 1;
// let f = 10;
// let g = -999;
// let h = 123;
// let i = 3.14;
// let j = 2.7;
// let k = 16;
// let l = true;
// let m = false;


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(k);
// console.log(l);
// console.log(m);

// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(i);
// alert(j);
// alert(k);
// alert(l);
// alert(m);

//
// document.write(a);
// document.write(b);
// document.write(c);
// document.write(d);
// document.write(e);
// document.write(f);
// document.write(g);
// document.write(h);
// document.write(i);
// document.write(j);
// document.write(k);
// document.write(l);
// document.write(m);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну
// person (Не об'єкт, просто за допомоги конкатенації)

// let firstName = `Lasdfasdfasdf`;
// let middleName = `Jjasfasdfaf`;
// let lastName = `qwerqwerqwe`;
// let x = ` `;
// let person = `Lasdfasdfasdf`+x + `Jjasfasdfaf`+x + `qwerqwerqwe`;
// let person={}
// console.log(person);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

//
// let firstName = "Evgen ";
// let middleName = "Mikolaevich ";
// let lastName = "Evchenko";
// let age = 41;
//
// let first = 'firstName';
// let middle = 'middleName';
// let age1 = 'age';




// let person = firstName + middleName + lastName;

// let person = `${firstName}${middleName}${lastName}`;
// console.log(person);

//
// let n = 100;
// let o = '100';
// let p = true;
// console.log(typeof n);
// console.log(typeof o);
// console.log(typeof p);

// result = prompt(first,[firstName]);
// result = prompt(middle,[middleName]);
// result = prompt(age1,[age]);
// prompt(firstName);


// number
// string
// boolean

// var a;
// a = 'hello okten';
//
//
// {
//     let a = 'hello okten';
//     var b = 'hello world';
// }
// console.log(b);
// console.log(a);
//
// let PI = 3.14;
// console.log(PI);
// PI = 123;
// console.log(PI);
// let a = 'ufhgasfdh';
// console.log(a);
// a = 'okten';
// console.log(a);

//
// let a = 'hello okten';
// a = '5';
// console.log(typeof a, a);

// let b = 100500;
// console.log(typeof b, b);
//


// let arr;
// arr = [[321,456,987,64646444], 234, 345, -123, 0, true, 'asiugahd',[654,321,987,-580]];
//
// console.log(arr[0][3]);
//
// console.log(arr[0],[3]);
//
// console.log(arr);


// console.log(arr[2]);
// console.log(arr[4]);
// console.log(arr.length);
//
// arr[0] = 'new value';
// console.log(arr);
// arr[7] = 'okten';
// console.log(arr);// 8 7 8
// arr[arr.length] = 1293883;
// console.log(arr);
// arr[arr.length] = 'aiffysadf';
// console.log(arr);
// console.log(arr[7][0]);


//
// let user1 = {
//     id: 1,
//     name: 'vaysa',
//     age: 31,
//     skills: ['html', 'js', 'java'],
//     wife: {
//         name: 'olya',
//         age: 28
//     }
// }
//
// console.log(user1);
// console.log(user1.id);
// console.log(user1['age']);
// console.log(user1.skills[2]);
// //
// console.log(user1.wife.name);
// console.log(user1[`wife`].name);


// let users = [
//     {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 31, status: true},
//     {skills: ['html', 'js'], id: 2, name: 'petya', age: 33, status: false},
//     {skills: ['html', 'js'], id: 3, name: 'anna', age: 28, status: true},
//     {skills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', age: 29, status: false}
// ];
// console.log(users);
// let user0 = users[0];
//
// console.log(user0.age);
// console.log(user0['age']);
//
// console.log(users[0].skills[2]);
// console.log(users[0]['skills'][2]);
// console.log(users[0]['skills'][2]);
// console.log(users[3]);
// users[3].dryzhina = {navr:`asdffdsa`};
// console.log(users[3]);


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
//     {name: 'max', age: 31, status: true, surname: 'ausfyqf'},
// ];
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     document.write(`<div>${user.name} ---${user.status} ---- ${user.age}</div>`);
// }
// for (let user of users) {
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
//     // console.log(user.name,user.age);
//
// }
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let x = [5, 9, -4];
// let foo=(arr)=>{
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (min > arrElement) {
//             min = arrElement;
//         }
//     }
//     return min;
//
// }
// console.log(foo(x));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let foo = (a,b,c) => {
//     if (a > b && a > c) {
//                 console.log(a);
//     }
//     if (b > a && b > c) {
//
//         console.log(b);
//     }
//     if (c > a && c > b) {
//         console.log(c);
//     }
// };
// foo(5, -9, 13);
//


// console.log(foo(5,9,-7));


// - створити функцію яка повертає найбільше число з масиву

// let z = [5, 6, 7, 12];
// let foo = (arr) =>{
//     let max = arr[0];
//     for (const arrElement of arr) {
//         if (max<arrElement) {
//             max=arrElement; ///чому не arrElement=max???
//         }
//     }
//     return max;
// }
// console.log(foo(z));
//
// function fo(arr) {
//     let maxa = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement > maxa) {
//             maxa = arrElement;
//         }
//     }
// return maxa
// }
//
// console.log(fo(z));
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
// let xxx =[];
// let fooo = (arr) => {
//     let n=arr.length
//     console.log(n);
//     console.log(arr);
//     // let n=arr.length
//     // for (const arrElement of arr) {
//     //
//     // }
//     return arr;
// }
// fooo([1, 2, 3, 4, 5, 6]);
    //
// let y = [5, 6, -9, 0];
// for (let i = 0; i < y.length; i++) {
//     const yElement = y[i];
//}
// let n = array.length
// for (let i = 0; i < n; i++) {
//     const arrayElement = array[i];
//
// // }
// let k=[1,2,3,4,5,6]
// let foo = (arrr) => {
//     let n = arrr.length;
//
//     for (let i = 0; i < n; i++) {
//         let arrElement = arrr[i];
//         document.write(`<p>${arrr}</p>`);
//
//     }
//     return arrr;
// };
// console.log(k);


    //
    // console.log(foo(1, 2, 3, 4, 5, 6, 7, 8, 9,));
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

//     let a;
// let b;










//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]




// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let x = [5,9,-4,6,-78,4,7]
// function arr(arrey) {
//     sum = 0;
//     for (const arreyElement of arrey) {
//         sum = sum + arreyElement;
//     }
//     return sum;
// }
// arr(x);
//
// function foo(res) {
//     return res / 2;
// }
// console.log(foo(sum));



// let x = [5,9,-4,6,-78,4,7]
// function arr(arrey,namber) {
//     sum = 0;
//     for (const arreyElement of arrey) {
//         sum = sum + arreyElement;
//     }
//     return sum/namber;
// }
// console.log(arr(x,2));

// let


// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let x=  [
//     {id:12, name: `Fkljl`, age: 2},
//     {id:16, name: `Dfsfdfl`, age: 5},
//     {id:14, name: `Hpkjl`, age: 522},
//     {id:129, name: `Lkjl`, age: -52}
// ]
// let foo = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id}---${arrElement.name}---${arrElement.age}________________</div>`)
//
//     }
//
// };
// foo(x);

//
// let foo = (arr) => {
//
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//
//     }
// };

// let number = [456,8,6,35,5,525,7,-87,81,-52];
//
// function returMin(arr) {
//     let num =arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (num <arr[i]){
//             num = arr[i];
//         };
//
//     }
//     document.write(num);
//     return num;
//
// }
//
// returMin(number);


let foo=(arr) => {
    let n = 10;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        console.log(i = i + 1);
    }
};
