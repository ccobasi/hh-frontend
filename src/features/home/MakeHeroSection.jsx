// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import { Box,Paper , AvatarGroup, Avatar
//    } from "@mui/material";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {  useTheme,
//   useMediaQuery,} from "@mui/material";


// export const MakeHeroSection = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//     const url = "./frontend/dist/assets/hero579x546.png";
//     const url1 ="./frontend/dist/assets/emilyWillis.png";
//      const url2 ="./frontend/dist/assets/johnDoe.png";
//       const url3 ="./frontend/dist/assets/explore.png";
//     return (
//       <Box sx={{ flexGrow: 1 , height:'400px', 
//       mt:"10%"}}>
//         {/* Setting up the Fluid Grid system */}
//         <Grid container spacing={2}>
//         {/* Col1 */}
  
//         <Grid item  xs={12} sm={12} md={6} sx={{
//           height:"400px", 
//         }}>
//             <Typography sx={{
//                color: (theme) =>
//                 theme.palette.mode === "light"
//                   ? theme.palette.primary.lightModeHeroTitle
//                   : theme.palette.primary.darkModeHeroTitle,
//                   fontSize:"16", fontWeight:"700",fontFamily:"Poppins",
//                   letterSpacing:"1px",mb:"4%",
//                   mt:{xs:"15%", sm:"5%",   md:"5%"}

//             }}>Find Your Dream Job</Typography>
//             <Typography variant="h2"  sx={{
//                color: (theme) =>
//                 theme.palette.mode === "light"
//                   ? theme.palette.primary.lightModeHeroTitle
//                   : theme.palette.primary.darkModeHeroTitle,
//                   fontSize:"16", fontWeight:"600",fontFamily:"Poppins",
//                   letterSpacing:"1px",mb:{xs:"4%", sm:"4%"},
//                   display:{md: "flex", xs:"none", sm:"none"}
                  
                 

//             }}>
//             Freelance Jobs and Talents at Your Fingertips
      
//             </Typography>

//             <Typography variant="h4"  sx={{
//                color: (theme) =>
//                 theme.palette.mode === "light"
//                   ? theme.palette.primary.lightModeHeroTitle
//                   : theme.palette.primary.darkModeHeroTitle,
//                   fontSize:"16", fontWeight:"600",fontFamily:"Poppins",
//                   letterSpacing:"1px",mb:{xs:"4%", sm:"4%"},
//                   display:{xs:"flex", sm:"flex",md:"none"}
                  
                 

//             }}>
//             Freelance Jobs and Talents at Your Fingertips
      
//             </Typography>
//             <Typography 
            
//              sx={{
//               color: (theme) =>
//                theme.palette.mode === "light"
//                  ? theme.palette.primary.lightModeHeroTitle
//                  : theme.palette.primary.darkModeHeroTitle,
//                  fontSize:"16", fontWeight:"400",fontFamily:"Poppins",
//                  letterSpacing:"4px",mb:{xs:"6%",sm:"4%"}, mt:{xs:"15%",sm:"6%"}

//            }}>
//             Connect with top freelancers and clients on our platform! Find your perfect match for your next project.
  
//             </Typography>
           
//           <Grid item  xs={12} sm={12} md={12}sx={{display:"flex", 
//           pt:"10px",
//           m:'1px',
//            // width:{xs:"9px",sm:'10px', md:'5px'},
           
//           }} 
         
          
//           >
//           <AvatarGroup max={4} spacing="small" >
//                <Avatar alt="" src={url1}  /> 
//                <Avatar alt="" src={url2}/> 
//                <Avatar alt="" src={url3}/> 
//                <Avatar alt="" src={url1}/> 
//                <Avatar alt="" src={url1}/>      
//             </AvatarGroup>
//           </Grid>
//           <Typography  sx={{
//                color: (theme) =>
//                 theme.palette.mode === "light"
//                   ? theme.palette.primary.lightModeHeroTitle
//                   : theme.palette.primary.darkModeHeroTitle,
//                   fontSize:"16", fontWeight:"400",fontFamily:"Poppins",
//                   letterSpacing:"1px",mt:{xs:"10px", }

