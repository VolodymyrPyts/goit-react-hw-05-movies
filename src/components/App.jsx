// import { GetMovies } from './Services/Api';

import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

import HomePage from '../Pages/HomePage';
import MoviesPage from '../Pages/MoviesPage';
import NotFoundPage from 'Pages/NotFoundPage';
import MovieDetailsPage from '../Pages/MovieDetailsPage';
// import { FormSearch } from './FormSearch/FormSearch';

// https: github.com/HryhoriiAndriiets1974/goit-react-hw-05-movies/blob/main/src/pages/Home/Home.js

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetailsPage />}>
         
        </Route> 
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
};
