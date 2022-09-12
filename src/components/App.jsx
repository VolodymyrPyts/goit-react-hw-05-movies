// import { GetMovies } from './Services/Api';

import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

import Home from '../Pages/HomePage';
import Movies from '../Pages/Movies';
import NotFound from 'Pages/NotFoundPages';
// import MovieDetails from '../Pages/MovieDetails';
// import { FormSearch } from './FormSearch/FormSearch';

// https: github.com/HryhoriiAndriiets1974/goit-react-hw-05-movies/blob/main/src/pages/Home/Home.js

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
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
