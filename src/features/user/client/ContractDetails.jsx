// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import
//   Button from "@mui/material/Button";
//   import
//     MenuItem from "@mui/material/MenuItem";
//     import
//       Select from "@mui/material/Select";
//       import
//         Typography from "@mui/material/Typography";
//         import
//           CircularProgress from "@mui/material/CircularProgress";
//           import
//             Box from "@mui/material/Box";
//             import
//               Container from "@mui/material/Container";

// import { toast } from "react-toastify";

// const ContractDetails = () => {
//   const { id } = useParams();
//   const [contract, setContract] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchContractDetails = async () => {
//       try {
//         const response = await axios.get(
//           `ccobasi.pythonanywhere.com/contract/contracts/${id}/`
//         );
//         if (response.status === 200) {
//           setContract(response.data);
//         } else {
//           setError("Failed to fetch contract details.");
//         }
//       } catch (error) {
//         console.error("Error fetching contract details:", error);
//         setError("Failed to fetch contract details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContractDetails();
//   }, [id]);

//   const handleContractStatusChange = async (status) => {
//     try {
//       const contractResponse = await axios.get(
//         `ccobasi.pythonanywhere.com/contract/contracts/${id}/`
//       );
//       const currentContractData = contractResponse.data;

//       const updatedData = {
//         ...currentContractData,
//         status: status,
//       };

//       const response = await axios.put(
//         `ccobasi.pythonanywhere.com/contract/contracts/${id}/`,
//         updatedData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setContract(response.data);
//     } catch (error) {
//       console.error("Failed to update contract status:", error);

//       if (error.response) {
//         console.log("Error response data:", error.response.data);
//       }
//       toast.error(
//         "Failed to update contract status. You are not authorized to update contract status!"
//       );
//     }
//   };

//   const handleReviewClick = () => {
//     navigate(`/contract/reviews/${id}`);
//   };

//   if (loading) {
//     return (
//       <Container component="main" maxWidth="md">
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//           }}
//         >
//           <CircularProgress />
//         </Box>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container component="main" maxWidth="md">
//         <Typography
//           variant="body2"
//           className="error"
//           style={{ marginBottom: "90%" }}
//         >
//           {error}
//         </Typography>
//       </Container>
//     );
//   }

//   return (
//     <>
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
//           //ml: '16%',
//         }}
//       >
//         Contract Details
//       </Typography>
//       <Container component="main" maxWidth="md">
//         <Box
//           sx={{
//             mt: 2,
//             mb: 24,
//             p: 2,
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             backgroundColor: "#34acf8",
//             fontFamily: "Poppins",
//             ml: { xs: "11%", sm: "9%", md: "7%", lg: "0%" },
//           }}
//         >
//           {contract && (
//             <>
//               <Typography
//                 variant="body2"
//                 sx={{
//                   fontWeight: "200",
//                   mb: 1,
//                   color: "#ffffff",
//                   fontSize:'11px',
//                   letterSpacing: "1px",
//                   textAlign: "start",
//                   mt: 1,

//                 }}
//               >
//                 Contract for {contract.project_title}
//               </Typography>
//               <Typography
//                  variant="body2"
//                  sx={{
//                    // color: (theme) =>
//                    //   theme.palette.mode === "light"
//                    //     ? theme.palette.primary.lightModeHeroTitle
//                    //     : theme.palette.primary.darkModeHeroTitle,
//                    color:'#000000',
//                    pb: "0px",
//                    pt: "1px",
//                    fontFamily: "Poppins",
//                    fontWeight: "200",
//                    fontSize: "10px",
//                    letterSpacing: "1px",
//                    mb: 1,
//                  }}
//               >
//                 Client : {contract.client_name}
//               </Typography>
//               <Typography
//                  variant="body2"
//                  sx={{
//                    // color: (theme) =>
//                    //   theme.palette.mode === "light"
//                    //     ? theme.palette.primary.lightModeHeroTitle
//                    //     : theme.palette.primary.darkModeHeroTitle,
//                    color:'#000000',
//                    pb: "0px",
//                    pt: "1px",
//                    fontFamily: "Poppins",
//                    fontWeight: "200",
//                    fontSize: "10px",
//                    letterSpacing: "1px",
//                    mb: 1,
//                  }}
//               >
//                 Freelancer : {contract.freelancer_name}
//               </Typography>
//               <Typography
//                            variant="body2"
//                            sx={{
//                              mb: 2,
//                              // color: (theme) =>
//                              //   theme.palette.mode === "light"
//                              //     ? theme.palette.primary.lightModeHeroTitle
//                              //     : theme.palette.primary.darkModeHeroTitle,
//                              color:'#000000',
//                              pb: "2px",
//                              pt: "3px",
//                              fontFamily: "Poppins",
//                              fontWeight: "200",
//                              fontSize: "11px",

