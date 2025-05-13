import { Rate, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../redux/actions/movieActions";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rating = ({ isMovieRating = false, movieRating }) => {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.rating);

  const handleChange = (value) => {
    dispatch(setRating(value));
  };

  return (
    <Flex gap="small" vertical>
      {isMovieRating ? (
        <>
          <Rate allowHalf disabled value={movieRating} tooltips={desc} />
        </>
      ) : (
        <>
          <span>Minimum rating:</span>
          <Rate
            allowHalf
            tooltips={desc}
            onChange={handleChange}
            value={rating}
            count={5} // use 10 if your ratings go up to 10
          />
        </>
      )}
    </Flex>
  );
};

export default Rating;
