// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import axios from "axios";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const DisputePage = () => {
//   const [reason, setReason] = useState("");
//   const [contractId, setContractId] = useState("");
//   const [paymentId, setPaymentId] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleTokenRefreshFailure = () => {
//     setMessage("Your session has expired. Please log in again.");
//     localStorage.removeItem("access");
//     localStorage.removeItem("refresh");
//     window.location.href = "/sign-in";
//   };

//   const isTokenExpired = (token) => {
//     if (!token) return true;
//     const decoded = JSON.parse(atob(token.split("."[1])));
//     return decoded.exp * 1000 < Date.now();
//   };

//   const refreshAccessToken = async () => {
//     const refreshToken = JSON.parse(localStorage.getItem("refresh"));

//     if (!refreshToken) {
//       console.error("No refresh token found");
//       return null;
//     }

//     try {
//       const response = await axios.post(
//         "ccobasi.pythonanywhere.com/token/refresh/",
//         {
//           refresh: refreshToken,
//         }
//       );
//       const newAccessToken = response.data.access;
//       localStorage.setItem("access", JSON.stringify(newAccessToken));
//       return newAccessToken;
//     } catch (error) {
//       console.error("Failed to refresh access token:", error);
//       return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let token = JSON.parse(localStorage.getItem("access"));

//     if (reason.length < 10) {
//       setMessage("Reason must be at least 10 characters long.");
//       return;
//     }

//     if (isTokenExpired(token)) {
//       const newToken = await refreshAccessToken();
//       if (!newToken) {
//         handleTokenRefreshFailure();
//         return;
//       }
//       token = newToken;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "ccobasi.pythonanywhere.com/dispute/submit/",
//         {
//           reason,
//           contract_id: contractId,
//           payment_id: paymentId,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success(response.data.message || "Dispute submitted successfully!");
//       navigate("/client");
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error("Submission error:", error);
//       if (error.response) {
//         toast.error(
//           `Failed to submit dispute: ${
//             error.response.data.message || "Unknown error"
//           }`
//         );
//         setMessage(
//           `Failed to submit dispute: ${
//             error.response.data.message || "Unknown error"
//           }`
//         );
//       } else {
//         toast.error(
//           "Failed to submit dispute. Please check your authentication."
//         );
//         setMessage(
//           "Failed to submit dispute. Please check your authentication."
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Typography
//         variant="h1"
//         sx={{
//           //mb: 2, textAlign: 'center'
//           fontFamily: "Poppins",
//           fontWeight: "600",
//           fontSize: "12px",
//           lineHeight: "20.8px",

//           letterSpacing: "1px",
//           textAlign: "center",
//           color: (theme) =>
//             theme.palette.mode === "light"
//               ? theme.palette.primary.lightModeHeroTitle
//               : theme.palette.primary.darkModeHeroTitle,
//           pt: "10px",
//         }}
//       >
//         Submit Dispute
//       </Typography>
//       <Container
//         component="main"
//         maxWidth="md"
//         sx={{
//           mt: 4,
//           mb: 4,
//           width: { lg: "100%", md: "100%", sm: "100%", xs: "85%" },
//           ml: { sm: "5%", xs: "15%", md: "10%", lg: "auto" },
//         }}
//       >
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//             p: 2,
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             backgroundColor: "background.default",
//           }}
//         >
//           <TextField
//             label="Reason"
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             required
//             fullWidth
//             multiline
//             rows={4}
//           />
//           <TextField
//             label="Contract ID (Optional)"
//             value={contractId}
//             onChange={(e) => setContractId(e.target.value)}
//             fullWidth
//           />
//           <TextField
//             label="Payment ID (Optional)"
//             value={paymentId}
//             onChange={(e) => setPaymentId(e.target.value)}
//             fullWidth
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             disabled={loading}
//             sx={{
//               mt: 3,
//               backgroundColor: "#87ceeb",
//               "&:hover": {
//                 backgroundColor: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.grey[400]
//                     : theme.palette.grey[500],
//                 color: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.primary.lightModeHeroTitle
//                     : theme.palette.primary.darkModeHeroTitle,
//               },
//               color: "#000000",
//               fontFamily: "Poppins",
//               fontWeight: "500",
//               fontSize: "10px",
//               lineHeight: "24px",
//               letterSpacing: "-1%",
//               width: "120px",
//             }}
//           >
//             {loading ? "Submitting..." : "Submit Dispute"}
//           </Button>
//           {message && (
//             <Typography
//               variant="body2"
//               sx={{ textAlign: "center", color: "error.main" }}
//             >
//               {message}
//             </Typography>
//           )}
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default DisputePage;

