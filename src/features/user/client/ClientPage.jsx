
// // eslint-disable-next-line no-unused-vars
// import React,{ useEffect, useState }  from 'react';
// import { Box, Container, Link, Typography, Grid, Button ,Stack} from "@mui/material";
// import {  useTheme,useMediaQuery,} from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";  
// import ProjectsGrid from './ProjectsGrid';  
// import { ClientFirstFeature } from "./Client";
// import { LineChartBoundaries } from '../freelancer/LineChartBoundaries';
// import CustomPaginationActionsTable from './CustomPaginationActions';
// import { MakeApplicationStatus } from '../freelancer/MakeApplicationStatus';
// import ProjectStatus from './ProjectStatus';
// import ComplexStatisticsCard from "../../../examples/Cards/StatisticsCards/ComplexStatisticsCard";
// import MDBox from "../../../components/MDBox";
// ChartJS.register(ArcElement, Tooltip, Legend);


// const ClientPage = ({ userId }) => {

// //Using Map on a subarray in an array of Objects
// const courses = [
//   {
//   title: "Half stack app development",
//   parts:[
//   {
//   name:"Fundamentals of React",
//   exercises: 10,
//   id: 1,
//   },
//   {
//   name:"Using props to pass data",
//   exercises: 7,
//   id: 2,
//   },
//   {
//   name:"State of a component",
//   exercises: 14,
//   id: 3,
//   },
//   ]
//   }
//   ];
  
  
  
//   //I will be using the following books array of objects to explain how
//   //I solved this problem.  We want to return only the categories of the 
//   //books on the shelves.
  
  
//   const books = [
//   {
//   title: "Books by Nigerian authors",
//   shelves:[
//   {
//   id: 1,
//   category: "Fiction",
//   title: "Things fall Apart",
//   author: "Chinua Achebe",
//   },
  
//   {
//   id: 2,
//   category: "Drama",
//   title: "Under the Udala trees",
//   author: "Chinelo Okparanta",
//   },
//   ]
//   }
//   ];

//   //Step 1  call the map method on the
//   // outermost books array which contains our objects.

// books.map((book)=> book.shelves);

// // The map method takes a callback function(a function within a function) and 
// //accepts a parameter to use in iterating through the array. We pass the callback function the book paramater and use that parameter to get to the shelves object which contains the array we are looking for.

// //Since the shelves object is an array as well, we can run the map function on it too, like below.
// books.map((book)=> book.shelves.map((shelf)=> shelf.category));

// //The result of this expression will be another array. We pass this array to the variable displayCategories.

// const displayCategories = books.map((book)=> book.shelves.map((shelf)=> shelf.category));
// console.log(displayCategories)


//   const [projects, setProjects] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));
//   userId = user ? user.id : null;

//   console.log(user);


//   //const closingDate = projects.map((proj)=> proj.projects.map((pro)=> pro.closing_date));

//   const projectKeys = Object.keys(projects);
//   console.log(projectKeys)
//   const projectValues = Object.values(projects);
//   console.log(projectValues)
  
  

