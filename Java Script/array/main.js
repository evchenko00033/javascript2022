let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name:  [
            {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 31, status: true},
            {skills: ['html', 'js'], id: 2, name: 'petya', age: 33, status: false},
            {skills: ['html', 'js'], id: 3, name: 'anna', age:  [
                    {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 31, status: true},
                    {skills: ['html', 'js'], id: 2, name: 'petya', age: 33, status: false},
                    {skills: ['html', 'js'], id: 3, name: 'anna', age: 28, status: true},
                    {skills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', age: 29, status: false}
                ], status: true},
            {skills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', age: 29, status: false}
             ],
             age: 29, status: true},
];

// console.log(users[2][`name`][2][`age`][3][`skills`][2]);
//
// console.log(users[1][`age`]);
// console.log(users [2][`name`][2][`age`][0][`skills`][2]);
// console.log(users[2].name[1].skills[1]);

// console.log(users.length);
// console.log(users[2].name.length);
// console.log(users[2].name[1].skills.length);

// users[0].name = `FFF`;
// users[2].name[0].skills = `L456L`;
// console.log(users[2].name[0].skills);
// console.log(users[2].name[0].skills[8]); //виводить букву

// console.log(users[2].name[0].skills.length);
// console.log(users[2].name[0].length);


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
//
// let arr = [123, 321, 456, 987, 598, 645,];
//
// console.log(arr[3]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let books = [
//     {title: `LLLLLLL`, pageCount: 154, genre: true},
//     {title: `FFFFFF`, pageCount: 654, genre: false},
//     {title: `HHHHHHH`, pageCount: 894, genre: true},
//
// ];
// console.log(books[1].title);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// \Кожен автор має поля name,age

let books1 = [
    {title: `LLLLLLL`, pageCount: 154, genre: true,authors:[`name`,`age`]},
    {title: `FFFFFF`, pageCount: 654, genre: false,authors:[`Fhhhh`,54]},
    {title: `HHHHHHH`, pageCount: 894, genre: true,authors:[`RRRR`,654]},

];
console.log(books1);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let x = [
    {name: `PPJpjj`, username: `LJJJJJ`, password: `-1654rtertwe`},
    {name: `PPJpjj`, username: `LJJJJJ`, password: `0dsfasdfe`},
    {name: `PPJpjj`, username: `LJJJJJ`, password: `1hhhh`},
    {name: `PPJpjj`, username: `LJJJJJ`, password: `2hgf`},
    {name: `PPJpjj`, username: `LJJJJJ`, password: `3ggfh`},
    {name: `PPJpjj`, username: `LJJJJJ`, password: `4hhgf`},
    {name: `PPJpjj`, username: `LJJJJJ`, password: `5fghfgh`},
    {name: `PPJpjj`, username: `LJJJJJ`, password: `6gfhfgh`},



];
x[8]=
{
     password:`999`
};

console.log(x[8].password);
console.log(x);
