import { useState, useEffect } from 'react';
import  MovieItem  from '../components/MovieItem/MovieItem';
import {GetTrendMovies} from '../Services/Api';

const HomePage = () => {
  const [movies, setMovies] = useState('');
 
  useEffect(() => {
  async function getMovies() {
    try {
      const data = await GetTrendMovies();
      const trendieMovies = data.results;
      setMovies(trendieMovies);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  getMovies();
}, []);

return (
  <div>
    <MovieItem movies={movies} />
  </div>
);

};

export default HomePage;
