'use strict';

/* alert(1)
[0,3].push() */
//console.log(leftBorderWidth); /* доступна до обявлення  */
//console.log(second); /* не доступно до обявлення */
var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

console.log(leftBorderWidth);
console.log(second); /* Поднятие или hoisting — это механизм в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен */
/* 'string', "string", `string` *//* backticks `` */
console.log(`gol`); 

/* - to String */

// 1)
console.log(String(5));
console.log(typeof(String(5)));
// 2)
console.log("" + 5);

/* - to Number */
// 1)
console.log(Number("5"));
// 2)
console.log(+"5");
// 3)
console.log(parseInt("15px", 10));

// 0, '', null, undefined, NaN - це все буде false