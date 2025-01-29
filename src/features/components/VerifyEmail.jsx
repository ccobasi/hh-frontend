// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationFailed, setVerificationFailed] = useState(false);
  const [hasRequested, setHasRequested] = useState(false); // Prevent multiple requests
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    if (hasRequested) return;

    const verifyEmail = async () => {
      console.log("Request sent");
      setHasRequested(true);

      try {
        const response = await axios.get(
          `ccobasi.pythonanywhere.com/user/verify-email/${token}/`
        );
        if (response.status === 200) {
          if (response.data.message) {
            toast.success(response.data.message);
          }
          navigate("/sign-in");
        }
      } catch (error) {
        // console.error("Error:", error);
        setVerificationFailed(true);
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
  }, [token, navigate, hasRequested]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" sx={{ mt: "3%" }}>
          {isVerifying
            ? "Verifying your email..."
            : verificationFailed
            ? "Email verification failed. Please try again."
            : "Your email has been verified successfully."}
        </Typography>
        {verificationFailed && (
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#87ceeb", color: "white" }}
            onClick={() => navigate("/sign-up")}
          >
            Go to Sign Up
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default VerifyEmail;
