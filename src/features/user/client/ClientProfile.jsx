// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

// import Img from "../../../assets/mask-group-8wG.png";
// import axios from "axios";

// const ClientProfile = ({ name, jobTitle, image, imageLabel }) => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user ? user.id : null;
//   const [clientProfile, setClientProfile] = useState(null);
//   imageLabel = "Profile Image";

//   axios.interceptors.request.use(
//     (config) => {
//       const user = JSON.parse(localStorage.getItem("user"));
//       const access = JSON.parse(localStorage.getItem("access"));
//       if (user && access) {
//         config.headers.Authorization = `Bearer ${access}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   useEffect(() => {
//     const fetchClientProfile = async () => {
//       try {
//         const response = await axios.get(
//           `ccobasi.pythonanywhere.com/user_profile/user-profile/${userId}/`
//         );
//         if (response.data) {
//           setClientProfile(response.data);
//         } else {
//           console.log("Data not available");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchClientProfile();
//   }, []);

//   return (
//     <Card 
//     //sx={{ maxWidth: "345", mt: 12, ml: "42%" }}
//     >
//       {clientProfile?.image && (
//         <CardMedia
//           component="img"
//           height="120"
//           /*image={clientProfile?.image}*/ image={Img}
//           alt={imageLabel}
//         />
//       )}
//       <CardContent>
//         <Typography sx={{
//           color: (theme) =>
//             theme.palette.mode === "light"
//               ? theme.palette.primary.lightModeHeroTitle
//               : theme.palette.primary.darkModeHeroTitle,
//               fontFamily:"Poppins", fontSize:'12px', textAlign:"center"
//         }}>
//           Hi, {user && user.names} {/* Provide the 'name' prop here */}
//         </Typography>
//         <Typography sx={{
//           color: (theme) =>
//             theme.palette.mode === "light"
//               ? theme.palette.primary.lightModeHeroTitle
//               : theme.palette.primary.darkModeHeroTitle,
//               fontFamily:"Poppins", fontSize:'11px', textAlign:"center"

//         }}>
//           {/* {clientProfile?.job_role} */}
//           {clientProfile ? clientProfile.job_role : jobTitle}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ClientProfile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ClientProfile = ({ name, jobTitle }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  const [clientProfile, setClientProfile] = useState(null);
  const imageLabel = "Profile Image";

  // Set up axios interceptor to add Authorization header
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
    const fetchClientProfile = async () => {
      try {
        const response = await axios.get(
          `ccobasi.pythonanywhere.com/user_profile/user-profile/${userId}/`
        );
        console.log(response.data);

        if (response.data) {
          setClientProfile(response.data);
        } else {
          console.log("Data not available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchClientProfile();
  }, [userId]);

  const imageUrl = clientProfile?.image ? `ccobasi.pythonanywhere.com${clientProfile.image}?timestamp=${Date.now()}` : null;

  return (
    <Card>
      {imageUrl && (
        <CardMedia
          component="img"
          height="120"
          image={imageUrl}
          alt={imageLabel}
        />
      )}
      <CardContent>
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            fontFamily: "Poppins",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          Hi, {user && user.names}
        </Typography>
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            fontFamily: "Poppins",
            fontSize: "11px",
            textAlign: "center",
          }}
        >
          {clientProfile ? clientProfile.job_role : jobTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClientProfile;
