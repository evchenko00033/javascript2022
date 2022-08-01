// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let x = +prompt(`Enter number`);
//     if (x !== 0) {
//         console.log('True');
//            }
//     else {
//     console.log('False'); }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('What time is it?');
// if (time >0 && time<=15) {
//      console.log('The first quarter');
// }
// else if (time > 15 && time <= 30) {
//     console.log('Second quarter');
// }
// else if (time > 30 && time <= 45) {
//     console.log('The third quarter');
// }
// else if (time > 45 && time <= 59) {
//
//     console.log('Fourth quarter');
// }
// else if (time === 0) {
//     console.log('Fourth quarter')
// }
// else {
//     console.log('Does not exist')}



// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).


// let day = +prompt('Enter a number from 1 to 31');
// if (day >= 1 && day <= 10) {
//     console.log('Hhe first decade');
// }
// else if (day >= 11 && day <= 20) {
//     console.log('The second decade');
// }
// else if (day >= 21 && day <= 31) {
//     console.log('The third decade');
// }
// else {
//     console.log('Does not exist')}



// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і
// на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).


// let weekday = +prompt(`Enter your day`);
// switch (weekday) {
//     case 1:
//     case 8:
//     case 15:
//     case 22:
//     case 29:
//         console.log('Monday');
//         break;
//     case 2:
//     case 9:
//     case 16:
//     case 30:
//         console.log('Tuesday ');
//         break;
//     case 3:
//     case 10:
//     case 17:
//     case 31:
//         console.log('Wednesday ');
//         break;
//     case 4:
//     case 11:
//     case 18:
//     case 25:
//         console.log('Thursday ');
//         break;
//     case 5:
//     case 12:
//     case 19:
//     case 26:
//         console.log('Friday ');
//         break;
//     case 6:
//     case 13:
//     case 20:
//     case 27:
//         console.log('Saturday ');
//         break;
//     case 7:
//     case 14:
//     case 21:
//     case 28:
//         console.log('Sunday ');
//         break;
//     default:
//         console.log('Such a number of the day does not exist');
//         break;
//
// }



//       - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('Enter the first number');
// let b = +prompt('Enter the second number');
// if (a > b) {
//     console.log(a);
// }
// else if (b>a) {
//     console.log(b);
// }
// else if (a === b) {
//     console.log('a=b (Equally)');
// }
// else {
//     console.log('Don`t do stupid things!!!');
// }
// чОМУ КОЛИ Я ВВОЖУ 0 І ШИФТ ПИШЕ =Don`t do stupid things!!!???


// - є змінна х, яка може прийняти будь-яке значення
//     (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,
//         за допомоги  оператора || буде присвоювати
//         змінній х значення "default"  якщо значення
//         змінної х являється falsy (хибноподыбне,
//         тобто кастується до false)



// let x = prompt(`input`) || `default`;
// console.log(x);

// Перевірте, будь ласка, ще два варіанти цієї задачі. Чи я правильно зрозумів тему? Дякую.
// or

// let x = prompt(`input`);
// if (x) {
//
//  }
// else {
//
//     x = `default`;
// }
// console.log(x);

// or


// let x = prompt(`input`);
// if (!x ) {
//     x = `default`;
// }
// console.log(x);

