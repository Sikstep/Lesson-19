'use strict';
// 1st part
let numberOfFilms;

const answer = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log('answer =', answer);

// 2nd part

const personalMovieDB = {
    count: answer,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



