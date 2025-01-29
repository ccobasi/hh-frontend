// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Avatar, Stack ,Box} from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import axios from "axios";

export default function FreelancerCard({ name, jobTitle, imageLabel }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  const [userProfile, setUserProfile] = useState(null);

  // Axios interceptor to include Authorization header
  axios.interceptors.request.use(
    (config) => {
      const access = JSON.parse(localStorage.getItem("access"));
      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `ccobasi.pythonanywhere.com/user_profile/user-profile/${userId}/`
        );
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  // Handle image URL
  const imageUrl =
    userProfile && userProfile.image
      ? `ccobasi.pythonanywhere.com${userProfile.image}`
      : "default_avatar.png";

  return (
    <Box sx={{flexGrow:1}}>
      <Card sx={{ boxShadow: 0 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={imageLabel || "User Avatar"}
            src={imageUrl}
            sx={{ height: "109px", width: "104px" }}
          />

          <Typography
            variant="h4"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "-1.5%",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
              pt: "20px",
              textAlign: "center",
            }}
          >
           Hi, {user && user.names}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "19.2px",
                color: "#95969D",
                pb: "20px",
                pt: "5px",
              }}
            >
              {userProfile ? userProfile.job_role : jobTitle}
            </Typography>
            <VerifiedOutlinedIcon
              sx={{ width: "12px", color: "#5386E4", height: "12px" }}
              className="clientVerifiedIcon"
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
