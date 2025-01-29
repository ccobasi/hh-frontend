import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ClientProjectReviewFirstFeature } from "./ClientProjectReview";


export default function ProjectReviewPage() {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Client Feature*/}

      {/*First Heading*/}
    

      {/*First Client Project Review Feature*/}
      <Box sx={{backgroundColor:"#edeffc"}}>
 
        <ClientProjectReviewFirstFeature />
      </Box>
      {/*Second Heading*/}

      {/*Third Heading*/}

      {/*Fourth Heading*/}
    </>
  );
}
