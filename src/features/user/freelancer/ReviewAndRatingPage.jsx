// eslint-disable-next-line no-unused-vars, no-unused-vars
import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Grid,
  Rating,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FreelancerReviewAndRating = ({ reviews, loading, error }) => {
  return (
    <Box sx={{ width: '100%', pt: 3 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "left",
          mb: 2,
          pt: 10,
          pl: 1,
          color: (theme) => 
            theme.palette.mode === "light" 
              ? theme.palette.primary.lightModeHeroTitle 
              : theme.palette.primary.darkModeHeroTitle,
        }}
      >
        Reviews
      </Typography>
      {loading && (
        <Typography 
          variant="body2" 
          sx={{ 
            textAlign: 'center',
            mt: 2,
            color: (theme) => 
              theme.palette.mode === "light" 
                ? theme.palette.primary.lightModeHeroTitle 
                : theme.palette.primary.darkModeHeroTitle
          }}
        >
          Loading...
        </Typography>
      )}
      {error && (
        <Typography 
          variant="body2" 
          color="error" 
          sx={{ 
            textAlign: 'center',
            mt: 2,
          }}
        >
          {error}
        </Typography>
      )}

      <Grid 
        container 
        spacing={3} 
        sx={{ 
          mt: 2,
          justifyContent: 'left',
        }}
      >
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={review.id}
            >
              <Card 
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  color: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                  height: 'auto',
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                  p: 2,
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      sx={{ 
                        textAlign: 'start', 
                        fontFamily: 'Poppins', 
                        fontSize: '14px', 
                        fontWeight: 'bold', 
                        letterSpacing: '1px', 
                        color: '#333333' 
                      }}
                    >
                      {review.reviewer_name || "Anonymous"}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 2, 
                      textAlign: 'left',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      color: '#555555',
                      fontSize: '12px',
                      fontFamily: 'Poppins',
                    }}
                  >
                    {review.comment}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', p: 2 }}>
                  <Rating name="read-only" value={review.rating} readOnly />
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography 
            variant="body2" 
            sx={{ 
              textAlign: 'center',
              mt: 2,
              color: (theme) => 
                theme.palette.mode === "light" 
                  ? theme.palette.primary.lightModeHeroTitle 
                  : theme.palette.primary.darkModeHeroTitle
            }}
          >
            No reviews yet
          </Typography>
        )}
      </Grid>
    </Box>
  );
};


function ReviewAndRatingPage({ userId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  userId = user ? user.id : null;
  const jwt_access = localStorage.getItem("access");

  useEffect(() => {
    if (jwt_access === null && !user) {
      navigate("/sign-in");
    }
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `ccobasi.pythonanywhere.com/review/freelancer/${userId}/reviews/`
        );
        setReviews(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [userId]);

  return (
    <>
    <Box sx={{backgroundColor:"#edeffc"}}>
      <Container component="main" maxWidth="md">
        <Box sx={{ ml: { xs: "10%", sm: "7%", md: "0%", lg: "5%" } }}>
          <FreelancerReviewAndRating
            reviews={reviews}
            loading={loading}
            error={error}
          />
        </Box>
      </Container>
    </Box>
    </>
  );
}

export default ReviewAndRatingPage;
