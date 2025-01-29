// // eslint-disable-next-line no-unused-vars
// import  Box  from "@mui/material/Box";
// import  Container from "@mui/material/Container";
// import  Link from "@mui/material/Link";
// import  Typography from "@mui/material/Typography";

// const PaymentPage = ({ userId }) => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   userId = user ? user.id : null;

//   return (
//     <Container component="main" maxWidth="lg">

//       <div >
//         <Typography

//           sx={{
//             fontFamily: 'Poppins',
//             fontWeight: '600',
//             letterSpacing:'1px',
//             fontSize: '12px',
//             lineHeight: '20.8px',
//             textAlign: 'start',
//             color: (theme) =>
//               theme.palette.mode === 'light'
//                ? theme.palette.primary.lightModeHeroTitle
//                 : theme.palette.primary.darkModeHeroTitle,
//             pt: '70px',
//             ml: '16%',
//             //pb:'0%'
//           }}
//         >
//           Payment

//         </Typography>
//       </div>

//     </Container>
//   );
// };

// export default PaymentPage;

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import  Box  from "@mui/material/Box";
import axios from "axios";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";

const PaymentPage = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          "ccobasi.pythonanywhere.com/payment/payments/"
        );
        setPayments(response.data);
      } catch (err) {
        setError(err);
        toast.error("Failed to fetch payments.");
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Box sx={{ backgroundColor: "#edeffc" }}>
          <Container component="main" maxWidth="lg">
      <Typography
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
          pt: "70px",
        }}
      >
        Payment List
      </Typography>
      <Button variant="contained" color="primary" href="/payments/create" sx={{ mb: 2, backgroundColor: "#34acf8", color:"#fff", float: "right", }}>
        Upload Payment
      </Button>
      <TableContainer component={Paper} sx={{ mt: 4, ml: "7%", maxWidth: 950 }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "200",
                  fontSize: "11px",
                  //mb: 1,
                  color: "#34acf8",
                  //textAlign: "start",
                  //mt: 1,
                  letterSpacing: "1px",
                }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "200",
                  fontSize: "11px",
                  //mb: 1,
                  color: "#34acf8",

                  //mt: 1,
                  letterSpacing: "1px",
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "200",
                  fontSize: "11px",
                  // mb: 1,
                  color: "#34acf8",
                  //textAlign: "start",
                  // mt: 1,
                  letterSpacing: "1px",
                }}
              >
                Created At
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "200",
                  fontSize: "11px",
                  //mb: 1,
                  color: "#34acf8",
                  //textAlign: "start",
                  //mt: 1,
                  letterSpacing: "1px",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeHeroTitle
                        : theme.palette.primary.darkModeHeroTitle,
                    pb: "0px",
                    pt: "1px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "10px",
                    letterSpacing: "1px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {payment.amount}
                </TableCell>
                <TableCell
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeHeroTitle
                        : theme.palette.primary.darkModeHeroTitle,
                    pb: "0px",
                    pt: "1px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "10px",
                    letterSpacing: "1px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {payment.status}
                </TableCell>
                <TableCell
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeHeroTitle
                        : theme.palette.primary.darkModeHeroTitle,
                    pb: "0px",
                    pt: "1px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "10px",
                    letterSpacing: "1px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {new Date(payment.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {/* Add links or buttons for actions like view details or update status */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </Box>
  );
};

export default PaymentPage;
