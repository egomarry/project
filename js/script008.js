'use strict';
// интерполяция

const category = 'toys';

// старый вид записи
// console.log('https:someurl.com/' + category + '/' + '4');

// новый вид записи - использует кавычки `
console.log(`https:someurl.com/${category}/4`);

const user = 'Ivan';
alert(`Привет, ${user}`);