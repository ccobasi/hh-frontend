import  Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Location from "../../components/Location"



export default function LocationPage() {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Client Feature*/}

      {/*First Heading*/}
      <Typography
        variant="h6"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],

          textAlign: "center",
          mt: "5%",
        }}
      >
        Job Location
      </Typography>

      {/*First Client Location Feature*/}
      <Location/>

      {/*Second Heading*/}

      {/*Third Heading*/}

      {/*Fourth Heading*/}
    </>
  );
}
