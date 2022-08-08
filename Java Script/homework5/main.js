// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sides(a, b) {
    let area = a * b;
    return area;
}
// let x = sides (5, 4);
// console.log(x);
//
console.log(sides(5,6));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

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






// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p(argument) {
//     document.write(`<p>${argument}</p>`)
//
// }
//
// p(`Hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function li (argument) {
//     document.write(`<ul>
//                           <li>${argument}</li>
//                           <li>${argument}</li>
//                           <li>${argument}</li>
//                     </ul>`);
// }
//
// li (`Hello`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)





// function li(argument) {
//     document.write(`<ul>`)
//
//
// for (i = 0; i < 3; i++) {
//     document.write(`<li>${argument}</li>`);
//     }
// document.write(`</ul>`);
// }
// li(`Hello`);




// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13








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
