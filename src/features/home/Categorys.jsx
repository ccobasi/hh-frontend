import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar  from "@mui/material/Avatar";

export default function Categories({jobTitle,sourceSet, image, imageLabel}) {
  return (
    <>
      {/* Grid for the Categories Feature*/}
      <Grid item xs={6} md={4} sx={{ mb: "10px" }}>
        {/* Card for the Feature*/}
        <Card
          sx={{
            display: "flex",
            backgroundColor: '	#fff',
                borderRadius:"16px",
                
          }}
        >
          {/* Card Content for the Feature*/}
          <CardContent
            sx={{
              flex: 1,
              overflow: "hidden",
              width: "155px",
              height: "122px",
              borderRadius: "16px",
              boxShadow: "0px 4px 20px -10px #00000005",
            }}
          >
            {/* Card Media for the Feature*/}
            <CardMedia
              component="picture"
              sx={{
                height: "48px",
                width: "48px",
                borderRadius: "116px",
                maxHeight: { xs: 48,sm:50, md: 167, lg:200 },
                maxWidth: { xs: 48,sm:50,  md: 167, lg:200 },
               // ml:{lg:'40%',md:"40%",sm:'40%',xs:'35%'},
               mb: {lg:'-5%',md:"-5%",sm:'-5%',xs:'-5%'},
              ml:'6px'
              }}
            >
              
              <Avatar src={image} alt={imageLabel} srcSet={sourceSet} style={{width:"48px", height:"48px"}} />
            </CardMedia>
            {/* Card Media End */}
            {/* Heading for Job Title */}
            <Typography
              variant="body2"
              sx={{ fontFamily: "Poppins", 
                fontWeight: "400", 
                fontSize: "8px",
                 lineHeight: "12.8px", 
                letterSpacing:'1.5px',
                textAlign: 'center',
                color:'#000000',
                // color: (theme) =>
                //   theme.palette.mode === 'light'
                //    ? theme.palette.primary.lightModeHeroTitle
                //     : theme.palette.primary.darkModeHeroTitle,
                
          pb: "20px",
                pt: "20px", ml:'-15px'}}

            >
              {jobTitle}
            </Typography>
            {/* Heading End */}
          </CardContent>
          {/* Card Content End */}
        </Card>
        {/* Card End */}
      </Grid>
      {/* Grid End */}
    </>
  );
}
