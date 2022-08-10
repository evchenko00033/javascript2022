// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
let b = 'lorem ipsum';
let c = `javascript is cool`;

console.log(a.length);
console.log('hello world'.length);

console.log(b.length);
console.log('lorem ipsum'.length);

console.log(c.length);
console.log(`javascript is cool`.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'



console.log(a.toUpperCase());
console.log('hello world'.toUpperCase());
let toUpperCaseH = 'hello world'.toUpperCase();

console.log(b.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
let toUpperCaseL = 'lorem ipsum'.toUpperCase();

console.log(c.toUpperCase());
console.log(`javascript is cool`.toUpperCase());
let toUpperCaseJ = `javascript is cool`.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'



console.log(`HELLO WORD`.toLowerCase());
console.log(toUpperCaseH.toLowerCase());

console.log(`LOREM IPSUM`.toLowerCase());
console.log(toUpperCaseL.toLowerCase());

console.log(`JAVASCRIPT IS COOL`.toLowerCase());
console.log(toUpperCaseJ.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let d = ' dirty string   ';

console.log(d.indexOf(`d`, 0));
console.log(d.length);
console.log(d.lastIndexOf(`g`, 15));

console.log(d.substring(1, 13));  //але вираховував індекс пробілів вручну

console.log(d.replaceAll(` `, ``));// але прибирає внутрішній пробіл

console.log(d.trim());// Це Гугл підказав, нам таке не розказували

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
console.log(str.split(` `));// але це не через функцію. Як зробити через функцію, я не розумію.
                                        // Як працює функція - теж.


/// Решта не зроблена. Тему зовсім не зрозумів


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.





// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//






// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
