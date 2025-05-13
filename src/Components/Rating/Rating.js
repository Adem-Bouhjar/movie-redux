import { useDispatch, useSelector } from 'react-redux';
import { setRating } from '../../redux/actions/movieActions';

function FilterByRating() {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.rating);

  return (
    <div>
      <span>Minimum rating:</span>
      <input
        type="number"
        min="0"
        max="10"
        value={rating}
        onChange={(e) => dispatch(setRating(Number(e.target.value)))}
      />
    </div>
  );
}

export default FilterByRating;
