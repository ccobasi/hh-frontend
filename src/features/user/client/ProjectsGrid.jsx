// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";

// const ProjectsGrid = () => {
//   const [projects, setProjects] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));
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

  

//   return (
//     <Box
//       sx={{
//         padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" }, // Padding for mobile
//       }}
//     >
//       <Grid
//         container
//         spacing={4}
//         sx={{
//           pt: { lg: "5%", md: "5%", sm: "0%", xs: "5%" },
//           pb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
//         }}
//       >
//         {projects.map((project) => (
//           <Grid key={project.id} item xs={12} sm={6} md={4} sx={{ mb: "10px" }}>
//             <Card
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
//                     fontFamily: "Poppins",
//                     fontWeight: "200",
//                     fontSize: "11px",
//                     mb: 1,
//                     color: (theme) =>
//                       theme.palette.mode === "light"
//                         ? theme.palette.primary.lightModeHeroTitle
//                         : theme.palette.primary.darkModeHeroTitle,
//                     textAlign: "start",
//                     mt: 1,
//                     letterSpacing: "1px",
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
//                     fontSize: "10px",
//                     letterSpacing: "1px",
//                     textOverflow: "ellipsis",
//                     overflow: "hidden",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   Title: {project.title}
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
//                     fontWeight: "200",
//                     fontSize: "10px",
//                     letterSpacing: "1px",
//                     textOverflow: "ellipsis",
//                     overflow: "hidden",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   Description: {project.description}
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
//                   Closing Date: {project.closing_date}
//                 </Typography>

//                 <CardActions
//                   sx={{ justifyContent: "center", paddingBottom: "20px" }}
//                 >
//                   <Button
//                     onClick={() => handleProjectClick(project.id)}
//                     sx={{
//                       backgroundColor: "#A0D9EF",
//                       letterSpacing: "0.5px",
//                       color: "#fff",
//                       borderRadius: "20px",
//                       "&:hover": {
//                         backgroundColor: "#B0DAE5",
//                       },
//                       position: "absolute",
//                       mt: "165px",
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

// export default ProjectsGrid;
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

const ProjectsGrid = () => {
  const [projects, setProjects] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const access = JSON.parse(localStorage.getItem("access"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(
          `ccobasi.pythonanywhere.com/project/user/${user.id}/projects/`,
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        );

        if (response.status === 200 && response.data.length > 0) {
          const lastFiveProjects = response.data.slice(-5);
          setProjects(lastFiveProjects);
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjectData();
  }, [user.id, access]);

  const handleProjectClick = (projectId) => {
    navigate(`/project-details/${projectId}`);
  };

  return (
    <Box
      sx={{
        padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" },
      }}
    >
      <Typography 
        variant="h6" 
        component="h2" 
        sx={{ 
          mb: 2, 
          textAlign: 'center', 
          color: (theme) => theme.palette.primary.main 
        }}
      >
        Projects Overview
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "26px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflowX: "auto",
        }}
      >
        <Table aria-label="projects table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: 'primary.main', pt: 6, pb: 4 }}>Title</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'primary.main', pt: 6, pb: 4, display: { xs: 'none', sm: 'table-cell' } }} align="left">Description</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'primary.main', pt: 6, pb: 4 }} align="left">Closing Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'primary.main', pt: 6, pb: 4 }} align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow 
                key={project.id}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#E0E0E0'
                  }
                }}
                onClick={() => handleProjectClick(project.id)}
              >
                <TableCell component="th" scope="row">
                  {project.title}
                </TableCell>
                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }} align="left">
                  {project.description.length > 50 ? `${project.description.slice(0, 50)}...` : project.description}
                </TableCell>
                <TableCell align="left">{project.closing_date}</TableCell>
                <TableCell align="left">
                  <Typography 
                    sx={{ 
                      color: '#34acf8',
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

export default ProjectsGrid;