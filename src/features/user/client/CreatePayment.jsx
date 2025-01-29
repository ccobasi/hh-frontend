
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Input, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreatePayment = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [paymentClip, setPaymentClip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("payment_clip", paymentClip);

    axios.interceptors.request.use(
      (config) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const access = JSON.parse(localStorage.getItem("access"));
        if (user && access) {
          config.headers.Authorization = `Bearer ${access}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    try {
      setLoading(true);
      const response = await axios.post(
        "ccobasi.pythonanywhere.com/payment/payments/create/",
        formData
      );
      console.log("Payment created successfully", response.data);
      toast.success("Payment created successfully.");
      navigate("/client");
    } catch (error) {
      console.error("Error submitting payment:", error);
      toast.error("Error submitting payment: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#edeffc" }}>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          width: { xs: "80%", sm: "80%", md: "100%", lg: "100%" },
          maxWidth: "600px",
          mt: 4,
          ml: { xs: "17%", sm: "15%", md: "20%", lg: "28%" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "20.8px",
            letterSpacing: "1px",
            textAlign: "center",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            pt: "10px",
          }}
        >
          Submit Payment
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">{success}</Typography>}
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ 
            mt: 2, 
            backgroundColor: 'white', // Here we set the background color to white
            padding: 2, // Optional: Adds some padding inside the form for better visual spacing
            borderRadius: 1, // Optional: Adds rounded corners to the form container
            boxShadow: 1, // Optional: Adds a subtle shadow to make the form stand out
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Amount"
                type="number"
                variant="outlined"
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="file"
                accept="image/*"
                style={{ marginLeft: "1%", marginTop: "2%", marginBottom: "3%" }}
                onChange={(e) => setPaymentClip(e.target.files[0])}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
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
                  color: "#fff",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "10px",
                  lineHeight: "24px",
                  letterSpacing: "-1%",
                  width: "120px",
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Submit Payment"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CreatePayment;