import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from 'services/fetch';
import { AuthorName, ListReviews } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [review, setReview] = useState();
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      setLoading(true);
      try {
        const allReviews = await getReviewById(movieId);
        setReview(allReviews);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ListReviews>
        {review &&
          review.length > 0 &&
          review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <AuthorName>{author}</AuthorName>
                <p>{content}</p>
              </li>
            );
          })}
      </ListReviews>
      {review && review.length === 0 && !loading && (
        <div>Sorry, we don't have any reviews...</div>
      )}
    </div>
  );
};
