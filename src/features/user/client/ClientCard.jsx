import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import  Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import  Stack  from "@mui/material/Stack";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Avatar from "@mui/material/Avatar";
export default function ClientCard({
  sourceSet,
  image,
  imageLabel,
  name,
  jobTitle,
}) {
  return (
    <>
      {/* Grid for client card */}
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{ boxShadow: 0 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={imageLabel}
              sourceSet={sourceSet}
              src={image}
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
              {name}
            </Typography>
            <Stack direction="row">
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
                {jobTitle}
              </Typography>
              <VerifiedOutlinedIcon
                sx={{ width: "12px", color: "#5386E4", height: "12px" }}
                className="clientVerifiedIcon"
              />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      {/* Grid End */}
    </>
  );
}
