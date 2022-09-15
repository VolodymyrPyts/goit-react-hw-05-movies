import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieItem from 'components/MovieItem/MovieItem';
import { getSearchedMovies } from '../Services/Api';
import { Message } from './PageStyled/MoviesPage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    async function getMovies() {
      try {
        const data = await getSearchedMovies(query);
        setMovies(data.results);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query]);

  const onFormSubmit = (e, query) => {
    e.preventDefault();
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams({ nextQuery });
    setMovies([]);
  };

  return (
    <div>
      <SearchBar handleSubmit={onFormSubmit} />
      {movies?.length > 0 && <MovieItem movies={movies} />}

      {movies?.length === 0 && query !== '' && (
        <Message>
          Sorry, there is no films for your results! Try to find something else!
        </Message>
      )}
    </div>
  );
};

export default MoviesPage;
