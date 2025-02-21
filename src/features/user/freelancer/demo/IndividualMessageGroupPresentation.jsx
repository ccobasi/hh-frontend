import IndividualMessageCard from "./IndividualMessageCard";
import individualFeatureData from "./individualFeature";
import { Grid } from "@mui/material";

export const IndividualMessageGroup = () => {
  // Data mapping
  let individualContainer = individualFeatureData.map((el, index) => {
    return <IndividualMessageCard key={index} {...el} />;
  });
  // Mapping End
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
      {individualContainer}
    </Grid>
    // Grid End
  );
};

export default IndividualMessageGroup ;