'use strict';

//1 оздать переменную  numberOfFilms и в нее поместить ответ от пользователя на вопрос
//'Сколько фильмов вы уже посмотрели?'

const numberOfFilms = +prompt ('Сколько фильмов Вы уже посмотрели?', '');

// Создать объект personalMovieDB и в него поместить свойства:
// - count - сюда передается ответ на первый вопрос
// - movies - в это свойство поместить пустой объект
// - actors - тоже поместить пустой объект
// - genres -  сюда поместить пустой массив
// - privat - в это свойство поместить boolean (логическое) значение false

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Задайте пользователю по два раза вопросы:
//- Один из последних просмотренных фильмов
//- На сколько оцените его
//Ответы стоит поместить в отдельные переменные
//Записать овтеты в объект movies  в формате
// movies:{
//     'logan': '8.1'
// }

// првоерить работу в консоли

// const answers[];
//  answers[0]= prompt('Один из последних просмотренных фильмов','');
//  answers[1]= prompt('Насколько оцените его','');
const a = prompt('Один из последних просмотренных фильмов',''),
    b = prompt('Насколько оцените его',''),
    c = prompt('Один из последних просмотренных фильмов',''),
    d = prompt('Насколько оцените его','');

personalMovieDB.movies[a] = b;
// запись movies[a] предпочтительней movies.a - меньше багов и
// проблем с браузером
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);