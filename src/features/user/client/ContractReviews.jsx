import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ContractReviews = () => {
  const { contractId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();

  const handleReviewSubmit = async () => {
    if (rating < 1 || rating > 5) {
      setSubmitError("Rating must be between 1 and 5");
      return;
    }

    const reviewData = {
      contract: contractId,
      rating: parseInt(rating),
      comment,
    };

    console.log("Submitting review with data: ", reviewData);

    try {
      const response = await axios.post(
        `ccobasi.pythonanywhere.com/review/contract/reviews/`,
        reviewData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setReviews([...reviews, response.data]);
      if (response.role === "client") {
        toast.success("Your review has been created successfully.");
        navigate("/client");
        setRating("");
        setComment("");
        setSubmitError(null);
      } else {
        toast.success("Your review has been created successfully.");
        navigate("/freelancer");
        setRating("");
        setComment("");
        setSubmitError(null);
      }
    } catch (error) {
      console.error("Error submitting review: ", error);
      setSubmitError("Failed to submit review");
      setError(error);
    }
  };

  return (
    <>
    <Box sx={{ backgroundColor: "#edeffc", padding: "20px" }}>
      <Typography
        variant="body1"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],

          textAlign: "center",
          mt: "5%",
          letterSpacing: "1px",
          fontFamily: "Poppins",
          fontWeight: "500",
          ml: { xs: "8%", sm: "7%", md: "0%", lg: "0%" },
        }}
      >
        Let either your <i>client or freelancer</i> know how satisfy you're{" "}
        <i>! </i>
      </Typography>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            mt: 2,
            mb: 44,
            p: 2,
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#F1F3F4",
            fontFamily: "Poppins",
            ml: { xs: "10%", sm: "9%", md: "7%", lg: "0%" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "200",
              fontSize: "12px",
              lineHeight: "20.8px",

              letterSpacing: "1px",
              textAlign: "center",
              //color:'#000000',
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
              pt: "10px",
            }}
          >
            Review Project
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: "1%",
              fontWeight: "200",
              mb: 1,
              color: "#ffffff",
              textAlign: "start",
              mt: -1,
              letterSpacing: "0.5px",
            }}
          >
            Submit a Review
          </Typography>
          <TextField
            label="Rating"
            type="number"
            value={rating}
            inputProps={{ min: 1, max: 5 }}
            onChange={(e) => setRating(e.target.value)}
            sx={{ backgroundColor: "background.default", borderRadius: "16px" }}
            fullWidth
          />
          <TextField
            label="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            fullWidth
            multiline
            rows={10}
            sx={{
              mt: 2,
              backgroundColor: "background.default",
              borderRadius: "16px",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleReviewSubmit}
            sx={{
              mt: 3,
              backgroundColor: "#34acf8",
              "&:hover": {
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[400]
                    : theme.palette.grey[500],
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              },
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "10px",
              lineHeight: "24px",
              letterSpacing: "-1%",
              color: "#fff",
            }}
          >
            Submit
          </Button>
          {submitError && (
            <Typography
              className="error"
              sx={{
                mt: 2,
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "24px",
                letterSpacing: "-1%",
              }}
            >
              {submitError}
            </Typography>
          )}
        </Box>
      </Container>
      </Box>
    </>
  );
};

export default ContractReviews;
