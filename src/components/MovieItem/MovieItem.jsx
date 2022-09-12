import { PropTypes } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Container, Wrapper, MovieName } from './MovieItem.styled';

const MovieItem = ({ movies }) => {
  const location = useLocation();
  console.log(location.state);
  return (
    <Container>
      {movies.map(({ poster_path, id, title }) => (
        <Wrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            <MovieName>{title}</MovieName>
          </Link>
        </Wrapper>
      ))}
    </Container>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
