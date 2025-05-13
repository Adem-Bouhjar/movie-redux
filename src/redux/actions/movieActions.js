import { ADD_MOVIE, SET_INPUT_SEARCH, SET_RATING } from '../actionTypes/movieTypes';

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const setInputSearch = (text) => ({
  type: SET_INPUT_SEARCH,
  payload: text,
});

export const setRating = (rating) => ({
  type: SET_RATING,
  payload: rating,
});
