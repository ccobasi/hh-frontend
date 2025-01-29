// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   CardActions,
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Container,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const FreelancerContractPage = () => {
//   const [contracts, setContracts] = useState([]);
//   const [error, setError] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user ? user.id : null;
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchContracts = async () => {
//       try {
//         const response = await axios.get(
//           `ccobasi.pythonanywhere.com/contract/user/${userId}/contracts/`
//         );

//         if (!Array.isArray(response.data)) {
//           console.warn("API response is not an array:", response.data);
//           setContracts([]);
//           return;
//         }

//         setContracts(response.data);
//       } catch (error) {
//         console.error("Error fetching contracts: ", error);
//         setError("Error fetching contracts. Please try again later.");
//         setContracts([]);
//       }
//     };

//     if (userId) {
//       fetchContracts();
//     } else {
//       console.warn("User ID is not available.");
//     }
//   }, [userId]);

//   const handleContractClick = (id) => {
//     navigate(`/contract/${id}`);
//   };

//   return (
//     <>
//     <Box sx={{backgroundColor:"#edeffc"}}>
//       <Typography
//         sx={{
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
//         Contracts
//       </Typography>
//       <Container component="main" maxWidth="md">
//         {error && <Typography color="error">{error}</Typography>}
//         <Grid
//           container
//           spacing={4}
//           sx={{
//             pt: { lg: "5%", md: "5%", sm: "0%", xs: "5%" },
//             pb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
//             mt: { lg: "0%", md: "0%", sm: "10%", xs: "10%" },
//             ml: { lg: "-1%", md: "1%", sm: "3%", xs: "6%" },
//             width: { xs: "95%", sm: "98%", md: "100%" },
//           }}
//         >
//           {contracts.length > 0 ? (
//             contracts.map((contract) => (
//               <Grid key={contract.id} item xs={12} md={4} sx={{ mb: "10px" }}>
//                 <Card
//                   sx={{
//                     cursor: "pointer",
//                     backgroundColor: "#A0D9EF",
//                     borderRadius: "26px",
//                     boxShadow: "1 4px 8px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   <CardContent
//                     sx={{
//                       flex: 1,
//                       overflow: "hidden",

//                       // width: "155px",
//                       //height: "122px",

//                       backgroundColor: "background.default",
//                       padding: "20px",

//                       pt: "30px",
//                       marginBottom: "90px",
//                       borderRadius: "0px",
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         fontWeight: "200",
//                         mb: 1,
//                         color: (theme) =>
//                           theme.palette.mode === "light"
//                             ? theme.palette.primary.lightModeHeroTitle
//                             : theme.palette.primary.darkModeHeroTitle,

//                         textAlign: "start",
//                         mt: 1,
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       Summary
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         //color: '#000000',
//                         marginTop: "15px",

//                         color: (theme) =>
//                           theme.palette.mode === "light"
//                             ? theme.palette.primary.lightModeHeroTitle
//                             : theme.palette.primary.darkModeHeroTitle,

//                         pb: "0px",
//                         pt: "1px",
//                         fontFamily: "Poppins",
//                         fontWeight: "500",
//                         fontSize: "12px",

//                         letterSpacing: "0.5px",
//                         textOverflow: "ellipsis",
//                         overflow: "hidden",
//                         whiteSpace: "nowrap",
//                       }}
//                     >
//                       {" "}
//                       Title: {contract.project_title || "N/A"}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         //color: '#000000',
//                         marginTop: "15px",

//                         color: (theme) =>
//                           theme.palette.mode === "light"
//                             ? theme.palette.primary.lightModeHeroTitle
//                             : theme.palette.primary.darkModeHeroTitle,

//                         pb: "0px",
//                         pt: "1px",
//                         fontFamily: "Poppins",
//                         fontWeight: "500",
//                         fontSize: "12px",

//                         letterSpacing: "0.5px",
//                         textOverflow: "ellipsis",
//                         overflow: "hidden",
//                         whiteSpace: "nowrap",
//                       }}
//                     >
//                       Amount: {contract.contract_amount || "N/A"}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         //color: '#000000',
//                         marginTop: "15px",

//                         color: (theme) =>
//                           theme.palette.mode === "light"
//                             ? theme.palette.primary.lightModeHeroTitle
//                             : theme.palette.primary.darkModeHeroTitle,

//                         pb: "0px",
//                         pt: "1px",
//                         fontFamily: "Poppins",
//                         fontWeight: "500",
//                         fontSize: "12px",

//                         letterSpacing: "0.5px",
//                         textOverflow: "ellipsis",
//                         overflow: "hidden",
//                         whiteSpace: "nowrap",
//                       }}
//                     >
//                       Status: {contract.status || "N/A"}
//                     </Typography>
//                     <CardActions
//                       sx={{ justifyContent: "center", paddingBottom: "20px" }}
//                     >
//                       <Button
//                         onClick={() => handleContractClick(contract.id)}
//                         sx={{
//                           backgroundColor: "#A0D9EF",
//                           letterSpacing: "0.5px",
//                           color: "#fff",
//                           borderRadius: "20px",
//                           "&:hover": {
//                             backgroundColor: "#B0DAE5",
//                           },
//                           position: "absolute",
//                           mt: "165px",
//                         }}
//                         variant="contained"
//                       >
//                         Details
//                       </Button>
//                     </CardActions>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           ) : (
//             <Typography>No contracts found</Typography>
//           )}
//         </Grid>
//       </Container>
//       </Box>
//     </>
//   );
// };

// export default FreelancerContractPage;
// eslint-disable-next-line no-unused-vars
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
  Container,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const FreelancerContractPage = () => {
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
    <Box sx={{ backgroundColor: "#edeffc" }}>
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
          pt: "10px",
        }}
      >
        Contracts
      </Typography>
      <Container component="main" maxWidth="md">
        {error && <Typography color="error">{error}</Typography>}
        <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 'none', borderRadius: '12px', bgcolor: 'background.paper' }}>
          <Table aria-label="contracts table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Amount</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contracts.length > 0 ? (
                contracts.map((contract) => (
                  <TableRow key={contract.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" sx={{ fontSize: '12px' }}>
                      {contract.project_title || "N/A"}
                    </TableCell>
                    <TableCell sx={{ fontSize: '12px' }}>{contract.contract_amount || "N/A"}</TableCell>
                    <TableCell sx={{ fontSize: '12px' }}>{contract.status || "N/A"}</TableCell>
                    <TableCell sx={{ fontSize: '12px' }}>
                      <Button 
                        onClick={() => handleContractClick(contract.id)}
                        size="small"
                        variant="contained"
                        sx={{
                          backgroundColor: "#34acf8",
                          color: "#fff",
                          '&:hover': {
                            backgroundColor: "#B0DAE5",
                          },
                          borderRadius: '20px',
                        }}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} sx={{ textAlign: 'center' }}>No contracts found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default FreelancerContractPage;