import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DisputePage = () => {
  const [reason, setReason] = useState("");
  const [contractId, setContractId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect user to sign-in if token refresh fails
  const handleTokenRefreshFailure = () => {
    setMessage("Your session has expired. Please log in again.");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/sign-in";
  };

  // Function to check if the JWT token has expired
  const isTokenExpired = (token) => {
    if (!token) return true;

    try {
      // Decode the token payload to get the expiration time
      const payload = JSON.parse(atob(token.split(".")[1]));
      // Convert exp to milliseconds and compare with current time
      return payload.exp * 1000 < Date.now();
    } catch (error) {
      // If decoding fails, consider the token invalid
      console.error("Invalid token:", error);
      return true;
    }
  };

  // Function to refresh access token if expired
  const refreshAccessToken = async () => {
    const refreshToken = JSON.parse(localStorage.getItem("refresh"));
    if (!refreshToken) {
      console.error("No refresh token found");
      return null;
    }

    try {
      const response = await axios.post(
        "ccobasi.pythonanywhere.com/token/refresh/",
        { refresh: refreshToken }
      );
      const newAccessToken = response.data.access;
      localStorage.setItem("access", JSON.stringify(newAccessToken));
      return newAccessToken;
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      return null;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = JSON.parse(localStorage.getItem("access"));

    // Ensure reason length is sufficient
    if (reason.length < 10) {
      setMessage("Reason must be at least 10 characters long.");
      return;
    }

    // Check if token is expired, and refresh if needed
    if (isTokenExpired(token)) {
      const newToken = await refreshAccessToken();
      if (!newToken) {
        handleTokenRefreshFailure();
        return;
      }
      token = newToken;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "ccobasi.pythonanywhere.com/dispute/submit/",
        {
          reason,
          contract_id: contractId,
          payment_id: paymentId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message || "Dispute submitted successfully!");
      navigate("/client");
      setMessage(response.data.message);
    } catch (error) {
      console.error("Submission error:", error);
      if (error.response) {
        toast.error(
          `Failed to submit dispute: ${
            error.response.data.message || "Unknown error"
          }`
        );
        setMessage(
          `Failed to submit dispute: ${
            error.response.data.message || "Unknown error"
          }`
        );
      } else {
        toast.error("Failed to submit dispute. Please check your authentication.");
        setMessage("Failed to submit dispute. Please check your authentication.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Box sx={{ backgroundColor: "#edeffc" }}>
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
        Submit Dispute
      </Typography>
      <Container
        component="main"
        maxWidth="md"
        sx={{
          mt: 4,
 
          width: { lg: "100%", md: "100%", sm: "100%", xs: "85%" },
          ml: { sm: "5%", xs: "15%", md: "10%", lg: "auto" },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "background.default",
          }}
        >
          <TextField
            label="Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            fullWidth
            multiline
            rows={4}
          />
          <TextField
            label="Contract ID (Optional)"
            value={contractId}
            onChange={(e) => setContractId(e.target.value)}
            fullWidth
          />
          <TextField
            label="Payment ID (Optional)"
            value={paymentId}
            onChange={(e) => setPaymentId(e.target.value)}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
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
          >
            {loading ? "Submitting..." : "Submit Dispute"}
          </Button>
          {message && (
            <Typography
              variant="body2"
              sx={{ textAlign: "center", color: "error.main" }}
            >
              {message}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
    </>
  );
};

export default DisputePage;
