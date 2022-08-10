let users = [
    {name: 'vasya', age: 31, status: false},
    {name: `dfgfgfg`, age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true, surname: 'ausfyqf'},
];

// let x = 0;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// ++x;
// console.log(x);
// let x = 0;
// let y = x++;
// console.log(x, y);
// let x = 0;
// x = x + 100;
// let x = 0;
// x += 1;

// console.log(users.length);
// console.log(users);

// Звертаємось до кожного ключа з присвоєнням індексу змінну
for (let i = 0; i < users.length - 1; i++) {
    // let user = users[i];
    // document.write(`<div>${user.name}---${users[i].status}</div>`);

    document.write(`<div>${users[i].age}</div>`);
}
//                                             Звертаємось до кожного ключа ,без додаткової змінної
// for (let i = 1; i < users.length-1; i++) {
//
//     document.write(`<div>${users[i].name} ---${users[i].status} ---${users[i].status}</div>`);
// }


                                             // Реверс

// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
// }

                                            // for/of

// for (let user of users) {
//     // document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
//     console.log(user.name,user.age);
//
//
// }

// for (const user of users) {
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
// }

                                            // while
// let i = 5;
// while (i < users.length) {
//     let user = users[i];
//     document.write(`<div>${user.name} ///${user.age}/// ${user.status}</div>`);
//     i++;
// }
                                            // do
// do {
//     console.log('asdhfyqfwey');
// } while (false)
                                    // Ітерація обєктів
// let user = {name: 'max', age: 31, status: true};
// for (let userKey in user) {
//     console.log(userKey, user[userKey]);
// }


// for (const user of users) {
//     document.write('<ol>');
//
//     for (const userKey in user) {
//         document.write(`<li>${userKey} - ${user[userKey]}</li>`);
//     }
//     document.write('</ol>');
//
// }
