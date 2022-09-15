import { PropTypes } from 'prop-types';
import { CastWrapper, Photo, Name, Character } from './CastList.styled';

const CastList = ({ actors }) => {
  return (
    <CastWrapper>
      {actors.map(({ character, profile_path, original_name, credit_id }) => (
        <div key={credit_id}>
          <Photo
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : `https://via.placeholder.com/260x390?text=No+Photo`
            }
            alt={original_name}
          />
          <Name>{original_name}</Name>
          <Character>"{character}"</Character>
        </div>
      ))}
    </CastWrapper>
  );
};

export default CastList;

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      credit_id: PropTypes.string,
      poster_path: PropTypes.string,
      original_name: PropTypes.string,
      character: PropTypes.string,
    })
  ).isRequired,
};
