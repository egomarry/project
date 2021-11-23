'use strict';

// циклы

let num = 50;

// while (num <= 55) {
//         console.log(num);
//         num++;
// }

do {
        console.log(num);
        num++; 
}
while (num < 55);


let num2 = 50;
for (let i = 1; i < 8; i++) {
        console.log(num2);
                num2++;
}


// break - прерывает, continue - позволяет пропустить шаг
for (let i = 1; i < 10; i++) {
        if (i === 6) {
                // break;
                continue;
        }
        console.log(i);
}