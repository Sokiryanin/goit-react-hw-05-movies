import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from 'services/fetch';

export const Reviews = () => {
  const [review, setReview] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const allReviews = await getReviewById(movieId);
        console.log(allReviews);
        setReview(allReviews);
      } catch (error) {
        console.log(error.message);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {review &&
          review.length > 0 &&
          review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
