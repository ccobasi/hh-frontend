// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import { Card, CardContent, CardMedia, Rating, Box } from "@mui/material";
// import Avatar from "@mui/material/Avatar";

// export default function Talents({
//   sourceSet,
//   image,
//   imageLabel,
//   name,
//   jobTitle,
//   rating,
// }) {
//   return (
//     <>
//       {/* Grid for the Find Talents Feature */}
//       <Grid item xs={6} md={4} sx={{ mb: "10px" }}>
//         {/* Card for the feature */}
//         <Card sx={{ display: "flex", borderRadius: "24px" }}>
//           {/* Card Content for the feature */}
//           <CardContent
//             sx={{
//               flex: 1,
//               overflow: "hidden",
//               width: "155px",
//               height: "252px",
//               borderRadius: "16px",
//               boxShadow: "0px 4px 20px -10px #00000005",
//             }}
//           >
//             {/* Card Media*/}
//             <CardMedia
//               component="picture"
//               sx={{
//                 width: "156px",
//                 height: "70px",
//                 maxHeight: { xs: 48, sm: 50, md: 167, lg: 200 },
//                 maxWidth: { xs: 48, sm: 50, md: 167, lg: 200 },
//                 ml: { lg: "40%", md: "40%", sm: "40%", xs: "35%" },
//                 mb: { lg: "-30%", md: "-25%", sm: "-25%", xs: "-25%" },
//                 mt: { lg: "10%", md: "10%", sm: "10%", xs: "25%" },
//               }}
//             >
//               <Avatar
//                 src={image}
//                 alt={imageLabel}
//                 srcSet={sourceSet}
//                 style={{ height: "48px", width: "48px" }}
//               />
//             </CardMedia>
//             {/* Card Media End */}
//             {/* Name of the talent */}
//             <Typography
//               sx={{
//                 color: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.primary.lightModeHeroTitle
//                     : theme.palette.primary.darkModeHeroTitle,
//                 height: "14.93px",
//                 fontFamily: "Poppins",
//                 fontWeight: "600",
//                 fontSize: "14px",
//                 lineHeight: "18.2px",
//                 letterSpacing: "-1%",
//                 pb: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
//                 pt: { lg: "-7%", md: "35%", sm: "35%", xs: "35%" },
//                 textAlign: "center",
//               }}
//             >
//               {name}
//             </Typography>
//             {/* Name End */}
//             {/* Job Title */}
//             <Typography
//               sx={{
//                 color: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.primary.lightModeHeroTitle
//                     : theme.palette.primary.darkModeHeroTitle,
//                 textAlign: "center",
//                 height: "15.76px",
//                 fontFamily: "Poppins",
//                 fontWeight: "400",
//                 fontSize: "12px",
//                 lineHeight: "19.2px",
//                 letterSpacing: "-1%",
//               }}
//               component="legend"
//             >
//               {jobTitle}
//             </Typography>
//             {/* Job title End */}
//             {/* Readonly Job Rating  for small devices*/}
//             <Rating
//               name="job-rating"
//               value={rating}
//               readOnly
//               sx={{
//                 height: "14.93px",
//                 border: "1px solid #FFFFFF",
//                 color: "#FFDC5F",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 mt: { lg: "5%", md: "5%", sm: "5%", xs: "10%" },
//                 ml: { lg: "30%", md: "27%", sm: "27%", xs: "15%" },
//                 mb: { lg: "0%", md: "0%", sm: "5%", xs: "5%" },
//               }}
//             />
//             {/* Rating End */}
//           </CardContent>
//           {/* Card content End */}
//         </Card>
//         {/* Card End */}
//       </Grid>
//       {/* Grid */}
//     </>
//   );
// }
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, CardContent, CardMedia, Typography, Rating, Box, Avatar } from "@mui/material";

function Talents({ sourceSet, image, imageLabel, name, jobTitle, rating }) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        height: 'auto',
        maxWidth: '250px',
        m: 'auto', // Center the card horizontally
      }}
    >
      <CardMedia
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '150px',
          width: '100%',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Avatar
          src={image}
          alt={imageLabel}
          srcSet={sourceSet}
          sx={{ width: 80, height: 80 }}
        />
      </CardMedia>
      <CardContent sx={{ textAlign: 'center', padding: '16px' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '16px',
            color: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            mb: 1,
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '14px',
            color: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            mb: 2,
          }}
        >
          {jobTitle}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Rating
            name="job-rating"
            value={rating}
            readOnly
            sx={{ color: '#FFDC5F' }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Talents;