//                              letterSpacing: "1px",
//                            }}
//               >
//                 Terms : {contract.terms}
//               </Typography>
//               <Typography
//                variant="body2"
//                sx={{
//                  mb: 1,
//                  color:'#000000',
//                  // color: (theme) =>
//                  //   theme.palette.mode === "light"
//                  //     ? theme.palette.primary.lightModeHeroTitle
//                  //     : theme.palette.primary.darkModeHeroTitle,
//                  pb: "2px",
//                  pt: "3px",
//                  fontFamily: "Poppins",
//                  fontWeight: "200",
//                  fontSize: "11px",
//                  whiteSpace: "nowrap",
//                  letterSpacing: "1px",
//                }}
//               >
//                 Contract Amount : {contract.contract_amount}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 sx={{
//                   mb: 1,
//                   color:'#000000',
//                   // color: (theme) =>
//                   //   theme.palette.mode === "light"
//                   //     ? theme.palette.primary.lightModeHeroTitle
//                   //     : theme.palette.primary.darkModeHeroTitle,
//                   pb: "2px",
//                   pt: "3px",
//                   fontFamily: "Poppins",
//                   fontWeight: "200",
//                   fontSize: "11px",
//                   whiteSpace: "nowrap",
//                   letterSpacing: "1px",
//                 }}
//               >
//                 Start Date : {contract.start_date}
//               </Typography>
//               <Typography
//                  variant="body2"
//                  sx={{
//                    mb: 1,
//                    color:'#000000',
//                    // color: (theme) =>
//                    //   theme.palette.mode === "light"
//                    //     ? theme.palette.primary.lightModeHeroTitle
//                    //     : theme.palette.primary.darkModeHeroTitle,
//                    pb: "2px",
//                    pt: "3px",
//                    fontFamily: "Poppins",
//                    fontWeight: "200",
//                    fontSize: "11px",
//                    whiteSpace: "nowrap",
//                    letterSpacing: "1px",
//                  }}
//               >
//                 End Date : {contract.end_date}
//               </Typography>
//               <Typography
//                  variant="body2"
//                  sx={{
//                    mb: 1,
//                    color:'#000000',
//                    // color: (theme) =>
//                    //   theme.palette.mode === "light"
//                    //     ? theme.palette.primary.lightModeHeroTitle
//                    //     : theme.palette.primary.darkModeHeroTitle,
//                    pb: "2px",
//                    pt: "3px",
//                    fontFamily: "Poppins",
//                    fontWeight: "200",
//                    fontSize: "11px",
//                    whiteSpace: "nowrap",
//                    letterSpacing: "1px",
//                  }}
//               >
//                 Status : {contract.status}
//               </Typography>
//               <Select
//                 value={contract.status}
//                 onChange={(e) => handleContractStatusChange(e.target.value)}
//                 sx={{
//                   mt: 1,
//                   fontFamily: "Poppins",
//                   fontSize: "9px",
//                   letterSpacing: "1px",
//                   bgcolor: "#ded0e3",
//                   width: "110px",
//                 }}
//               >
//                 <MenuItem
//                   value="pending"
//                   sx={{
//                     mt: 1,
//                     fontFamily: "Poppins",
//                     fontSize: "9px",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   Pending
//                 </MenuItem>
//                 <MenuItem
//                   value="active"
//                   sx={{
//                     mt: 1,
//                     fontFamily: "Poppins",
//                     fontSize: "9px",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   Active
//                 </MenuItem>
//                 <MenuItem
//                   value="completed"
//                   sx={{
//                     mt: 1,
//                     fontFamily: "Poppins",
//                     fontSize: "9px",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   Completed
//                 </MenuItem>
//               </Select>
//               {contract.status === "completed" && (
//                 <Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleReviewClick}
//                     sx={{
//                       mt: 3,
//                       backgroundColor: "#ded0e3",
//                       "&:hover": {
//                         backgroundColor: (theme) =>
//                           theme.palette.mode === "light"
//                             ? theme.palette.grey[400]
//                             : theme.palette.grey[500],
//                         color: (theme) =>
//                           theme.palette.mode === "light"
//                             ? theme.palette.primary.lightModeHeroTitle
//                             : theme.palette.primary.darkModeHeroTitle,
//                       },
//                       fontFamily: "Poppins",
//                       fontWeight: "500",
//                       fontSize: "10px",
//                       lineHeight: "24px",
//                       letterSpacing: "-1%",
//                     }}
//                   >
//                     Leave a Review
//                   </Button>
//                 </Typography>
//               )}
//             </>
//           )}
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default ContractDetails;
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { toast } from "react-toastify";

