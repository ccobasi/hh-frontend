import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Link, Stack, Button } from "@mui/material";
import CompaniesMessageGroup from "./CompaniesMessageGroup ";
import { IndividualMessageGroup } from "./IndividualMessageGroupPresentation";
//import { MessageSearchBar } from "./MessageSearchBar";

import Container from "@mui/material/Container";
import MessagePresentation from "./MessagePresentation";

const MessagePage = () => {
  return (
    <>
      <Container component="main" maxWidth="lg">
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mt: "-4%",
            mb: "10%",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20.8px",
            textAlign: "center",

            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
          }}
        >
          Messages
        </Typography>

        <MessagePresentation />
      </Container>
    </>
  );
};

export default MessagePage;
