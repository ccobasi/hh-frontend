// eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FreelancerAnalyticsContainer from "./FreelancerAnalytics";
// import { Grid, CircularProgress, Box, Typography } from "@mui/material";

// export default function FreelancerSecondFeature() {
//   const [analyticsData, setAnalyticsData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user ? user.id : null;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const proposalsResponse = await axios.get(`ccobasi.pythonanywhere.com/proposal/user/${userId}/count/`);
//         const contractsResponse = await axios.get(`ccobasi.pythonanywhere.com/contract/user/${userId}/count/`);

//         setAnalyticsData({
//           proposals: proposalsResponse.data.count,
//           contractsCompleted: contractsResponse.data.completed,
//           contractsActive: contractsResponse.data.active,
//           contractsPending: contractsResponse.data.pending,
//         });

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching analytics data: ", error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchData();
//     }
//   }, [userId]);

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return <Typography color="error">Error loading analytics data</Typography>;
//   }

//   return (
//     <Grid container spacing={4} sx={{ margin: 'auto', maxWidth: '100%' }}>
//       <Grid item xs={12} sm={6}>
//         <FreelancerAnalyticsContainer
//           title="Proposals Submitted"
//           count={analyticsData.proposals}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <FreelancerAnalyticsContainer
//           title="Contracts Completed"
//           count={analyticsData.contractsCompleted}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <FreelancerAnalyticsContainer
//           title="Contracts Active"
//           count={analyticsData.contractsActive}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <FreelancerAnalyticsContainer
//           title="Contracts Pending"
//           count={analyticsData.contractsPending}
//         />
//       </Grid>
//     </Grid>
//   );
// }
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import FreelancerAnalyticsContainer from "./FreelancerAnalyticsContainer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { PieChart } from "@mui/x-charts/PieChart";

export default function FreelancerAnalytics() {
  const [analyticsData, setAnalyticsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proposalsResponse = await axios.get(
          `ccobasi.pythonanywhere.com/proposal/user/${userId}/count/`
        );
        const contractsResponse = await axios.get(
          `ccobasi.pythonanywhere.com/contract/user/${userId}/count/`
        );

        setAnalyticsData({
          proposals: proposalsResponse.data.count,
          contractsCompleted: contractsResponse.data.completed,
          contractsActive: contractsResponse.data.active,
          contractsPending: contractsResponse.data.pending,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics data: ", error);
        setError(error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  if (loading) {
    return (
      <>
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
      </>
    );
  }

  if (error) {
    return (
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
        Error loading analytics data
      </Typography>
    );
  }

  const proposals = analyticsData.proposals;
  const pending = analyticsData.contractsPending;
  const completed = analyticsData.contractsCompleted;
  const activeContract = analyticsData.contractsActive;
  const chartData = [
    {
      label: "Proposal",
      value: proposals,
      color: "orange",
    },
    {
      label: "Active Contract",
      value: activeContract,
      color: "red",
    },
    {
      label: "Pending Contract",
      value: pending,
      color: "#000000",
    },
    {
      label: "Completed Contract",
      value: completed,
      color: "green",
    },
  ];

  function TwoLevelPieChart() {
    return (
      <Typography sx={{ margin: "27%", mt: "7%", mb: "5%" }}>
        <PieChart
          series={[
            {
              innerRadius: 70,
              outerRadius: 130,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: 0,
              endAngle: 360,
              cx: 150,
              cy: 150,

              // arcLabel: (item) => `${item.value}%`,
              // arcLabelMinAngle: 35,
              // arcLabelRadius: '60%',

              data: chartData,
            },
          ]}
          width={400}
          height={300}
          // legend={{ hidden: true }}
        />
      </Typography>
    );
  }

  function BasicPie() {
    return (
      <PieChart
        series={[
          {
            data: chartData,
            // [
            //   { id: 0, value: 10, label: 'series A' },
            //   { id: 1, value: 15, label: 'series B' },
            //   { id: 2, value: 20, label: 'series C' },
            // ]
          },
        ]}
        width={400}
        height={200}
      />
    );
  }

  return (
    <>
      <TwoLevelPieChart />
    </>
  );
}
