// import { Grid, Card ,CardContent, Typography, Stack,Box} from "@mui/material";
// import Search from "@mui/icons-material/Search";
// import { useState, useEffect } from "react";
// import applicationStatusJsonData from './applicationStatusData.json'
// import axios from 'axios';


// // const applicationStatusData = [
// //   {
// //       id:0,
// //       status: "Applied",
// //       date:"Applied on Jan 22",
// //       jobTitle:"Chinese Translator",
// //       rank:"",
// //       company:"Tech Troopsy",
// //       location:"Jurong East, Singapore",
// //       requirement:["Remote", "Contract"]
// //   },
// //   {
// //       id:1,
// //       status:"Not selected by employer",
// //       date:"Applied on Jan 09",
// //       jobTitle:"Frontend Developer",
// //       rank:"Junior Position",
// //       company:"PT Niriaba Digital Indonesia",
// //       location:"Kemang, South Jakarta",
// //       requirement:["1-3 years exp", "Freelance"]
// //   },
// //   {
// //       id:2,
// //       status:"Interview",
// //       date:"Applied on Dec 29",
// //       jobTitle:"Website Developer",
// //       rank:"",
// //       company:"Vergonis Studio",
// //       location:"Sydney, Australia",
// //       requirement:["3 months contract"]
// //   }, {
// //       id:3,
// //       status:"Interview",
// //       date:"Applied on Dec 20",
// //       jobTitle:"UI/UX Designer",
// //       rank:"Senior",
// //       company:"Ministry of Banking Department",
// //       location:"jakarta",
// //       requirement:["Freelance","Contract"]
// //   },
// // ];

// export const MakeApplicationStatus = () => {
//   // State for holding proposal data
//   const [appStatusData, setAppStatusData] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));

//   // Fetch recent proposals on component mount
//   useEffect(() => {
//     const fetchRecentProposals = async () => {
//       try {
//         const accessToken = localStorage.getItem("access");
//         if (!accessToken) {
//           throw new Error("No access token found");
//         }

//         const response = await axios.get('http://localhost:8000/proposal/freelancer/recent-proposals/', {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         console.log(response);
        
//         setAppStatusData(response.data);  
//       } catch (error) {
//         console.error('Error fetching recent proposals:', error);
//       }
//     };

//     fetchRecentProposals();
//   }, []);

//   const ApplicationStatusCard = ({ id, project_title, proposed_rate, estimated_days, submitted_at, status }) => (
//     <Box sx={{ flexGrow: 1 }}>
//       <Card
//         key={id}
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           backgroundColor: 'background.default',
//           color: (theme) =>
//             theme.palette.mode === 'light'
//               ? theme.palette.primary.lightModeHeroTitle
//               : theme.palette.primary.darkModeHeroTitle,
//           height: { sm: 'auto', xs: 'auto', md: 'auto' },
//           width: 'auto',
//           mb: '10%',
//           borderRadius: '26px',
//         }}
//       >
//         <CardContent>
//           <Stack direction="row">
//             <Typography sx={{ textAlign: 'start', mt: '10px', fontFamily: 'Poppins', fontSize: '12px', letterSpacing: '1px', color: '#03A862'
//  }}>
//               {project_title} {/* Assuming 'title' is a field in your Project model */}
//             </Typography>
          
//           </Stack>
//           <Stack direction="row" justifyContent="space-evenly" sx={{ display: 'flex', p: '2px' }}>
//             <Typography variant="body2" sx={{ color: '#000000', fontFamily: 'Poppins', fontWeight: '400', fontSize: '10px', letterSpacing: '1px', textAlign: 'center', backgroundColor:'#E4EEFC', borderRadius: '10px', p: '2px', mr: '3%' }}>

//               {status}
//             </Typography>

//             <Typography variant="body2" sx={{ color: '#000000', fontFamily: 'Poppins', fontWeight: '400', fontSize: '10px', letterSpacing: '1px', textAlign: 'center', backgroundColor: '#E4EEFC', borderRadius: '10px', p: '2px' }}>
//               {new Date(submitted_at).toLocaleDateString()} {/* Format the date */}
//             </Typography>
//           </Stack>
//           <Stack direction="row" justifyContent="space-evenly" sx={{ display: 'flex', p: '5px' }}>
//             <Typography sx={{ textAlign: 'start', mt: '10px', fontFamily: 'Poppins', fontSize: '10px', letterSpacing: '1px' }}>
//               Rate: {proposed_rate} {/* Display the proposed rate */}
//             </Typography>
//             <Typography sx={{ mt: '10px', fontSize: '10px', letterSpacing: '1px' }}>
//               Estimated Days: {estimated_days} {/* Display estimated days */}
//             </Typography>
//           </Stack>
//         </CardContent>
//       </Card>
//     </Box>
//   );

//   return (
//     <Grid container>
//       {appStatusData.map((item) => (
//         <ApplicationStatusCard key={item.id} {...item} />
//       ))}
//     </Grid>
//   );
// };

import { Grid, Card, CardContent, Typography, Stack, Box, IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import axios from 'axios';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const MakeApplicationStatus = () => {
  const [appStatusData, setAppStatusData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchRecentProposals = async () => {
      try {
        const accessToken = localStorage.getItem("access");
        if (!accessToken) {
          throw new Error("No access token found");
        }

        const response = await axios.get('http://localhost:8000/proposal/freelancer/recent-proposals/', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        console.log(response);
        
        setAppStatusData(response.data);  
      } catch (error) {
        console.error('Error fetching recent proposals:', error);
      }
    };

    fetchRecentProposals();
  }, []);

  const ApplicationStatusCard = ({ id, project_title, proposed_rate, estimated_days, submitted_at, status }) => (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          color: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,
          height: 'auto',
          width: '100%',
          borderRadius: '16px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          p: 2,
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Stack direction="column" spacing={1}>
            <Typography sx={{ 
              textAlign: 'start', 
              fontFamily: 'Poppins', 
              fontSize: '14px', 
              fontWeight: 'bold', 
              letterSpacing: '1px', 
              color: '#333333' 
            }}>
              {project_title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#E4EEFC', 
                borderRadius: '12px', 
                p: '4px 8px' 
              }}>
                <Typography variant="caption" sx={{ 
                  color: '#000000', 
                  fontFamily: 'Poppins', 
                  fontWeight: '500', 
                  fontSize: '12px', 
                  letterSpacing: '1px',
                  mr: 1 
                }}>
                  {status}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarTodayIcon sx={{ fontSize: '16px', color: '#555555', mr: 0.5 }} />
                <Typography variant="caption" sx={{ 
                  color: '#555555', 
                  fontFamily: 'Poppins', 
                  fontSize: '12px', 
                  letterSpacing: '1px' 
                }}>
                  {new Date(submitted_at).toLocaleDateString()}
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AttachMoneyIcon sx={{ fontSize: '16px', color: '#555555', mr: 0.5 }} />
                <Typography variant="caption" sx={{ 
                  color: '#555555', 
                  fontFamily: 'Poppins', 
                  fontSize: '12px', 
                  letterSpacing: '1px' 
                }}>
                  Rate: {proposed_rate}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ fontSize: '16px', color: '#555555', mr: 0.5 }} />
                <Typography variant="caption" sx={{ 
                  color: '#555555', 
                  fontFamily: 'Poppins', 
                  fontSize: '12px', 
                  letterSpacing: '1px' 
                }}>
                  Est. Days: {estimated_days}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <Grid container spacing={2}>
      {appStatusData.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <ApplicationStatusCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};