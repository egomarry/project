'use strict';
// используется для точного соблюдения норм файла, без адаптации под старые версии

// переменные и строгий режим

a = 15;
console.log(a);

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

// leftBorderWidth = 10; 'ошибка, т.к. меняется значение константы'

// 'прямых констант в JS не бывает
// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj); 

// 'устаревшая запись переменных VAR - не использовать
console.log(name);
var name = 'Ivan';

{
    let result = 50;
}

console.log(result);

{
    var result1 = 50;
}

console.log(result1);


// разные версии браузеров используют разные версии кода, можно проверить на сайтах, напр caniuse.com
