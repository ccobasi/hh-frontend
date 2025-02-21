import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { AppBar, Box, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
//import Logo from "../../assets/logo100x100.png"
export default function RegistrationHeader() {
  //Use system preference to set theme mode
  const theme = useTheme();
  //instantiate useNavigate object
  let navigate = useNavigate();

  let isCleint = true;

  return (
    <React.Fragment>
      {/* Box  arrow back icon*/}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          backgroundColor: theme.palette.mode,
          pt: "25px",
          pl: "25px",
        }}
      >
        <IconButton onClick={() => navigate("/")}>
          <ArrowBack />
        </IconButton>
      </Box>
      {/* Box End */}

      {/* Box for app bar*/}
      <Box
        sx={{
          backgroundColor: theme.palette.mode,
          display: { xs: "none", md: "flex" },
        }}
      >
        <AppBar
          sx={{ backgroundColor: "background.default", pb: "160px",  }}
         
        >
          <Toolbar className="appspotToolbar">
            <Link
              noWrap
              sx={{
                flex: 1,
                padding: "10px",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[500],

                fontSize: "1.05rem",
                textDecoration: "none",
                "&:hover": {
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[700]
                      : theme.palette.grey[300],
                },
              }}
              href={isCleint ? "/" : "/services"}
            >
              <img src='./frontend/dist/assets/logo100x100.png' alt="logo" style={{ width: '80px', height: '50px' }} />
            </Link>

            <Box>
              <Button
                onClick={() => navigate("/sign-in")}
                variant="contained"
                sx={{
                  backgroundColor: "#87CEEB",
                  color: "common.white",
                  "&:hover": {
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[400]
                        : theme.palette.grey[500],
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        {/* App bar End */}
      </Box>
    </React.Fragment>
  );
}
