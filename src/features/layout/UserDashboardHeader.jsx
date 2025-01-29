import React, { useEffect } from "react";
import Link from "@mui/material/Link";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: "72px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  marginTop: "82px",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "2px",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  height: "100%",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
        
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const headerStyle = {
  backgroundColor: '#f1f2f6', 
  height: '0px',                 
  display: 'flex',                
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',              
};

export default function UserDashboardHeader() {
  const theme = useTheme();
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const jwt_access = localStorage.getItem("access");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (jwt_access === null || !user) {
      navigate("/sign-in");
    } else {
      getSomeData();
    }
  }, [jwt_access, navigate, user]);

  // Ensure user is not null before accessing role
  const isClient = user && user.role === "client";
  const editLinkHref = isClient ? "/edit-client" : "/edit-freelancer";
  const backToDashboard = isClient ? "/client" : "/freelancer";
  const projectsOrAnalyticsIcon = isClient ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
    </svg>) : ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-data-fill" viewBox="0 0 16 16">
   <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
   <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"/>
 </svg>);
  const projectsOrAnalyticsHref = isClient ? '/projects': '/analytics';
  const projectsOrAnalyticsLabel = isClient ? 'Projects' : 'Analytics';
  const paymentOrSearchJobIcon = isClient ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
       <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
     </svg>): ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
 </svg>);
  const paymentOrSearchJobHref = isClient ? '/payments' : '/browse-project';
  const paymentOrSearchJobLabel = isClient ? 'Payments' : 'Search jobs';

  const clientOrFreelancerContracts = isClient ? '/client-contracts' : '/freelancer-contracts';



  const refresh = JSON.parse(localStorage.getItem("refresh"));

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post("/logout/", {
        refresh_token: refresh,
      });
      if (res.status === 200) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        navigate("/sign-in");
        toast.success("Logout successful");
      } else {
        console.error("Logout failed:", res.data);
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("An error occurred during logout. Please try again.");
    }
  };

  const getSomeData = async () => {
    const resp = await axiosInstance.get("/profile/");
    if (resp.status === 200) {
      console.log("Successful");
    }
  };

  const UserSidebar = () => {

    const userSidebarData = [
      {
        id: 0,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-grid-1x2"
            viewBox="0 0 16 16"
          >
            <path d="M6 1H1v14h5zm9 0h-5v5h5zm0 9v5h-5v-5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
          </svg>
        ),
        url: backToDashboard,

        label: "Dashboard",
      },
      {
        id: 1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
        ),
        url: editLinkHref,
        label: "Edit Profile",
      },
      {
        id: 2,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>
        ),
        url: clientOrFreelancerContracts,
        label: "Contracts",
      },
      
      {
        id: 4,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
        ),
        url: "/reviews",
        label: "Reviews",
      },
      {
        id: 5,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>
        ),
        url: "/disputes/list",
        label: "Disputes",
      },
      {id:6,
        icon:projectsOrAnalyticsIcon,
        url:projectsOrAnalyticsHref,
        label:projectsOrAnalyticsLabel
      },
      {id:7,
        icon:paymentOrSearchJobIcon,
        url:paymentOrSearchJobHref,
        label:paymentOrSearchJobLabel
      }
    ];

    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" 
        open={open}
        sx={{
                    backgroundColor: '#A0D9EF', 
                }}
        >
          
          <DrawerHeader>
            <Box>
              {theme.direction === "rtl" ? (
                <></>
              ) : (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={[
                    {
                      marginLeft: 40,
                    },
                    open && { display: "none" },
                  ]}
                >
                  <ChevronRightIcon />
                </IconButton>
              )}
            </Box>

            <IconButton
              onClick={handleDrawerClose}
              sx={[!open && { display: "none" }]}
            >
              {theme.direction === "rtl" ? "" : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {userSidebarData.map((data) => (
              <ListItem disablePadding sx={{ display: "block" }} key={data.id}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    onClick={() => navigate(data.url)}
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {data.icon}
                  </ListItemIcon>
                  <ListItemText
                    onClick={() => navigate(data.url)}
                    primary={data.label}
                    sx={[
                      open
                        ? {
                            fontFamily: "Poppins",
                            fontSize: "8px",
                            fontWeight: "400",
                            letterSpacing: "1px",
                            color: (theme) =>
                              theme.palette.mode === "light"
                                ? theme.palette.grey[600]
                                : theme.palette.grey[300],
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  onClick={handleLogout}
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                      />
                    </svg>
                  }
                </ListItemIcon>
                <ListItemText
                  onClick={handleLogout}
                  primary="Logout"
                  sx={[
                    open
                      ? {
                          fontFamily: "Poppins",
                          fontSize: "8px",
                          fontWeight: "400",
                          letterSpacing: "1px",
                          color: (theme) =>
                            theme.palette.mode === "light"
                              ? theme.palette.grey[600]
                              : theme.palette.grey[300],
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
      </Box>
    );
  };

  return (
    <React.Fragment>
      {/* Box for UserDashboard header feature */}
      <header style={headerStyle}>
    

      <Box
        sx={{
          display: { xs: "flex", sm: "flex", md: "none" },
          backgroundColor: theme.palette.mode,
          pt: "5px",
          pl: "25px",
          justifyContent: 'space-between',
        }}
      >
       <Box >
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
          href={backToDashboard}
        >
          <img
            src="./frontend/dist/assets/logo100x100.png"
            alt="logo"
            style={{ width: "50px", height: "50px",padding:'5px', marginTop:'5px'}}
          />
        </Link>
       </Box>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            sx={{
              fontFamily: "Poppins",
              fontSize: "12px",
              fontWeight: "400",
              letterSpacing: "1px",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
            }}
            onClick={() => navigate(backToDashboard)}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            sx={{
              fontFamily: "Poppins",
              fontSize: "12px",
              fontWeight: "400",
              letterSpacing: "1px",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
            }}
            onClick={() => navigate(editLinkHref)}
          >
            Edit Profile
          </MenuItem>
          <MenuItem
            sx={{
              fontFamily: "Poppins",
              fontSize: "12px",
              fontWeight: "400",
              letterSpacing: "1px",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
            }}
            onClick={handleLogout}
          >
            Log out
          </MenuItem>
        </Menu>
      </Box>

      {/* Box for the Arrow back icon */}
      <Box
        sx={{
          backgroundColor: theme.palette.mode,
          display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
        }}
      >
        
      </Box>
      <UserSidebar />
     </header>
    </React.Fragment>
  );
}
