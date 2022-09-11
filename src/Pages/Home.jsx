import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Api from '../components/Services/Api';

const Home = () => {
  const [movies, setMovies] = useState('');
  const { location } = useLocation();

  useEffect(() => {
    Api.GetTrendMovies().then(resp => setMovies(resp.resault));
  }, []);

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <>
      {movies && (
        <div>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={location}>
                <div>
                  <img
                    src={`${viewPoster(poster_path)}`}
                    alt={title}
                    width="350px"
                    height="400px"
                  />
                  <p>{title}</p>
                </div>
              </Link>
            </li>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
