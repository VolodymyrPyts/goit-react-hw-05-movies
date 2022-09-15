import { Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../Services/Api';
import { useState, useEffect } from 'react';
import GoBack from '../components/GoBack/GoBack';
import {
  MovieWrapper,
  Poster,
  DetailsWrapper,
  Tagline,
  Title,
  Overview,
  DetailsLink,
  LinkList,
} from './PageStyled/MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function getFilm() {
      try {
        const film = await getMovieDetails(id);
        setMovie(film);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getFilm();
  }, [id]);

  const { poster_path, title, overview, tagline } = movie;

  return (
    <div>
      <GoBack to={backLinkHref}>Go back</GoBack>
      <MovieWrapper>
        <Poster
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <DetailsWrapper>
          <Title>{title}</Title>
          {tagline && <Tagline>"{tagline}"</Tagline>}
          <Overview>{overview}</Overview>
          <LinkList>
            <li>
              <DetailsLink to="cast" state={{ from: location.state.from }}>
                Cast
              </DetailsLink>
            </li>
            <li>
              <DetailsLink to="reviews" state={{ from: location.state.from }}>
                Reviews
              </DetailsLink>
            </li>
          </LinkList>
        </DetailsWrapper>
      </MovieWrapper>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
