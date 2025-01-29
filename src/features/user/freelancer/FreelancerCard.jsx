import FreelancerCard from "./FreelancerCardContainer";
import freelancerCardData from "./freelancerCardData";

import { Grid } from "@mui/material";

const FreelancerFirstFeature = () => {
  
  //Data mapping
  let cardContainer = freelancerCardData.map((el) => {
    return <FreelancerCard key={el.id} {...el} />;
  });//mapping End
  return (
    //Grid 
    <Grid
      container
      
    >
      {cardContainer}
      
    </Grid>//Grid End
  );
};

export default FreelancerFirstFeature;