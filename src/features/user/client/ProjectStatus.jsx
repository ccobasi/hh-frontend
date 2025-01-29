import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ProjectStatus = () => {
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
        //padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" }, 
        // Padding for mobile
        flexGrow:1
      }}
    >
      <Grid
        container
        // spacing={4}
        // sx={{
        //   pt: { lg: "5%", md: "5%", sm: "0%", xs: "5%" },
        //   pb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
        // }}
      >
        {projects.map((project) => (
          <Grid  item 
        //   xs={12} sm={6} md={4} 
        //   sx={{ mb: "10px" }}
        key={project.id}
          >
            <Card

              sx={{
                display: "flex", 
      justifyContent:'center',
                cursor: "pointer",
                backgroundColor: "#A0D9EF",
                borderRadius: "26px",
                boxShadow: "1 4px 8px rgba(0, 0, 0, 0.1)",
                mb:"6px"
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  overflow: "hidden",
                  backgroundColor: "background.default",
                  padding: "20px",
                  pt: "10px",
                 // marginBottom: "90px",
                  borderRadius: "0px",
                }}
              >
             
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "2px",
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeHeroTitle
                        : theme.palette.primary.darkModeHeroTitle,
                    pb: "0px",
                    pt: "1px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "10px",
                    letterSpacing: "1px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  Title: {project.title}
                </Typography>

               
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "5px",
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeHeroTitle
                        : theme.palette.primary.darkModeHeroTitle,
                    pt: "3px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "12px",
                    letterSpacing: "1px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  Closing Date: {project.closing_date}
                </Typography>

                <CardActions
                  sx={{ justifyContent: "center", paddingBottom: "20px" }}
                >
                  <Button
                    onClick={() => handleProjectClick(project.id)}
                    sx={{
                      //backgroundColor: "#A0D9EF",
                      //backgroundColor:"rgba(75,192,192,1)",
                    letterSpacing: "2px",
                    fontSize:"10px",
                    color: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.primary.lightModeHeroTitle
                          : theme.palette.primary.darkModeHeroTitle,
                    
 backgroundColor: "#BBD3F8",
 borderRadius:"20px"
                    }}
                    variant="contained"
                  >
                    View
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectStatus;
