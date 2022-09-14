import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../Services/Api';
import CastList from './CastList/CastList';
import { CastContainer } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function getCredits() {
      try {
        const data = await getMovieCredits(id);
        const cast = data.cast;
        setCredits(cast);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getCredits();
  }, [id]);

  return (
    <CastContainer>
      {credits.length > 0 ? (
        <CastList actors={credits} />
      ) : (
        'We have no cast for this movie'
      )}
    </CastContainer>
  );
};

export default Cast;