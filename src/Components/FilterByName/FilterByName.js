import { useDispatch, useSelector } from 'react-redux';
import { setInputSearch } from '../../redux/actions/movieActions';

function FilterByName() {
  const dispatch = useDispatch();
  const inputSearch = useSelector((state) => state.inputSearch);

  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={inputSearch}
      onChange={(e) => dispatch(setInputSearch(e.target.value))}
    />
  );
}

export default FilterByName;
