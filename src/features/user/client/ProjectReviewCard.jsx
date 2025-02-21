import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import  Button from "@mui/material/Button";
import Stack  from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export default function ProjectReviewCard({
  title,
  heading1,
  description1,
  heading2,
  description2,
  url,
  urlTitle,
  sourceSet,
  imageLabel,
}) {
  // Initialization of useNaviage hook
  let navigate = useNavigate();
  return (
    <>
    {/* Grid for client project review */}
      <Box sx={{ backgroundColor: "#edeffc" }}>
              <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Typography component="h4" variant="h6">
          {title}
        </Typography>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <Typography sx={{ mb: "5%" }}>{heading1}</Typography>
            <Typography>{description1}</Typography>
            <Stack direction="row" sx={{ justifyContent: "start" }}>
              <Typography>{title}</Typography>{" "}
            </Stack>
            <Divider sx={{ mt: "5%", mb: "5%" }} />
            <Stack direction="row" sx={{ justifyContent: "start" }}>
              <Avatar src={sourceSet} alt={imageLabel} />

              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300],
                  ml: "5%",
                }}
              >
                {heading2}
              </Typography>
            </Stack>
            <Stack direction="column">
              <Typography
                sx={{
                  justifyContent: "start",
                  ml: "15%",
                  mb: "5%",
                }}
              >
                {" "}
                {description2}
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate(url)}
                sx={{ width: "50%", ml: "15%" }}
              >
                {urlTitle}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      </Box>
      {/* Grid End */}
    </>
  );
}