//             }}>
//             Over <strong style={{color:"#2F6AD8"}}>12800+</strong> freelancers
//             to complete your projects
//           </Typography>
  
//           </Grid>
//           {/* End col1 */}
  
//           {/* Col2 */}
//           <Grid item  xs={12} sm={12} md={6} sx={{
//           height:{xs:"750px", sm:"750px"},
//         }}>
//           <Paper
//         sx={{
//           position: "relative",
//           //backgroundColor: "grey.800",
//           color: "#00000",
//           mb: 4,
//           //m:{xs:"40px"},
//           backgroundSize: "fit",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundImage: `url(${url})`,
//            height:"60%",
//           width:{sm:'100%', md:"100%",xs:"100%"},
          
//           boxShadow:"none",
//           mt:{xs: "36%",sm : "4%"}
//         }}
//       >
       
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             bottom: 0,
//             right: 0,
//             left: 0,
//             //backgroundColor: "rgba(0,0,0,.3)",
           
//           }}
//         />
//         {/* <Grid container>
//           <Grid item md={6}>
//             <Box
//               sx={{
//                 position: "relative",
//                 p: { xs: 3, md: 6 },
//                 pr: { md: 0 },
//               }}
//             >
            
//               <Typography component="h3" variant="h2">
//                 title
//               </Typography>
//               <Typography variant="h5" color="inherit" paragraph>
//               description
//               </Typography>
//              Link
//             </Box>
//           </Grid>
//         </Grid> */}
  
  
//       </Paper>
           
//           </Grid>
//           {/* End col2  */}
        
       
//         </Grid>
//       </Box>
//     );
//   };
  
import * as React from "react"; 
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Paper, AvatarGroup, Avatar, Card, CardContent, TextField, InputAdornment, IconButton } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from "@mui/icons-material/Search";

