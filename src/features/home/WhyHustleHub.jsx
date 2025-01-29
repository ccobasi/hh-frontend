import Typography from "@mui/material/Typography";

export default function WhyHustleHub({ title, description }) {
  return (
    <>
      {/* Heading for the WhyHustleHub Feature */}
      <Typography
        gutterBottom
        sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "12px", lineHeight: "20.8px", textAlign: "start",
          letterSpacing:'1px',
          
          color: (theme) =>
            theme.palette.mode === 'light'
             ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,
       pb: { lg: "3%", md: "3%", sm: "3%", xs: "3%" },
    mt: { lg: "3%", md: "5%", sm: "10%", xs: "10%" },
    ml: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
}}
      >
        {title}
      </Typography>
      {/* Heading End */}
      {/* Description */}
      <Typography
        paragraph
        sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
          pb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
          ml: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
          mr: "2%",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "11px",
                letterSpacing:'1px',
      lineHeight: "20.8px",
              }}
      
      >
        {description}
      </Typography>
      {/* Description End */}
    </>
  );
}
