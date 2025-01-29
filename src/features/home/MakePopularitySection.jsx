import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box,Paper , Stack, Card, CardContent, Badge
   } from "@mui/material";
import { WorkspacePremium } from "@mui/icons-material";
import { Apartment } from "@mui/icons-material";
import { Payment } from "@mui/icons-material";
import { Work } from "@mui/icons-material";
import GppGoodIcon from '@mui/icons-material/GppGood';


export const MakePopularitySection = () => {
  //./frontend/dist/assets/comment.png
    const url = "./frontend/dist/assets/comment.png";

    const cardData = [
        {
        icon: <><WorkspacePremium/></>,
        title: "Quality Job",
        },
        {
            icon: <><Apartment/></>,
            title: "Top Companies",
            },
        {
        icon: <><Payment /></>,
        
        title: "No Extra Charge",
        },
        
        {
         icon: <><Work/></>,
         title: "International Job",
          },
                

    ];
    
    return (
        <><Typography
        variant="h4" sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
                letterSpacing:"1px",
                fontFamily:"Poppins",
                mb:"2%",mt:{xs:"32%",sm:"32%", md:"26%",lg:"15%"}
          }}
        >Why We are Most Popular</Typography>
        
        
        <Box sx={{
            flexGrow: 1, height: '400px',
            
        }}>
            {/* Setting up the Fluid Grid system */}
            <Grid container spacing={2}>
                {/* Col1 */}

                <Grid item xs={12} md={6} sx={{
                    height: "400px"
                }}>

                    <Typography sx={{
                         color: (theme) =>
                            theme.palette.mode === "light"
                              ? theme.palette.primary.lightModeHeroTitle
                              : theme.palette.primary.darkModeHeroTitle,
                              fontSize:"16", fontWeight:"400",fontFamily:"Poppins",
                              letterSpacing:"1px",mt:{xs:"10px", }
                    }}>
                     Businesses choose Hustle Hub for its diverse talent pool, flexible workforce, and cost-efficiency. The platform enables efficient project management, rapid scaling, and quality assurance through ratings and reviews. With a global reach, Hustle Hub promotes innovation and specialization by connecting businesses with experts from various industries and geographic locations.

                    </Typography>
                <Box sx={{flexGrow: 1, mt:{xs:"15%"}}}>
                <Grid container spacing={0.1}>
                    {cardData.map((card, index)=>
                    <Grid item key={index} xs={6} sm={6} md={6}>
                    <Box sx={{flexGrow: 1,}}>
                        <Stack direction="row">
                            <Box sx={{
                                
                                      
                            }}>
                                <Typography sx={{
                                    backgroundColor: "#E4EEFC",
                                          p:"1px",
                                          borderRadius:"5px",
                                          mr:"14px",
                                          mb:"4px",
                                          color:"#000000"
                                }}>
                                    {card.icon}
                                </Typography>
                                </Box><Typography
                            sx={{
                                color: (theme) =>
                                    theme.palette.mode === "light"
                                      ? theme.palette.primary.lightModeHeroTitle
                                      : theme.palette.primary.darkModeHeroTitle,
                                      fontSize:"16", fontWeight:"400",fontFamily:"Poppins",
                                      letterSpacing:"1px",mt:{xs:"4px", }
                            }}>{card.title}</Typography>
                        </Stack>
                    </Box>
                    </Grid>)}

                </Grid>

                </Box>
                </Grid>
                {/* End col1 */}

                {/* Col2 */}
                <Grid item xs={12} md={6} sx={{
                    height: "400px",
                }}>
                    <Paper
                        sx={{
                            position: "relative",
                            backgroundColor: "#F3F7FA",
                            color: "#00000",
                            mb: {xs: 4, },
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundImage: `url(${url})`,
    
                            height: {xs:"60%", sm:"100%",md:"100%"},
                            width: { xs: "70%",sm: '60%', md: "80%",  },

                            boxShadow: "none"
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
                              {/* {
                                <img
                                style={{
                                  display: "flex",
                                  
                                  mt: { md: "10%", sm:"90%", xs:"90%" },
                                  position: "relative",
                                  paddingTop: "0px",
                                  //paddingLeft: "50px"
                                  paddingLeft:50,
                                 height:"300px"
              
              
                                }}
                                src={url} alt={''} />
                              
                            } */}
                            
                           {/* Floating Card */}
            <Card
  sx={{
    position: "absolute",
    top: "10%", 
    left: { xs: "64%", sm: "74%", md: "80%" },
    transform: "translateX(-50%)",
    width: { xs: "35%", sm: "163px", md: "50%" },
    height: "45px",
    p: 0,
    boxShadow: 4,
    backgroundColor: "#E5E4E2",
    borderRadius: "12px",
    zIndex: 1,
    ml: { xs: "30%" },
  }}
>
  <CardContent sx={{ display: "flex", justifyContent: 
    "left", alignItems: "center" }}>
    <Typography
      variant="body2"
      sx={{
        fontSize: {xs:"8px" ,
          md: "12px", lg: "12px"},
        display: "flex",
       
         letterSpacing: "1px",
                color: "#000000",
                 fontFamily: "Poppins",
      }}
    >
      <GppGoodIcon sx={{ mr: 0.5 ,
                color: "#000000"}} /> 100% Trusted
    </Typography>
  </CardContent>
</Card>

                    </Paper>
                </Grid>
                {/* End col2  */}
            </Grid>
        </Box></>
    );
  };
  
  
  