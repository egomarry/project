'use strict';

const numberOfFilms = +prompt ('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// // автоматизировать вопросы пользователю про фильмы при помощи цикла
// const a = prompt('Один из последних просмотренных фильмов',''),
//     b = prompt('Насколько оцените его',''),
//     c = prompt('Один из последних просмотренных фильмов',''),
//     d = prompt('Насколько оцените его','');

// personalMovieDB.movies[a] = b;
// // запись movies[a] предпочтительней movies.a - меньше багов и
// // проблем с браузером
// personalMovieDB.movies[c] = d;

// цикл 1
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов',''),
//         b = prompt('Насколько оцените его','');
//     if (a !=null && b !=null && a !='' && b !='' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// цикл 2
// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов',''),
//         b = prompt('Насколько оцените его','');
//     if (a !=null && b !=null && a !='' && b !='' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }

// цикл 3
let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов',''),
            b = prompt('Насколько оцените его','');
        if (a !=null && b !=null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        i++;
}
while (i<2);



console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы класссический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Призошла ошибка');
}
