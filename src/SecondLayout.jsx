import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SecondHeader from "./app/layout/header/SecondHeader";

//import FooterSection from "./app/layout/footer/FooterSection";
import FooterSection from "./features/layout/FooterSection";


const SecondLayout = () => {
 

 

  return (
    <>
      
    <SecondHeader/>
      <Outlet />
  


<Box sx={{display:{xs:"none", md:"flex"}, }}>
<FooterSection />
</Box>
 
    </>
  );
};

export default SecondLayout;
