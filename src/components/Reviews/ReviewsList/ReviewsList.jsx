import { PropTypes } from 'prop-types';
import {
  ReviewsWrapper,
  ReviewCard,
  Content,
  Author,
} from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsWrapper>
      {reviews.map(({ content, author_details, id }) => (
        <ReviewCard key={id}>
          <Author>author: {author_details.username}</Author>
          <Content>"{content}"</Content>
        </ReviewCard>
      ))}
    </ReviewsWrapper>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      author_details: PropTypes.shape({
        username: PropTypes.string,
      }),
      id: PropTypes.string,
    })
  ).isRequired,
};
