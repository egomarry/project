'use strict';

// автоматизировать вопросы пользователю про фильмы при помощи цикла

const numberOfFilms = +prompt ('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt('Один из последних просмотренных фильмов',''),
    b = prompt('Насколько оцените его',''),
    c = prompt('Один из последних просмотренных фильмов',''),
    d = prompt('Насколько оцените его','');

personalMovieDB.movies[a] = b;
// запись movies[a] предпочтительней movies.a - меньше багов и
// проблем с браузером
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
// 