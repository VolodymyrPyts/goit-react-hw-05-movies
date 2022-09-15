import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieRewiews } from '../../Services/Api';
import ReviewsList from './ReviewsList/ReviewsList';
import { ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await getMovieRewiews(id);
        const reviews = data.results;
        setReviews(reviews);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [id]);

  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        'We have no reviews for this movie'
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
