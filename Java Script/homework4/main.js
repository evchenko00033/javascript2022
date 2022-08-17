// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// for (let j = 0; j < 10; j++) {
//     document.write(`<div>${`Hello`}---${j + 1}</div>`);
// }

// let i = 0;
// while (i < 20) {
//     document.write(`<div>${`Helo`}---${i + 1}</div>`);
//     i++
//
// }



// for (і = 0; і < 10;  і= і + 1) {
//     document.write(`<div>Text</div>`);
// }


// for (і = 1; і < 11; і++) {
//     document.write( `<div>Text ${і}</div>`);
// }
//
// let i = 0;
// while (i<20) {
//     document.write(`<h1>Text</h1>`);
//     i++
// }

// let i = 1;
// while (i<21) {
//     document.write(`<h1>Text ${i}</h1>`);
//     i++
// }

// // }
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//

// for (let i = 0; i < listOfItems.length; i++) {
//     const listOfItem = listOfItems[i];
//     document.write(`<ul><li>${listOfItem}</li></ul>`);
// }



// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
//

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
//
//     document.write(`<ul>`)
//
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
//
//
// document.write(`</ul>`);
//

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// document.write(`<ul>`);
// for (let i = 0; i < listOfItems.length; i++) {
//     const listOfItem = listOfItems[i];
// document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`);
//
//

// document.write(`<ul>`)
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
//
//
// document.write(`</ul>`)
//
//
// document.write(`<ul>`);
// for (let i = 0; i < listOfItems.length; i++) {
//     const listOfItem = listOfItems[i];
//     document.write(`<li>${listOfItem}</li>`);
//
// }
//
// document.write(`</ul>`);
//
// let i = 0;
//
//
// while (i < listOfItems.length) {
//
//     document.write(`<div>${listOfItems[i]}</div>`);
//     i++;
// }


// -----------------------------------------------
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`);
// for (let i = 0; i < listOfItems.length; i++) {
//     let listOfItem = listOfItems[i];
//     document.write(`<li>${listOfItem}</li>`);
// }
//     document.write(`</ul>`);

//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-contentuploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
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
// for (const product of products) {
//     document.write(`<div>
// <h3>${product.title}---${product.price}</h3>
// <img src="${product.image}" alt="${products.title}" class="product-image">
// </div>`)
// }

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// for (const product of products) {
//     document.write(`<div> <h3>${product.title} Price---${product.price}</h3> <img src="${product.image}" alt="${product.title}"></div>`)
// }






// --------------------
//     є масив
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
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


// for (const user of users) {
//     if (user.status) {
//         document.write(`<p>${user.name}!!!!</p>`);
//     }
//  }
//
// for (const user of users) {
//     if (!user.status) {
//         document.write(`<p>${user.name}/////</p>`);
//     }
// }
// for (const user of users) {
//     if (user.age<30) {
//         document.write(`<p>${user.name}???????</p>`);
//     }
// }

//
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому
// 3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
//
// if (friends.length >= 3) {
//     document.write(`<div>Це великий масив</div>`);
// } else {
//     document.write(`<div>Це маленький масив</div>`);
// }








// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.



//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//
//
//
//
//
//
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
//
//
//
//
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
//
//




// for (let user of users) {
//
//     if (user.status === true) {
//         console.log(user.name);
//     }
//
// }






//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//   document.write(`<div>sdfgsdfgsfg</div>`)
//
// }
//
//
//
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 1; i < 11; i++) {
//     document.write(`<div>sdfgsfdg ${i}</div>`);
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i=1
// while (i <= 20) {
//
//     document.write(`<h1>dfgdfg---${i}</h1>`);
//
//     i++;
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let ii = 1;
// while (ii <= 20) {
//     document.write(`<h1>sfgsfgsfg ${ii}</h1>`);
//
//
//     ii++
// }
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// for (const listOfItem of listOfItems) {
//     document.write(`<ul><li>${listOfItem}</li></ul>`);
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
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
//     for (let product of products) {
//         document.write(`<div>
// <h3>${product.title}${product.price}</h3>
// <img src="${product.image}" alt="">
// </div>`)
//     }
//





// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//     є масив
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
// for (let user of users) {
//     if (user.status) {
//         console.log(user.name);
//     }
//     if (user.status === false) {
//              console.log(user.name);
//     }
    // if (user.age > 30) {
    //     console.log(user.name);
    // }
    // }


// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
