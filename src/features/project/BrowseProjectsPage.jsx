
// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import {
//   Stack,
//   Button,
//   Typography,
//   Box,
//   Container,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
// } from "@mui/material";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function BrowseProjectPage() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   axios.interceptors.request.use(
//     (config) => {
//       const user = JSON.parse(localStorage.getItem("user"));
//       const access = JSON.parse(localStorage.getItem("access"));
//       if (user && access) {
//         config.headers.Authorization = `Bearer ${access}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get(
//           "ccobasi.pythonanywhere.com/project/projects"
//         );
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredProjects = projects.filter((project) => {
//     const category = project.category || "";
//     return category.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   const handleProjectClick = (project) => {
//     navigate("/proposal", { state: { project } });
//   };

//   return (
//     <Box sx={{backgroundColor:"#edeffc"}}>
//           <Container component="main" maxWidth="md">
//       <Typography
//         sx={{
//           fontFamily: "Poppins",
//           fontWeight: "600",
//           fontSize: "11px",
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
//         Browse Projects
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
    
//         }}
//       >
//         <form
//           onSubmit={(e) => e.preventDefault()}
//           style={{ width: "100%", marginLeft: "20%" }}
//         >
//           <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
//             <TextField
//               label="Search by category"
//               variant="outlined"
//               fullWidth
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//             <Button
//               type="button"
//               color="primary"
//               variant="contained"
//               sx={{
//                 backgroundColor: "#34acf8",
//                 "&:hover": {
//                   backgroundColor: "#5bc0eb",
//                 },
//                 color: "#fff",
//                 fontFamily: "Poppins",
//                 fontWeight: "500",
//                 borderRadius: "16px",
//               }}
//             >
//               Search
//             </Button>
//           </Stack>
//         </form>

//         {loading ? (
//           <Typography
//             variant="body1"
//             sx={{
//               textAlign: "center",
//               fontFamily: "Poppins",
//               fontWeight: "500",
//               fontSize: "16px",
//             }}
//           >
//             Loading...
//           </Typography>
//         ) : (
//           <Stack spacing={4} width="100%">
//             {filteredProjects.length > 0 ? (
//               filteredProjects.map((project) => (
//                 <Card
//                   key={project.id}
//                   sx={{
//                     backgroundColor: "background.default",
//                     borderRadius: "26px",
//                     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
//                     transition: "transform 0.2s, box-shadow 0.2s",
//                     "&:hover": {
//                       transform: "translateY(-4px)",
//                       boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
//                     },
//                     width: "100%", // Full width
//                     mx: "auto", // Center align
//                   }}
//                   onClick={() => handleProjectClick(project)}
//                 >
//                   <CardContent>
//                     <Typography
//                       variant="h2"
//                       sx={{
//                         fontFamily: "Poppins",
//                         fontWeight: "200",
//                         fontSize: "18px",
//                         mb: 1,
//                         color: (theme) =>
//                           theme.palette.mode === "light"
//                             ? theme.palette.primary.lightModeHeroTitle
//                             : theme.palette.primary.darkModeHeroTitle,
//                         textAlign: "start",
//                         mt: 1,
//                         letterSpacing: "1px",
//                       }}
//                     >
//                       {project.title}
//                     </Typography>
//                     <Typography
//                       variant="h22"
//                       sx={{
//                         fontFamily: "Poppins",
//                         fontWeight: "200",
//                         fontSize: "11px",
//                         mb: 1,
//                         color: (theme) =>
//                           theme.palette.mode === "light"
//                             ? theme.palette.primary.lightModeHeroTitle
//                             : theme.palette.primary.darkModeHeroTitle,
//                         textAlign: "start",
//                         mt: 1,
//                         letterSpacing: "1px",
//                       }}
//                     >
//                       {project.description}
//                     </Typography>
//                     <Typography
//                       variant="h2"
//                       sx={{
//                         fontFamily: "Poppins",
//                         fontWeight: "200",
//                         fontSize: "11px",
//                         color: (theme) =>
//                           theme.palette.mode === "light"
//                             ? theme.palette.primary.lightModeHeroTitle
//                             : theme.palette.primary.darkModeHeroTitle,
//                         textAlign: "start",
//                         mt: 1,
//                         mb: 1,
//                         letterSpacing: "1px",
//                       }}
//                     >
//                       Budget: #{project.budget} | Category: {project.category}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         fontFamily: "Poppins",
//                         fontWeight: "200",
//                         fontSize: "11px",
//                         mb: 1,
//                         color: (theme) =>
//                           theme.palette.mode === "light"
//                             ? theme.palette.primary.lightModeHeroTitle
//                             : theme.palette.primary.darkModeHeroTitle,
//                         textAlign: "start",
//                         mt: 1,
//                         letterSpacing: "1px",
//                       }}
//                     >
//                       Skills Required: {project.skills_required} | Deadline:{" "}
//                       {project.deadline}
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
                  
//                     <Button variant="outlined"
//                     onClick={() => handleProjectClick(project)}
//                       sx={{
//                         backgroundColor: "#fff",
//                         "&:hover": {
//                           backgroundColor: "#3da9db",
//                         },
//                         color: "#34acf8",
//                         border: "1px solid  #34acf8",

//                       }}
//                     >Submit Proposal</Button>
//                   </CardActions>
//                 </Card>
//               ))
//             ) : (
//               <Typography
//                 variant="body1"
//                 sx={{ textAlign: "center", width: "100%" }}
//               >
//                 No projects found.
//               </Typography>
//             )}
//           </Stack>
//         )}
//       </Box>
//     </Container>
//     </Box>
//   );
// }

// export default BrowseProjectPage;
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  Stack,
  Button,
  Typography,
  Box,
  Container,
  TextField,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BrowseProjectPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "ccobasi.pythonanywhere.com/project/projects"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    const category = project.category || "";
    return category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleProjectClick = (project) => {
    navigate("/proposal", { state: { project } });
  };

  return (
    <Box sx={{ backgroundColor: "#edeffc" }}>
      <Container component="main" maxWidth="md">
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "20.8px",
            letterSpacing: "1px",
            textAlign: "center",
            color: "#333333",
            pt: "20px",
            mb: "20px",
          }}
        >
          Browse Projects
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ width: "100%" }}
          >
            <Stack direction="row" spacing={2} sx={{ mb: 3, width: "100%" }}>
              <TextField
                label="Search by category"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearch}
                sx={{ 
                  '& .MuiInputBase-root': {
                    borderRadius: '25px',
                    backgroundColor: '#ffffff',
                  },
                }}
              />
              <Button
                type="button"
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: "#34acf8",
                  "&:hover": {
                    backgroundColor: "#5bc0eb",
                  },
                  color: "#fff",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  borderRadius: "25px",
                  px: 3,
                }}
              >
                Search
              </Button>
            </Stack>
          </form>

          {loading ? (
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "16px",
                color: "#777",
              }}
            >
              Loading...
            </Typography>
          ) : (
            <Stack spacing={4} width="100%">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    sx={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "12px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.07)",
                      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: "700",
                          fontSize: "16px",
                          mb: 2,
                          color: "#333333",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          fontSize: "13px",
                          mb: 2,
                          color: "#555",
                          letterSpacing: "0.5px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: "500",
                          fontSize: "12px",
                          color: "#666",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Budget: #{project.budget} | Category: {project.category}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#666",
                          letterSpacing: "0.5px",
                          mt: 1,
                        }}
                      >
                        Skills Required: {project.skills_required} | Deadline: {project.deadline}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "flex-end", pb: 2 }}>
                      <Button 
                        variant="outlined"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project);
                        }}
                        sx={{
                          backgroundColor: "transparent",
                          borderColor: "#34acf8",
                          color: "#34acf8",
                          "&:hover": {
                            backgroundColor: "#34acf8",
                            color: "#ffffff",
                          },
                          borderRadius: "20px",
                          textTransform: "none",
                          fontWeight: "600",
                        }}
                      >
                        Submit Proposal
                      </Button>
                    </CardActions>
                  </Card>
                ))
              ) : (
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", width: "100%", color: "#777" }}
                >
                  No projects found.
                </Typography>
              )}
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default BrowseProjectPage;