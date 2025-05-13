import { ADD_MOVIE, SET_INPUT_SEARCH, SET_RATING } from '../actionTypes/movieTypes';
import movieData from '../../Constant/movies';

const initialState = {
  movieList: movieData,
  inputSearch: '',
  rating: 0,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movieList: [...state.movieList, action.payload],
      };
    case SET_INPUT_SEARCH:
      return {
        ...state,
        inputSearch: action.payload,
      };
    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
