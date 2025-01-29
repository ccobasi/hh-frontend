// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {  useTheme,
  useMediaQuery,} from "@mui/material";
import { Box, Container, Typography, CardContent, Stack, IconButton, Card, Input, Menu,
  MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FreelancerFirstFeature from "./FreelancerCard";
import { LineChartBoundaries } from "./LineChartBoundaries";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CustomPaginationActionsTable from "./CustomPaginationActions";
import { MakeApplicationStatus } from "./MakeApplicationStatus";
import AccountCircle from '@mui/icons-material/AccountCircle'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import { lighten } from '@mui/material/styles';
import Reviews from "./ReviewAndRatingPage";


ChartJS.register(ArcElement, Tooltip, Legend);

function FreelancerPage({ userId }) {
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  
  userId = user ? user.id : null;
  const jwt_access = localStorage.getItem("access");

  const [activeContracts, setActiveContracts] = useState(0);
 
  const [completedContracts, setCompletedContracts] = useState(0);

  const [pendingContracts, setPendingContracts] = useState(0);
 
  const [proposals, setProposals] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null); 
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const editLinkHref = "/edit-client";


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
    if (jwt_access === null && !user) {
      navigate("/sign-in");
    }

    const fetchStats = async () => {
      try {
        const proposalsResponse = await axios.get(
          `ccobasi.pythonanywhere.com/proposal/user/${userId}/count/`
        );
        setProposals(proposalsResponse.data.count || 0);

        const contractsResponse = await axios.get(
          `ccobasi.pythonanywhere.com/contract/user/${userId}/count/`
        );
        setActiveContracts(contractsResponse.data.active || 0);
        setCompletedContracts(contractsResponse.data.completed || 0);
        setPendingContracts(contractsResponse.data.pending || 0);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [userId]);

  // const data = {
  //   labels: [],
  //   datasets: [
  //     {
  //       data: [
  //         activeContracts,
  //         completedContracts,
  //         pendingContracts,
  //         proposals,
  //       ],
  //       backgroundColor: ["#95c8d8", "#00a79d", "#0146B1", "#87ceeb"],

  //       hoverBackgroundColor: ["#95c8d8", "#588bae", "#008081", "#4BC0C0"],
  //     },
      
  //   ],
  // };
  const data = {
    // labels: ['Active Contracts', 'Completed Contracts', 'Pending Contracts', 'Proposals'],
    datasets: [
      {
        data: [
          activeContracts,
          completedContracts,
          pendingContracts,
          proposals,
        ],
        backgroundColor: ["#ed5fb1", "#f9793a", "#fede3b", "#3fb0fe"],
        hoverBackgroundColor: ["#ed5fb1", "#f9793a", "#fede3b", "#44b4fe"], // Using the last color for hover effect of the last segment
      },
    ],
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

const cardData = [
  { label: "Active Contracts", value: activeContracts, color: "#ed5fb1" },
  { label: "Completed Contracts", value: completedContracts, color: "#f9793a" },
  { label: "Pending Contracts", value: pendingContracts, color: "#fede3b" },
  { label: "Proposals Submitted", value: proposals, color: "#3fb0fe" },
];

  // console.log(activeContracts);
  // console.log(completedContracts);
  // console.log(pendingContracts);
  // console.log(proposals);
  
  return (
    <>
    <Box     sx={{backgroundColor:"#edeffc"}}>
     <Box 
        sx={{
          position: 'fixed',
          top: 0,
          left: 55,
          right: 18,
          zIndex: 10000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: 'transparent',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)', // For Safari
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow to make it visible
        }}
      >
        <Typography variant="h6" component="div">
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Input type="text" placeholder="Search here" sx={{ marginRight: '10px', padding: '5px', color: '#8f8d9d' }} />
          <IconButton onClick={handleMenuOpen}>
            <AccountCircle sx={{ color: '#354665' }} /> 
          </IconButton>
          <IconButton>
            <NotificationsIcon sx={{ color: '#324667' }} /> 
          </IconButton>
        </Box>
        {/* Account Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => {
          navigate(editLinkHref);
          handleMenuClose();
        }}>Edit Profile</MenuItem>
        
        <MenuItem
          onClick={() => {
            localStorage.clear();
            navigate("/sign-in");
            handleMenuClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
      
  
     </Box>
     <Container component="main" sx={{pt:12}} maxWidth={isMobile ? "xs" : "lg"}>
      <Stack direction="row" style={{marginBottom:"0px"}}>
          <Typography
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
              fontSize: "16px",
              letterSpacing: "1px",
              pl:6
            }}
          >
            Welcome back, {user ? user.names : 'Guest'}!
          </Typography>

        </Stack>
        <Box>
              <Typography sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                fontSize: "16px",
                letterSpacing: "1px",
                mt: "15px",
                pl:8
              }}>
                Analytics
              </Typography>

<Stack 
              direction={isMobile ? "column" : "row"} 
              spacing={isMobile ? 3 : 2} 
              sx={{ 
                mt: 2,
                alignItems: 'center', // Center items for both orientations
              }}
            >
              {/* Doughnut Chart */}
              <Box sx={{ 
                width: { xs: '100%', sm: '50%' },
                mb: isMobile ? 3 : 0, // Add margin bottom for mobile to separate chart from card
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                 
              }}>
                <Doughnut 
                  data={data} 
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                  }}
                  height={200}
                  width={200}
                />
              </Box>

              {/* Card for details */}
              <Card sx={{ 
                width: { xs: '80%', sm: '50%' }, 
                minHeight: 200,
                backgroundColor: '#ffffff',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',

              }}>
                <CardContent>
                  <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                    {cardData.map((item, index) => (
                      <Box key={index} sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        p: 1, 
                        borderRadius: '8px', 
                        backgroundColor: lighten(item.color, 0.9) 
                      }}>
                        <Typography sx={{
                          color: item.color,
                          fontSize: "14px",
                          letterSpacing: "1px",
                          fontWeight: 'bold'
                        }}>
                          {item.label}:
                        </Typography>
                        <Typography sx={{
                          color: item.color,
                          fontSize: "14px",
                          letterSpacing: "1px",
                          fontWeight: 'bold'
                        }}>
                          ({item.value})
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Stack>

            <Box sx={{ mt: 5, pl: 8 }}>
                    <Typography 
                      sx={{
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? theme.palette.primary.lightModeHeroTitle
                            : theme.palette.primary.darkModeHeroTitle,
                        fontSize: "15px",
                        letterSpacing: "1px",
                        mb: "15px",
                        textAlign: "left",
                      }}
                    >
                      Application Status
                    </Typography>
                    <MakeApplicationStatus />
            </Box>
            <Box sx={{ mt: 5, pl: 8 }}>
            <Typography 
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                fontSize: "15px",
                letterSpacing: "1px",
                mb: "15px",
                textAlign: "left",
              }}
            >

            </Typography>
            <Reviews />
    </Box>
  </Box>
  </Container>
  </Box>
    </>
  );
}

export default FreelancerPage;















































