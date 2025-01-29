import CompaniesCard from "./CompaniesCard";
import companiesFeatureData from "./companiesFeatureData";
import { Grid } from "@mui/material";

const CompaniesMessageGroup = () => {
  // Data mapping
  let companiesContainer = companiesFeatureData.map((el,index) => {
    return <CompaniesCard key={index} {...el} />;
  });
  //Mapping End
  return (
    // Grid
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "100%",
      }}
    >
      {companiesContainer}
    </Grid>
    // Grid End
  );
};

export default CompaniesMessageGroup;
