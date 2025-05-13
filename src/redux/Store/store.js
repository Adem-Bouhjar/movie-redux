import { createStore } from 'redux';
import movieReducer from '../reducers/movieReducers';

const store = createStore(movieReducer);

export default store;
