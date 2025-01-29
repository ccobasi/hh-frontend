import { Typography,Container} from "@mui/material";
import NotificationCardPresentation from "./Notification";

const NotificationPage = () => {
  return (
    <>
    <Container component="main" maxWidth="md">
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "12px",
        lineHeight: "20.8px",
        textAlign: "start",
        letterSpacing: "1px",

        color: (theme) => theme.palette.mode === "light"
          ? theme.palette.primary.lightModeHeroTitle
          : theme.palette.primary.darkModeHeroTitle,
        pt: "70px",
        ml: "13%",
      }}
    >
      Notifications
    </Typography>

  

      {/*First Notification Feature*/}

      <NotificationCardPresentation />
      </Container>
    
    </>
  );
};

export default NotificationPage;
