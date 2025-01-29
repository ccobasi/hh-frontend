// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars, no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const FreelancerContract = () => {
  const [contracts, setContracts] = useState([]);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get(
          `ccobasi.pythonanywhere.com/contract/user/${userId}/contracts/`
        );

        if (!Array.isArray(response.data)) {
          console.warn("API response is not an array:", response.data);
          setContracts([]);
          return;
        }

        setContracts(response.data);
      } catch (error) {
        console.error("Error fetching contracts: ", error);
        setError("Error fetching contracts. Please try again later.");
        setContracts([]);
      }
    };

    if (userId) {
      fetchContracts();
    } else {
      console.warn("User ID is not available.");
    }
  }, [userId]);

  const handleContractClick = (id) => {
    navigate(`/contract/${id}`);
  };

  return (
    <Box sx={{ mt: 4 }}>
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
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table
          sx={{ minWidth: 650, backgroundColor: "#87CEEB" }}
          aria-label="contracts table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{
                  color: "#000000",
                  letterSpacing: "1px",
                  fontWeight: "400",
                  fontSize: "10px",
                  pb: "0px",
                  pt: "5px",
                  fontFamily: "Poppins",
                }}
              >
                <strong>Project Title</strong>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#000000",
                  letterSpacing: "1px",
                  fontWeight: "400",
                  fontSize: "10px",
                  pb: "0px",
                  pt: "5px",
                  fontFamily: "Poppins",
                }}
              >
                <strong>Contract Amount</strong>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#000000",
                  letterSpacing: "1px",
                  fontWeight: "400",
                  fontSize: "10px",
                  pb: "0px",
                  pt: "5px",
                  fontFamily: "Poppins",
                }}
              >
                <strong>Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.length > 0 ? (
              contracts.map((contract) => (
                <TableRow
                  key={contract.id}
                  hover
                  onClick={() => handleContractClick(contract.id)}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color: "#000000",
                      letterSpacing: "1px",
                      fontWeight: "400",
                      fontSize: "10px",
                      pb: "0px",
                      pt: "1px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {contract.project_title || "N/A"}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#000000",
                      letterSpacing: "1px",
                      fontWeight: "400",
                      fontSize: "10px",
                      pb: "0px",
                      pt: "1px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {contract.contract_amount || "N/A"}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: "200",
                      fontFamily: "Poppins",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {contract.status || "N/A"}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={3}
                  align="center"
                  style={{
                    color: "#000000",
                    letterSpacing: "1px",
                    fontWeight: "400",
                    fontSize: "10px",
                  }}
                >
                  No contracts found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FreelancerContract;

// function FreelancerContractPage() {

//   return (
//     <>
//       {/* Container for the Freelancer page */}
//       <Container component="main" maxWidth="lg">

//         <Box sx={{ ml: { xs: "10%", sm: "7%", md: "7%", lg: "5%" } }}>
//           {/* First Heading */}
//           <Typography
//             sx={{
//               fontFamily: "Poppins",
//               fontWeight: "600",
//               fontSize: "12px",
//               lineHeight: "20.8px",
//               textAlign: "start",
//               letterSpacing: "1px",

//               color: (theme) =>
//                 theme.palette.mode === "light"
//                   ? theme.palette.primary.lightModeHeroTitle
//                   : theme.palette.primary.darkModeHeroTitle,
//               pt: "70px",
//               ml: "13%",
//             }}
//           >
//             Contract
//           </Typography>

//         </Box>
//       </Container>
//     </>
//   );
// }

// export default FreelancerContractPage;
