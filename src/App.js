import './App.css';
import MovieList from './Components/MovieList/MovieList';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByName from './Components/FilterByName/FilterByName';
import FilterByRating from './Components/Rating/Rating';
import { useSelector } from 'react-redux';

function App() {
  const movieList = useSelector((state) => state.movieList);
  const inputSearch = useSelector((state) => state.inputSearch);
  const rating = useSelector((state) => state.rating);

  return (
    <div className="App">
      <h1>Movie List</h1>
      <FilterByName />
      <FilterByRating />
      <AddMovie />
      <MovieList movies={movieList} inputSearch={inputSearch} rating={rating} />
    </div>
  );
}

export default App;
