import FreelancerEarning from "./EarningsCard";
import freelancerEarningData from "./earningData";

import  Grid  from "@mui/material/Grid";

function FreelancerFourthFeature() {
  //Data mapping
  let projectContainer = freelancerEarningData.map((el) => {
    return <FreelancerEarning key={el.id} {...el} />;
  });//Mapping End
  return (
    //Grid
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        
        maxWidth: "100%",
      }}
    >
      {projectContainer}
    </Grid>//Grid End
  );
}

export default FreelancerFourthFeature;