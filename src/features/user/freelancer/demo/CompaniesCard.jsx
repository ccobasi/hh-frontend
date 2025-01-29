import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function CompaniesCard({
  title,
  description,
  time,
  count,
  sourceSet,
  imageLabel,
}) {
  return (
    <>
      {/* Container  */}
      <Box   sx={{
            width: "100%",
            mb: "10px",
            mt: "5%",
            bgcolor: "background.paper",
            textAlign: "center",
            boxShadow: 1,
          }}>

        <div aria-label="main">
        <List>
          <Box alignItems="flex-start" sx={{ ml: "3%",mr:"3%",height:"70px",mt:"2%" }}>
            <ListItemAvatar>
              <Avatar
                alt={imageLabel}
                src={sourceSet}
                style={{ width: "40px", height: "40px" }}
              />
            </ListItemAvatar>
            <ListItem sx={{ justifyContent: "flex-start" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "15px",
                  ml:"5%",
                  mt:"-6%",
                  lineHeight: "22.5px",
                  letterSpacing: "-1%",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                }}
              >
                {title}
              </Typography>
              
            </ListItem>
           
            <ListItem
                sx={{
                  justifyContent: "flex-end",
                  
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "11px",
                  lineHeight: "17.6px",
                  letterSpacing: "-1%",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                }}
              >
                {time}
              </ListItem>
          </Box>
          <Box>
            <Typography
              sx={{
                ml: "10%",
                mr: "4%",
                mb:"1%",
                width: "75%",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22.5px",
                letterSpacing: "-1%",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              {description}
            </Typography>
            <ListItemAvatar>
              <Avatar
                sx={{
                  height: "16px",
                  ml:"91%",
                  mt:"-2%",
                  mb:"2%",
                  width: "20px",
                  font: "icon",
                  backgroundColor: "#5386E4",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "10px",
                  lineHeight: "16px",
                  letterSpacing: "-1%",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                }}
              >
                {count}
              </Avatar>
            </ListItemAvatar>
          </Box>
        </List>

        </div>
        
      </Box>
      {/* Container End */}
    </>
  );
}