//   const access = JSON.parse(localStorage.getItem("access"));
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProjectData = async () => {
//       try {
//         const response = await axios.get(
//           `ccobasi.pythonanywhere.com/project/user/${user.id}/projects/`,
//           {
//             headers: {
//               Authorization: `Bearer ${access}`,
//             },
//           }
//         );

//         if (response.status === 200 && response.data.length > 0) {
//           const lastFiveProjects = response.data.slice(-5);
//           setProjects(lastFiveProjects);
//         }
//       } catch (error) {
//         console.error("Failed to fetch projects", error);
//       }
//     };

//     fetchProjectData();
//   }, [user.id, access]);

//   const handleProjectClick = (projectId) => {
//     navigate(`/project-details/${projectId}`);
//   };


  
 

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


 
 

  


//   return (
//     <Container component="main" maxWidth={isMobile ? "xs" : "lg"} sx={{backgroundColor:"#f1f2f6"}}>
//     <Box sx={{flexGrow: 1, width:"auto", ml:{xs:"15%"}, backgroundColor:"#f1f2f6"}}>
//      {/* Grid with 2 unequal columns */}
//      <Grid container spacing={3}>
//       {/* Col 1  */}
//       <Grid item xs={9}>
        
//         <Box sx={{flexGrow: 1, fontFamily:"Poppins"}}>
//           {/* Inner grid with 2 columns for xs, sm and 1 col for md  */}
//           <Grid container>
//             {/* Col 1 */}
//             <Grid item xs={12} sm={12} md={6}>
//             <Typography sx={{
//             color: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.primary.lightModeHeroTitle
//                 : theme.palette.primary.darkModeHeroTitle,
//             fontSize:"16px",
//             letterSpacing:"2px",
//             mb:"15px"
                
//           }}>Dashboard</Typography>
// {/* <Stack direction="row" style={{marginBottom:"10px"}}
 
//  >
//  <Typography
//  sx={{
//    color: (theme) =>
//      theme.palette.mode === "light"
//        ? theme.palette.primary.lightModeHeroTitle
//        : theme.palette.primary.darkModeHeroTitle,
//    fontSize:"16px",
//    letterSpacing:"1px"
       
//  }}>Welcome back, {user.names}!</Typography>
//  <img src="./frontend/dist/assets/transparent-waving-hand34x34.png" style={{height:"34px", width:"34px", padding:"6px", paddingBottom:"9px", paddingTop:"5px", marginTop:"-5px"}}/>
//  </Stack>
//  <Typography  sx={{
//    color: (theme) =>
//      theme.palette.mode === "light"
//        ? theme.palette.primary.lightModeHeroTitle
//        : theme.palette.primary.darkModeHeroTitle,
//    fontSize:"16px",
//    letterSpacing:"1px",
//    mt:"15px"
       
//  }}>
  
//  </Typography> */}


// </Grid>
           
// {/* <Grid item xs={12} sm={12} md={6}>
//  <Stack direction="column" 
// >
//   <Typography  sx={{
//     color: (theme) =>
//       theme.palette.mode === "light"
//         ? theme.palette.primary.lightModeHeroTitle
//         : theme.palette.primary.darkModeHeroTitle,
//     fontSize:"16px",
//     letterSpacing:"1px",
   
        
//   }}>Project</Typography>
//   <Typography  sx={{
//     color: (theme) =>
//       theme.palette.mode === "light"
//         ? theme.palette.primary.lightModeHeroTitle
//         : theme.palette.primary.darkModeHeroTitle,
//     fontSize:"16px",
//     letterSpacing:"1px"
        
//   }}>reports</Typography>
// </Stack>

// <Box 
//   >
// <LineChartBoundaries   />
// </Box>

// </Grid> */}
         

//           </Grid>

//         </Box>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 color="dark"
//                 icon="weekend"
//                 title="Bookings"
//                 count={281}
//                 percentage={{
//                   color: "success",
//                   amount: "+55%",
//                   label: "than lask week",
//                 }}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 icon="leaderboard"
//                 title="Today's Users"
//                 count="2,300"
//                 percentage={{
//                   color: "success",
//                   amount: "+3%",
//                   label: "than last month",
//                 }}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 color="success"
//                 icon="store"
//                 title="Revenue"
//                 count="34k"
//                 percentage={{
//                   color: "success",
//                   amount: "+1%",
//                   label: "than yesterday",
//                 }}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 color="primary"
//                 icon="person_add"
//                 title="Followers"
//                 count="+91"
//                 percentage={{
//                   color: "success",
//                   amount: "",
//                   label: "Just updated",
//                 }}
//               />
//             </MDBox>
//           </Grid>
//         </Grid>

//         <Box sx={{backgroundColor: "background.default",width:{xs:"100%", },
//  alignContent:"center", mt:"40px" }}>
      
// <Stack direction="column">


//  <CustomPaginationActionsTable name="client"/>

  
// </Stack>
//         </Box>

//       </Grid>
//       {/* End col 1 */}
//       {/* Col 2 */}
//       <Grid item xs={12} md={2} sx={{ display: { xs: "block", md: "flex" }, mt: { xs: 3, md: 0 } }}>
//       <Box sx={{backgroundColor: "background.default",
  
  
// }}>
     
//       {/* <Box sx={{ display: { xs: "none", md: "block" } }} >
//         <ClientFirstFeature/>
//       </Box> */}
      
    
// {/* <Typography 
// sx={{
//   color: (theme) =>
//     theme.palette.mode === "light"
//       ? theme.palette.primary.lightModeHeroTitle
//       : theme.palette.primary.darkModeHeroTitle,
//   fontSize:"15px",
//   letterSpacing:"1px",
//   mb:"15px",
// textAlign:"start",
// mt:"25px"
      
// }}>
//   Project status
// </Typography>
// <ProjectStatus /> */}
  
   
//     {/*  */}
//       </Box>

//       </Grid>
//       {/* End col 2 */}
//      </Grid>
//     </Box >
//     </Container>
//   );
// };

// export default ClientPage;
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { 
Box, Container, Typography, Grid, Stack, IconButton, Card, Input, Menu,
  MenuItem } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomPaginationActionsTable from "./CustomPaginationActions";
import DashboardCard from "./DashboardCard";
import DashboardAnalysis from "./DashAnalysis";
import { BarChart, LineChart } from '@mui/x-charts';
import SettingsIcon from '@mui/icons-material/Settings';
import VerticalStepper from './VerticalStepper';
import ClientThirdFeature from "./ClientThirdFeature";
import AccountCircle from '@mui/icons-material/AccountCircle'; 
import NotificationsIcon from '@mui/icons-material/Notifications'; 


const ClientPage = ({ userId }) => {
  const [anchorEl, setAnchorEl] = useState(null); 
  const isMenuOpen = Boolean(anchorEl);
  const [projects, setProjects] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  userId = user ? user.id : null;
  const [contracts, setContracts] = useState([]);
  const [contractStatusData, setContractStatusData] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const access = JSON.parse(localStorage.getItem("access"));
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const editLinkHref = "/edit-client";

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const searchedProjects = projects.filter(project => 
      project.name.toLowerCase().includes(query) || 
      project.description.toLowerCase().includes(query)
    );
    setFilteredProjects(searchedProjects);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectResponse = await axios.get(
          `ccobasi.pythonanywhere.com/project/user/${userId}/projects/`,
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        );

        const contractResponse = await axios.get(
          `ccobasi.pythonanywhere.com/contract/users/${userId}/contracts/`,
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        );

        if (projectResponse.status === 200) {
          setProjects(projectResponse.data.slice(-4)); // Fetch last 4 projects
        }

        if (contractResponse.status === 200) {
          setContracts(contractResponse.data);
          // Process contract status for chart data
          const statusData = processContractStatus(contractResponse.data);
          setContractStatusData(statusData);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
        // Optionally, you might want to set an error state to show users something went wrong
      }
    };

    if (userId && access) {
      fetchData();
    } else {
      console.error("User ID or access token not available.");
    }
  }, [userId, access]);

  useEffect(() => {
    // Reset filtered projects when new projects are fetched or search is cleared
    setFilteredProjects(projects);
  }, [projects]);

  const processContractStatus = (contracts) => {
    const statusCount = {};
    const dates = [];

    contracts.forEach(contract => {
      const date = new Date(contract.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      if (!dates.includes(date)) dates.push(date);

      if (!statusCount[date]) {
        statusCount[date] = {};
      }

      if (!statusCount[date][contract.status]) {
        statusCount[date][contract.status] = 0;
      }
      statusCount[date][contract.status]++;
    });

    // Calculate total count for each status
    const totalCounts = {
      'pending': 0,
      'active': 0,
      'completed': 0
    };
    contracts.forEach(contract => {
      totalCounts[contract.status] = (totalCounts[contract.status] || 0) + 1;
    });

    // Convert to series data for the chart
    const series = {
      'pending': [],
      'active': [],
      'completed': []
    };

    dates.forEach(date => {
      series['pending'].push(statusCount[date]?.['pending'] || 0);
      series['active'].push(statusCount[date]?.['active'] || 0);
      series['completed'].push(statusCount[date]?.['completed'] || 0);
    });

    return { 
      pending: { series: [{ name: 'Pending', data: series['pending'] }], categories: dates, count: totalCounts['pending'] },
      active: { series: [{ name: 'Active', data: series['active'] }], categories: dates, count: totalCounts['active'] },
      completed: { series: [{ name: 'Completed', data: series['completed'] }], categories: dates, count: totalCounts['completed'] }
    };
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
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
          <Input type="text" placeholder="Search here" sx={{ marginRight: '10px', padding: '5px', color: '#8f8d9d' }} value={searchQuery}
            onChange={handleSearch} />
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

    <Container component="main" maxWidth={isMobile ? "xs" : "lg"} sx={{ backgroundColor: "#edeffc", padding: "20px", ml: "50px" }}>
      <Box sx={{ flexGrow: 1, fontFamily: "Poppins" }}>

        <Grid container spacing={3} sx={{ ml: "10px", mt: "85px" }}>
          <DashboardCard projects={projects} />
          
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "background.default",
                width: "100%",
                mt: "40px",
              }}
            >
           
            </Box>
          </Grid>
        </Grid>

      </Box>
      <Box sx={{ padding: 3 }}>
      <Grid container spacing={{ xs: 6, sm: 3 }}>
        <Grid item xs={12} sm={4}>

             <DashboardAnalysis 
                title="Pending Contracts" 
                subtitle={`Total: ${contractStatusData.pending?.count || 0}`} 
                lastUpdated="Updated recently"
                bgColor="linear-gradient(to bottom right, #43e97b 0%, #38f9d7 100%)"
              >
                <LineChart
                  series={contractStatusData.pending?.series || []}
                  xAxis={[{ scaleType: 'point', data: contractStatusData.pending?.categories || [] }]}
                  yAxis={[{ label: 'Number of Contracts' }]}
                  height={170}
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  sx={{ 
                    backgroundColor: "#3992ec", 
                    borderRadius: '12px 12px', 
                    '& text': { fill: '#fff' },
                  }}
                />
              </DashboardAnalysis>
        </Grid>
        <Grid item xs={12} sm={4}>

           <DashboardAnalysis 
                title="Active Contracts" 
                subtitle={`Total: ${contractStatusData.active?.count || 0}`} 
                lastUpdated="Updated recently"
                bgColor="linear-gradient(to bottom right, #4caf50 0%, #43a047 100%)"  // Green gradient for active
              >
                <LineChart
                  series={contractStatusData.active?.series || []}
                  xAxis={[{ scaleType: 'point', data: contractStatusData.active?.categories || [] }]}
                  yAxis={[{ label: 'Number of Contracts' }]}
                  height={170}
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  sx={{ 
                    backgroundColor: "#5db561", 
                    borderRadius: '12px 12px'
                  }}
                />
              </DashboardAnalysis>
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardAnalysis 
                title="Completed Contracts" 
                subtitle={`Total: ${contractStatusData.completed?.count || 0}`} 
                lastUpdated="Updated recently"
                bgColor="linear-gradient(to bottom right, #2196f3 0%, #1976d2 100%)"  // Blue gradient for completed
              >
                <LineChart
                  series={contractStatusData.completed?.series || []}
                  xAxis={[{ scaleType: 'point', data: contractStatusData.completed?.categories || [] }]}
                  yAxis={[{ label: 'Number of Contracts' }]}
                  height={170}
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  sx={{ 
                    backgroundColor: "#bcd2d0", 
                    borderRadius: '12px 12px'
                  }}
                />
              </DashboardAnalysis>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={7.9}>
              <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
                 <ClientThirdFeature/>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3.9}>
              <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, height: '100%' }}>
                <VerticalStepper />
              </Card>
            </Grid>
          </Grid>
    </Box>
    </Container>
   </>
  );
};

export default ClientPage;
