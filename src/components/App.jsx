// import { GetMovies } from './Services/Api';

import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
// import MovieDetails from '../Pages/MovieDetails';
// import { FormSearch } from './FormSearch/FormSearch';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        {/* <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
      </Route>
    </Routes>
  );
};
