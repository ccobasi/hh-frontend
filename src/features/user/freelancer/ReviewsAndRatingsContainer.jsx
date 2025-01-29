// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import FreelancerFifthFeature from "./ReviewsAndRatings";

const FreelancerReviewsContainer = ({ freelancerId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `ccobasi.pythonanywhere.com/freelancer/${freelancerId}/reviews/`
        );
        setReviews(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Reviews not found");
        } else {
          setError("Error fetching reviews");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [freelancerId]);

  return (
    <FreelancerFifthFeature reviews={reviews} loading={loading} error={error} />
  );
};

export default FreelancerReviewsContainer;
