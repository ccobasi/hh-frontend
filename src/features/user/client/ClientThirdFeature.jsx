// // eslint-disable-next-line no-unused-vars, 
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";

// const ClientThirdFeature = ({ userId }) => {
//   const [contracts, setContracts] = useState([]);
//   const [error, setError] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));
//   userId = user ? user.id : null;
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchContracts = async () => {
//       try {
//         const response = await axios.get(
//           `ccobasi.pythonanywhere.com/contract/users/${userId}/contracts/`
//         );
//         console.log(response.data);
//         setContracts(response.data);
//       } catch (error) {
//         console.error("Error fetching contracts: ", error);
//         setError(error);
//       }
//     };

//     if (userId) {
//       fetchContracts();
//     }
//   }, [userId]);

//   const handleContractClick = (id) => {
//     navigate(`/contract/${id}`);
//   };

//   return (
//     <Box
//       sx={{
//         padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" },
//       }}
//     >
//       {error && (
//         <Typography
//           className="error"
//           sx={{
//             fontFamily: "Poppins",
//             fontWeight: "500",
//             fontSize: "10px",
//             lineHeight: "24px",
//             letterSpacing: "1px",
//             mb: "90%",
//           }}
//         >
//           Error loading contracts
//         </Typography>
//       )}

//       <Grid
//         container
//         spacing={4}
//         sx={{
//           pb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
//           mt: { lg: "0%", md: "0%", sm: "10%", xs: "10%" },
//         }}
//       >
//         {contracts.map((contract) => (
//           <Grid
//             key={contract.id}
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             sx={{ mb: "10px" }}
//           >
//             <Card
//               key={contract.id}
//               sx={{
//                 cursor: "pointer",
//                 backgroundColor: "#A0D9EF",
//                 borderRadius: "26px",
//                 boxShadow: "1 4px 8px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <CardContent
//                 sx={{
//                   flex: 1,
//                   overflow: "hidden",
//                   backgroundColor: "background.default",
//                   padding: "20px",
//                   pt: "30px",
//                   marginBottom: "90px",
//                   borderRadius: "0px",
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontWeight: "200",
//                     mb: 1,
//                     color: (theme) =>
//                       theme.palette.mode === "light"
//                         ? theme.palette.primary.lightModeHeroTitle
//                         : theme.palette.primary.darkModeHeroTitle,
//                     textAlign: "start",
//                     mt: 1,
//                     letterSpacing: "0.5px",
//                   }}
//                 >
//                   Summary
//                 </Typography>

//                 <Typography
//                   variant="body2"
//                   sx={{
//                     marginTop: "15px",
//                     color: (theme) =>
//                       theme.palette.mode === "light"
//                         ? theme.palette.primary.lightModeHeroTitle
//                         : theme.palette.primary.darkModeHeroTitle,
//                     pb: "0px",
//                     pt: "1px",
//                     fontFamily: "Poppins",
//                     fontWeight: "500",
//                     fontSize: "12px",
//                     letterSpacing: "0.5px",
//                     textOverflow: "ellipsis",
//                     overflow: "hidden",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   Name: {contract.contract_name}
//                 </Typography>

//                 <Typography
//                   variant="body2"
//                   sx={{
//                     marginTop: "5px",
//                     color: (theme) =>
//                       theme.palette.mode === "light"
//                         ? theme.palette.primary.lightModeHeroTitle
//                         : theme.palette.primary.darkModeHeroTitle,
//                     pt: "3px",
//                     fontFamily: "Poppins",
//                     fontWeight: "500",
//                     fontSize: "12px",
//                     letterSpacing: "1px",
//                     textOverflow: "ellipsis",
//                     overflow: "hidden",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   Status: {contract.status}
//                 </Typography>

//                 <CardActions
//                   sx={{ justifyContent: "center", paddingBottom: "20px" }}
//                 >
//                   <Button
//                     onClick={() => handleContractClick(contract.id)}
//                     sx={{
//                       backgroundColor: "#A0D9EF",
//                       letterSpacing: "0.5px",
//                       color: "#fff",
//                       borderRadius: "20px",
//                       "&:hover": {
//                         backgroundColor: "#B0DAE5",
//                       },
//                       mt: "35px",
//                     }}
//                     variant="contained"
//                   >
//                     Details
//                   </Button>
//                 </CardActions>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ClientThirdFeature;

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ClientThirdFeature = ({ userId }) => {
  const [contracts, setContracts] = useState([]);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  userId = user ? user.id : null;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get(
          `ccobasi.pythonanywhere.com/contract/users/${userId}/contracts/`
        );
        setContracts(response.data);
      } catch (error) {
        console.error("Error fetching contracts: ", error);
        setError(error);
      }
    };

    if (userId) {
      fetchContracts();
    }
  }, [userId]);

  const handleContractClick = (id) => {
    navigate(`/contract/${id}`);
  };

  return (
    <Box
      sx={{
        padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" },
      }}
    >
      {error && (
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "10px",
            lineHeight: "24px",
            letterSpacing: "1px",
            mb: "90%",
          }}
        >
          Error loading contracts
        </Typography>
      )}
      <Typography 
        variant="h6" 
        component="h2" 
        sx={{ 
          mb: 2, 
          textAlign: 'center', 
          color: (theme) => theme.palette.primary.main 
        }}
      >
        Contract Overview
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "26px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflowX: "auto",
        }}
      >
        <Table aria-label="contracts table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: 'primary.main', pt: 6, pb: 4 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'primary.main', pt: 6, pb: 4, display: { xs: 'none', sm: 'table-cell' } }} align="right">Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'primary.main', pt: 6, pb: 4 }} align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow 
                key={contract.id}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#E0E0E0'
                  }
                }}
                onClick={() => handleContractClick(contract.id)}
              >
                <TableCell component="th" scope="row">
                  {contract.contract_name}
                </TableCell>
                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }} align="right">{contract.status}</TableCell>
                <TableCell align="right">
                  <Typography 
                    sx={{ 
                      color: '#34acf8 ',
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                  >
                    Details
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClientThirdFeature;


