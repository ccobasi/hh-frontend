import { useNavigate } from "react-router-dom";
import { Box,Button ,Link} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const SignUpButton = () => {
  let navigate = useNavigate();
  

  return (
    <>
      {/* Box for the Signin Feature */}
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          width: "62px",
          height: "24px",
          top: "7px",
          ml: "3px",
          borderRadius: "5px",
        }}
      >
        <Button
          onClick={() => navigate("/sign-up")}
          variant="contained"
          sx={{
            backgroundColor: "#87CEEB",
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[500],
            },
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "8px",
            top: "2px",
          }}
        >
          Sign Up
        </Button>
        
      </Box>
    </>
  );
};

const SignUpAndInButton = () => {
  let navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
      {/* Box for the Signin Feature */}
        <Box  sx={{
          display: { md: "flex", xs: "none" }, textDecoration: "none"  }}> 
  <Link href="/browse-project"  sx={{
           textDecoration: "none", mr: "15px",
            color: theme.palette.mode === "light" 
              ? theme.palette.primary.lightModeHeroTitle 
              : theme.palette.primary.darkModeHeroTitle,
            fontSize: "8px", fontWeight: "400", fontFamily: "Poppins",
            letterSpacing: "1px", mb: "0%"   }}>Find a Job  </Link>
  <Link href="/browse-project"  sx={{
           textDecoration: "none",mr: "15px" ,
            color: theme.palette.mode === "light" 
              ? theme.palette.primary.lightModeHeroTitle 
              : theme.palette.primary.darkModeHeroTitle,
            fontSize: "8px", fontWeight: "400", fontFamily: "Poppins",
            letterSpacing: "1px", mb: "0%"   }}>Talents </Link>
  <Link href="/browse-project"  sx={{
           textDecoration: "none",mr: "70px" ,
            color: theme.palette.mode === "light" 
              ? theme.palette.primary.lightModeHeroTitle 
              : theme.palette.primary.darkModeHeroTitle,
            fontSize: "8px", fontWeight: "400", fontFamily: "Poppins",
            letterSpacing: "1px", mb: "0%"  }}>Features </Link>

        </Box>
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          width: "122px",
          height: "24px",
          top: "7px",
          ml: "3px",
          borderRadius: "5px",
          
        }}
      >
         <Button
          onClick={() => navigate("/sign-up")}
          variant="contained"
          sx={{
            backgroundColor: "#87CEEB",
            color: "#fff",
            letterSpacing:'0.2px',
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[500],
            },
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "8px",
            top: "2px",
            mr:'5px'
          }}
        >
          Sign Up
        </Button>

        <Button
          onClick={() => navigate("/sign-in")}
          variant="contained"
          sx={{
            color: "#fff",
            letterSpacing:'0.7px',
            backgroundColor: "#87CEEB",
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[500],
            },
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "8px",
            top: "2px",
          }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};

// eslint-disable-next-line no-unused-vars
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AppLogo from "../components/AppLogo";
import MobileTransitionsModal from "../components/MobileTransitionsModal";
import AppTitle from "../components/AppTitle";

export default function ResponsiveNavBar() {
  return (
    <>
      {/* App or Navigation bar */}
      <AppBar elevation={3} sx={{  backgroundColor: "background.default",typography: (theme) => theme.typography.appBar,}} >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppLogo  src="./frontend/dist/assets/logo100x100.png" alt="Logo"/>
           <AppTitle/>
            <MobileTransitionsModal />
            <SignUpAndInButton/>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
