// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
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
  CircularProgress,
  Box,
  TablePagination,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";

const isTokenExpired = (token) => {
  if (!token) return true;
  const payload = JSON.parse(atob(token.split(".")[1]));
  const expiry = payload.exp * 1000; // Convert to milliseconds
  return Date.now() > expiry;
};

const refreshAccessToken = async () => {
  try {
    const response = await axios.post("ccobasi.pythonanywhere.com/token/refresh/", {
      refresh: JSON.parse(localStorage.getItem("refresh")),
    });
    localStorage.setItem("access", JSON.stringify(response.data.access));
    return response.data.access;
  } catch (error) {
    console.error("Token refresh failed:", error);
    return null;
  }
};

const DisputeList = () => {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchDisputes = async () => {
      let token = JSON.parse(localStorage.getItem("access"));

      if (isTokenExpired(token)) {
        token = await refreshAccessToken();
        if (!token) {
          setError("Session expired. Please log in again.");
          return;
        }
      }

      try {
        const response = await axios.get(
          "ccobasi.pythonanywhere.com/dispute/disputes/list/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setDisputes(response.data.disputes);
      } catch (err) {
        toast.error("Error fetching disputes:", err);
        console.error("Error fetching disputes:", err);
        setError("Failed to fetch disputes.");
      } finally {
        setLoading(false);
      }
    };

    fetchDisputes();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Calculate the current disputes to display
  const currentDisputes = disputes.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ backgroundColor: "#edeffc" }}>
      <Container
      component="main"
      maxWidth={isMobile ? "xs" : "md"} // Adjusts width based on screen size
      sx={{
        mt: 4,
        
        padding: isMobile ? 2 : 0, // Adds padding for smaller screens
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
        Dispute List
      </Typography>
      <Button variant="contained" color="primary" href="/dispute" sx={{ mb: 2, backgroundColor: "#34acf8", color:"#fff", float: "right", }}>
        Create Dispute
      </Button>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="body1" color="error" sx={{ textAlign: "center" }}>
          {error}
        </Typography>
      ) : (
        <>
          <TableContainer
            component={Paper}
            sx={{
              width: "100%", // Ensures table takes full width
              overflowX: "auto", // Allows horizontal scroll if content overflows
            }}
          >
            <Table sx={{ minWidth: isMobile ? 500 : 650 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#34acf8", color: "#fff" }}>
                  <TableCell sx={{ color: "#fff" }}>ID</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Reason</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Contract ID</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Payment ID</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Status</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Created At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentDisputes.map((dispute) => (
                  <TableRow key={dispute.id}>
                    <TableCell>{dispute.id}</TableCell>
                    <TableCell>{dispute.reason}</TableCell>
                    <TableCell>{dispute.contract_id || "N/A"}</TableCell>
                    <TableCell>{dispute.payment_id || "N/A"}</TableCell>
                    <TableCell>{dispute.status}</TableCell>
                    <TableCell>
                      {new Date(dispute.created_at).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={disputes.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ color: "#34acf8" }}
          />
        </>
      )}
    </Container>
    </Box>
  );
};

export default DisputeList;
