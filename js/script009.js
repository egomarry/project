'use strict';
// операторы в js

console.log('arr' + ' - object');
console.log(4 + ' - object');

//  + перед переменной превращает строку в число (унарный плюс)
console.log(4 + +' - object');
console.log(4 + +'5');


// инкримент и декримент - укорачивание записи
let incr = 10,
    decr=10;
incr++;
decr--;

console.log(incr);
console.log(decr);

let incr = 10,
    decr=10;
++incr;
--decr;

console.log(incr);
console.log(decr);

let incr = 10,
    decr=10;
// ++incr;
// --decr;

console.log(incr++);
console.log(decr--);

let incr = 10,
    decr=10;
// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

// % возвращает остаток от деления
console.log(5%2);

// = присваивание, == равенство значений, ===равенство значение и тип данных
console.log(2*4 == 8);
console.log(2*4 == '8');
console.log(2*4 === '8');
console.log(2*4 === 8);

// && - И, || - ИЛИ
const isChecked = true,
        isClose = true;
console.log(isChecked && isClose);

const isChecked = true,
        isClose = false;
console.log(isChecked && isClose);


const isChecked = true,
        isClose = true;
console.log(isChecked || isClose);

const isChecked = true,
        isClose = false;
console.log(isChecked || isClose);

const isChecked = false,
        isClose = false;
console.log(isChecked || isClose);

// ! оператор отрицания
const isChecked = false,
        isClose = false;
console.log(isChecked || !isClose);

console.log(2 + 2 * 2 != 6);
console.log(2 + 2 * 2 !== '6');

// порядок применения операторов
console.log(2 + 2 * 2 ===8);