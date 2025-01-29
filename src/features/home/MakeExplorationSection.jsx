import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box,Paper , Button
   } from "@mui/material";
   import { useNavigate } from 'react-router-dom';





export const MakeExplorationSection = () => {
  //./frontend/dist/assets/explore.png
    const url = "./frontend/dist/assets/explore.png";
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sign-up'); 
      }

    
    
    return (
        <>
        
        
        <Box sx={{
            flexGrow: 1, height: '400px',borderRadius:"10px",
            mt:{xs:"61%", sm:"41%",md:"30%"}
            
        }} style={{background:"linear-gradient(to right bottom, #0038F0, #299DF2)",


        }}>
            {/* Setting up the Fluid Grid system */}
            <Grid container spacing={2}>
                {/* Col1 */}

                <Grid item xs={12} md={6} sx={{
                    height: "400px"
                }}>
<Typography
        variant="h4" sx={{
            color: "#fff",
                letterSpacing:"1px",
                fontFamily:"Poppins",
                mb:"2%",
                p:"2px",
                pl:"20px"
          }}
        >Explore New Jobs Now</Typography>
                    <Typography
                     variant="body1" sx={{
                        color: "#fff",
                              letterSpacing:"1px",
                              fontSize:"16", fontWeight:"400",
                              fontFamily:"Poppins",
                            mb:"2%",
                             p:"2px",
                pl:"20px"
                      }}>
                       

                    </Typography>
                     {/* Button for Getting started */}
       <Button
          variant="contained"
          sx={{
            mb: "5%",
            typography: (theme) => theme.typography.heroGetStartedButton,
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[500],
            },
          
            ml:"5%",
            mt:"4%",
            color:'#000000'
          
          }}
          onClick={handleClick}
        >
          Get Started
        </Button>
        {/* Button End */}


               

                
                </Grid>
                {/* End col1 */}

                {/* Col2 */}
                <Grid item xs={12} md={6} sx={{
                    height: "400px",
                }}>
                    <Paper
                        sx={{
                            position: "relative",
                            //backgroundColor: "grey.800",
                            color: "#00000",
                            mb: 4,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundImage: `url(${url})`,
    
                            height: {xs:"60%",sm:"90%",md:"90%"},
                            width: { sm: '96%', md: "96%", xs: "96%" },

                            boxShadow: "none",
                           
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                //backgroundColor: "rgba(0,0,0,.3)",
                            }} />
                             
                            
                          
                    </Paper>
                </Grid>
                {/* End col2  */}
            </Grid>
        </Box></>
    );
  };
  
  
  