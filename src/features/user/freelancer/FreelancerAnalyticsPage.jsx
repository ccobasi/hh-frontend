// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Typography, Box, Container, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function FreelancerAnalyticsPage({ userId }) {
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

  const data = {
    labels: [],
    datasets: [
      {
        data: [
          activeContracts,
          completedContracts,
          pendingContracts,
          proposals,
        ],
        // Updated color scheme
        backgroundColor: ["#ed5fb1", "#f9793a", "#fede3b", "#3fb0fe"],
        hoverBackgroundColor: ["#ed5fb1", "#f9793a", "#fede3b", "#3fb0fe"],
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

  return (
    <>
      <Box sx={{backgroundColor:"#edeffc"}}>
        <Container component="main" maxWidth="lg">
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
            Proposal and Contract Overview
          </Typography>

          <Box sx={{ mt: 5 }}>
            {/* Grid layout to align chart and status cards side by side */}
            <Grid container spacing={4} justifyContent="center">
              {/* Chart on the left side */}
              <Grid item xs={12} md={6}>
                <Box sx={{ width: "100%", height: 400, maxWidth: 600, pl: 6 }}>
                  <Doughnut data={data} />
                </Box>
              </Grid>

              {/* Status cards on the right side */}
              <Grid item xs={12} lg={6}>
                <Grid container spacing={3} sx={{ ml: "4%", mt: "9%" }}>
                  {cardData.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Paper
                        elevation={3}
                        sx={{
                          backgroundColor: item.color,
                          padding: 2,
                          borderRadius: 2,
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            fontSize: "10px",
                            lineHeight: "20.8px",
                            letterSpacing: "1px",
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          {item.label}
                        </Typography>
                        <Typography
                          variant="h2"
                          sx={{
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            fontSize: "12px",
                            lineHeight: "20.8px",
                            letterSpacing: "1px",
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default FreelancerAnalyticsPage;