export const MakeHeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const url = "./frontend/dist/assets/hero579x546.png";
  const url1 = "./frontend/dist/assets/emilyWillis.png";
  const url2 = "./frontend/dist/assets/johnDoe.png";
  const url3 = "./frontend/dist/assets/explore.png";

  return (
    <Box sx={{ flexGrow: 1, height: '400px', mt: "10%" }}>
      <Grid container spacing={2}>
        {/* Col1 */}
        <Grid item xs={12} sm={12} md={6} sx={{ height: "400px" }}>
          <Typography sx={{
            color: theme.palette.mode === "light" 
              ? theme.palette.primary.lightModeHeroTitle 
              : theme.palette.primary.darkModeHeroTitle,
            fontSize: "16", fontWeight: "700", fontFamily: "Poppins",
            letterSpacing: "1px", mb: "4%",
            mt: { xs: "15%", sm: "5%", md: "5%" }
          }}>
            Find Your Dream Job
          </Typography>
          <Typography variant="h2" sx={{
            color: theme.palette.mode === "light" 
              ? theme.palette.primary.lightModeHeroTitle 
              : theme.palette.primary.darkModeHeroTitle,
            fontSize: "16", fontWeight: "600", fontFamily: "Poppins",
            letterSpacing: "1px", mb: { xs: "4%", sm: "4%" },
            display: { md: "flex", xs: "none", sm: "none" }
          }}>
            Freelance Jobs and Talents at Your Fingertips
          </Typography>
          <Typography variant="h4" sx={{
            color: theme.palette.mode === "light" 
              ? theme.palette.primary.lightModeHeroTitle 
              : theme.palette.primary.darkModeHeroTitle,
            fontSize: "16", fontWeight: "600", fontFamily: "Poppins",
            letterSpacing: "1px", mb: { xs: "4%", sm: "4%" },
            display: { xs: "flex", sm: "flex", md: "none" }
          }}>
            Freelance Jobs and Talents at Your Fingertips
          </Typography>
          <Typography sx={{
            color: theme.palette.mode === "light" 
              ? theme.palette.primary.lightModeHeroTitle 
              : theme.palette.primary.darkModeHeroTitle,
            fontSize: "16", fontWeight: "400", fontFamily: "Poppins",
            letterSpacing: "4px", mb: { xs: "6%", sm: "4%" }, mt: { xs: "15%", sm: "6%" }
          }}>
            Connect with top freelancers and clients on our platform! Find your perfect match for your next project.
          </Typography>
          <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", pt: "10px", m: '1px' }}>
            <AvatarGroup max={4} spacing="small">
              <Avatar alt="" src={url1} />
              <Avatar alt="" src={url2} />
              <Avatar alt="" src={url3} />
              <Avatar alt="" src={url1} />
              <Avatar alt="" src={url1} />
            </AvatarGroup>
          </Grid>
          <Typography sx={{
            color: theme.palette.mode === "light" 
              ? theme.palette.primary.lightModeHeroTitle 
              : theme.palette.primary.darkModeHeroTitle,
            fontSize: "16", fontWeight: "400", fontFamily: "Poppins",
            letterSpacing: "1px", mt: { xs: "10px" }
          }}>
            Over <strong style={{ color: "#2F6AD8" }}>12800+</strong> freelancers to complete your projects
          </Typography>
        </Grid>
        {/* End col1 */}

        {/* Col2 */}
        <Grid item xs={12} sm={12} md={6} sx={{ height: { xs: "750px", sm: "750px" } }}>
          <Paper
            sx={{
              position: "relative",
              backgroundSize: "fit",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${url})`,
              height: "60%",
              width: { sm: '100%', md: "100%", xs: "100%" },
              boxShadow: "none",
              mt: { xs: "36%", sm: "4%" }
            }}
          >
            {/* Floating Card */}
            <Card
              sx={{
                position: "absolute",
                top: "60%", // Position slightly above the image
                left: { xs: "34%", sm: "44%", md: "65%" } ,
                transform: "translateX(-50%)",
                width: { xs: "35%", sm: "163px", height: "105px" },
                p: 1,
                boxShadow: 4,
                backgroundColor: "#E5E4E2",
                letterSpacing: "1px",
                color: "#000000",
                 fontFamily: "Poppins",
              
                borderRadius: "12px",
                zIndex: 1,
                ml: {xs:"30%"}
              }}
            >
              <CardContent>
                <Typography variant="h6" align="center"  sx={{fontSize: {xs:"15px" ,
          md: "20px", lg: "24px"},
                  color: (theme) => theme.palette.mode === "light"
            ? theme.palette.primary.lightModeHeroTitle
            : theme.palette.primary.darkModeHeroTitle,
          letterSpacing: "1px",
          fontFamily: "Poppins",
                 }}>

                  30K+<WorkOutlineIcon fontSize="small" sx={{ mr: 0.5, color: "#2F6AD8" }} />
                </Typography>
                <Typography variant="body2" align="center" sx={{fontSize:
                  {xs:"10px" ,
          md: "12px", lg: "12px"},
                  color: (theme) => theme.palette.mode === "light"
            ? theme.palette.primary.lightModeHeroTitle
            : theme.palette.primary.darkModeHeroTitle,
          letterSpacing: "1px",
          fontFamily: "Poppins", }}>
                 People got hired
                </Typography>
              </CardContent>
            </Card>
          </Paper>
          {/* Search Bar */}
          <Box sx={{ mt: 3, width: '100%', px: 2 }}>
          
            <TextField
            placeholder="Search for jobs"
            variant="outlined"
            fullWidth
            sx={{ mt: 3 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          </Box>
        </Grid>
        {/* End col2 */}
      </Grid>
    </Box>
  );
};

  
  