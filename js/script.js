'use strict';
// 1st part

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log('answer =', numberOfFilms);

// 2nd part

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3rd part

const nameLastFilmWatching1 = prompt('Один из последних просмотренных фильмов?', '');
const userRatingFilm1 = +prompt('На сколько оцените его?', '');

const nameLastFilmWatching2 = prompt('Один из последних просмотренных фильмов?', '');
const userRatingFilm2 = +prompt('На сколько оцените его?', '');

// const movies = {
//     answerFilm1: nameLastFilmWatching1,
//     answerRatingFilm1: userRatingFilm1,
//     answerFilm2: nameLastFilmWatching2,
//     answerRatingfilm2: userRatingFilm2
// };
personalMovieDB.movies.nameLastFilmWatching1 = userRatingFilm1;
personalMovieDB.movies.nameLastFilmWatching2 = userRatingFilm2;


console.log(personalMovieDB.movies);

