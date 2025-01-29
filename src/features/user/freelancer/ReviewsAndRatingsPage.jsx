// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import { Rating } from "@mui/material";

const ReviewsAndRatingsPage = ({ reviews, loading, error }) => {
  if (reviews) {
    console.log("Reviews:", reviews);
  }

  return (
    <div>
      <Typography
        sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "12px", lineHeight: "20.8px", textAlign: "start",
          letterSpacing:'1px',
         
          color: (theme) =>
            theme.palette.mode === 'light'
             ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,
          pt: '70px',
          ml: '13%',
          
                 }}
      >
        Reviews
      </Typography>
      {loading && (
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "10px",
            lineHeight: "20.8px",
          }}
        >
          Loading...
        </Typography>
      )}
      {error && (
        <Typography
          className="error"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "10px",
            lineHeight: "24px",
            letterSpacing: "-1%",
          }}
        >
          {error}
        </Typography>
      )}

      <Grid
        container
        spacing={4}
        sx={{
          pb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
          mt: { lg: "0%", md: "0%", sm: "10%", xs: "10%" },
          ml: { lg: "-1%", md: "-1%", sm: "3%", xs: "-2%" },
        }}
      >
        {Array.isArray(reviews) && reviews.length > 0 ? (
          <Grid
            container
            spacing={4}
            sx={{
              pb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
              mt: { lg: "0%", md: "0%", sm: "1%", xs: "1%" },
              ml: { lg: "-3%", md: "-1%", sm: "-6%", xs: "-2%" },
            }}
          >
            {reviews.map((review) => (
              <Grid key={review.id} item xs={6} md={4} sx={{ mb: "10px" }}>
                <Card
                  key={review.id}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    backgroundColor: '#87CEEB',
                    // (theme) =>
                    //   theme.palette.mode === "light"
                    //     ? theme.palette.grey[50]
                    //     : theme.palette.grey[900],

                    borderRadius: "16px",
                  }}
                >
                  <CardContent
                    sx={{
                      flex: 1,
                      overflow: "hidden",

                      width: "155px",
                      height: "122px",

                      borderRadius: "16px",
                      boxShadow: "0px 4px 20px -10px #00000005",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#000000',   pb: "10px",
                        pt: "15px",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "10px",
                        letterSpacing:'0.5px',
                        textAlign: "center",
                         //width: "90%",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        
                      }}
                    >
                      {`${review.reviewer_name || "Anonymous Reviewer"}`}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                         color: '#000000',    pb: "10px",
                        pt: "1px",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "12px",
                        letterSpacing:'1px',
                        textAlign: "center",
                         //width: "90%",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        
                      }}
                    >
                      {` ${
                        review.comment
                      }`}
                    </Typography>
                    {/* <TextField
                    rows={4}
                    label= {`${review.reviewer_name || "Anonymous Reviewer"}: ${
                      review.comment
                    }`}
                    sx={{width:"400px", height:"200px"}}
                    /> */}
                    
                    {/* <Box sx={{
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? theme.palette.primary.lightModeHeroTitle
                            : theme.palette.primary.darkModeHeroTitle,
                        pb: "0px",
                        pt: "1px",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "13px",
                        textAlign: "center",
                         width: "190%",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display:'flex'
                        
                      }}>
                    {`${review.reviewer_name || "Anonymous Reviewer"}: ${
                        review.comment
                      }`}
                    </Box> */}

                    <Typography sx={{ textAlign: "center", }}>
                      <Rating name="read-only" value={review.rating} readOnly />
                   

                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography
            className="error"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "10px",
              lineHeight: "24px",
              letterSpacing: "-1%",
            }}
          >
            No reviews yet
          </Typography>
        )}
      </Grid>
    </div>
  );
};



export default ReviewsAndRatingsPage;