const ContractDetails = () => {
  const { id } = useParams();
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  axios.interceptors.request.use(
    (config) => {
      const access = JSON.parse(localStorage.getItem("access"));
      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  useEffect(() => {
    const fetchContractDetails = async () => {
      try {
        const response = await axios.get(
          `ccobasi.pythonanywhere.com/contract/contracts/${id}/`
        );
        if (response.status === 200) {
          setContract(response.data);
        } else {
          setError("Failed to fetch contract details.");
        }
      } catch (error) {
        console.error("Error fetching contract details:", error);
        setError("Failed to fetch contract details.");
      } finally {
        setLoading(false);
      }
    };

    fetchContractDetails();
  }, [id]);

  const handleContractStatusChange = async (status) => {
    try {
      const contractResponse = await axios.get(
        `ccobasi.pythonanywhere.com/contract/contracts/${id}/`
      );
      const currentContractData = contractResponse.data;

      const updatedData = {
        ...currentContractData,
        status: status,
      };

      const response = await axios.put(
        `ccobasi.pythonanywhere.com/contract/contracts/${id}/`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setContract(response.data);
    } catch (error) {
      console.error("Failed to update contract status:", error);
      toast.error(
        "Failed to update contract status. You are not authorized to update contract status!"
      );
    }
  };

  const handleReviewClick = () => {
    navigate(`/contract/reviews/${id}`);
  };

  if (loading) {
    return (
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container component="main" maxWidth="md">
        <Typography
          variant="body2"
          className="error"
          style={{ marginBottom: "90%" }}
        >
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Box sx={{ backgroundColor: "#edeffc", padding: "20px"}}>
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
        Contract Details
      </Typography>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            mt: 2,
            mb: 24,
            p: 2,
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "white",
            fontFamily: "Poppins",
            ml: { xs: "15%", sm: "0%" },
            width: { xs: "85%", sm: "100%" },
          }}
        >
          {contract && (
            <>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "200",
                  mb: 1,
                  color: "#000",
                  fontSize: "11px",
                  letterSpacing: "1px",
                }}
              >
                Contract for {contract.project_title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#000",
                  fontWeight: "200",
                  fontSize: "10px",
                  letterSpacing: "1px",
                  mb: 1,
                }}
              >
                Client: {contract.client_name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#000",
                  fontWeight: "200",
                  fontSize: "10px",
                  letterSpacing: "1px",
                  mb: 1,
                }}
              >
                Freelancer: {contract.freelancer_name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#000",
                  fontWeight: "200",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  mb: 2,
                }}
              >
                Terms: {contract.terms}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#000",
                  fontWeight: "200",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  mb: 1,
                }}
              >
                Contract Amount: {contract.contract_amount}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#000",
                  fontWeight: "200",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  mb: 1,
                }}
              >
                Start Date: {contract.start_date}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#000",
                  fontWeight: "200",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  mb: 1,
                }}
              >
                End Date: {contract.end_date}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#000",
                  fontWeight: "200",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  mb: 1,
                }}
              >
                Status: {contract.status}
              </Typography>
              <Select
                value={contract.status}
                onChange={(e) => handleContractStatusChange(e.target.value)}
                sx={{
                  mt: 1,
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  bgcolor: "#34acf8",
                  color: "#fff",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <MenuItem
                  value="pending"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "9px",
                    letterSpacing: "1px",
                  }}
                >
                  Pending
                </MenuItem>
                <MenuItem
                  value="active"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "9px",
                    letterSpacing: "1px",
                  }}
                >
                  Active
                </MenuItem>
                <MenuItem
                  value="completed"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "9px",
                    letterSpacing: "1px",
                  }}
                >
                  Completed
                </MenuItem>
              </Select>
              {contract.status === "completed" && (
                <Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      backgroundColor: "#34acf8",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#72B1D7",
                      },
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      fontSize: "11px",
                      lineHeight: "24px",
                      letterSpacing: "-1%",
                    }}
                    onClick={handleReviewClick}
                  >
                    Leave a Review
                  </Button>
                </Typography>
              )}
            </>
          )}
        </Box>
      </Container>
      </Box>
    </>
  );
};

export default ContractDetails;
