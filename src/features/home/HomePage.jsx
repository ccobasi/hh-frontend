import { useNavigate } from "react-router-dom";
import { HomeCategories } from "./HomeCategories";
import { WhyBusinessesTurnToHustleHub } from "./WhyHustleHubFeature";
import { Container } from "@mui/material";
import { HeroSection } from "./HeroSection";
import TalentCarousel from "../../features/components/TalentCarousel";
import ProjectsCarousel from "../../features/components/ProjectCarousel";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import {  useTheme,
  useMediaQuery,} from "@mui/material";
import TestimonialsCarousel from "../../features/components/TestimonialsCarousel";
import { MakeHeroSection } from "./MakeHeroSection";
// import { MakeLatestJobOpportunities} from  "./MakeLatestJobOpportunities"
import { MakeTalentCategory } from "./MakeTalentCategory";
import {MakePopularitySection} from "./MakePopularitySection";
import MakeCommentSection  from "./MakeCommentSection";
import {MakeExplorationSection} from "./MakeExplorationSection";
// import { MakeLatestJobOpportunities2 } from "./Demo2";
import { MakeLatestJobOpportunities3 } from "./MakeLatestJobOpportunities";




export default function HomePage() {
  let navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));



  return (
    <>
      <Container component="main"  maxWidth={isMobile ? "xs" : "md"}  >
        {/* <HeroSection />   <Container component="main" maxWidth="xs"> maxWidth={isMobile ? "xs" : "lg"}*/}
        <MakeHeroSection/>

     
       <MakeLatestJobOpportunities3/>
        <MakeTalentCategory/>

        <MakePopularitySection/>
         < MakeCommentSection/> 
         {/* <GridWithTwoUnequalColumns/> */}
         <MakeExplorationSection/>

       
     
        {/* <MakeTalentCategory/> */}
        {/* <HomeCategories />
        
   
        <TalentCarousel /> */}
        {/* <WhyBusinessesTurnToHustleHub />*/}
        {/* <TestimonialsCarousel />  */}
        {/* <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "20.8px",
            textAlign: "start",
            letterSpacing: "1px",

            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            ml: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
            mb: { lg: "1%", md: "5%", sm: "5%", xs: "5%" },
            pt: { lg: "8%", md: "10%", sm: "20%", xs: "20%" },
            mt: "15%",
          }}
        >
          Find Great Work
        </Typography> */}

        {/* Heading for the Great Work Projects */}
        {/* <Stack direction="row">
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "20.8px",
              textAlign: "start",
              letterSpacing: "1px",

              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
              pt: "10px",
              ml: { lg: "10%", md: "15%", sm: "15%", xs: "10%" },
              mb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
            }}
          >
            Featured Projects
          </Typography>
        </Stack> */}

        {/* <ProjectsCarousel /> */}
        {/* Button for Find Opportunities*/}

        {/* <Button
          onClick={() => navigate("/browse-project")}
          variant="contained"
          sx={{
            backgroundColor: "#ded0e3",
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[500],
            },
            ml: { lg: "10%", md: "15%", sm: "15%", xs: "10%" },
            mb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
            width: "128.59px",
            height: "24px",
            borderRadius: "5px",
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "10px",
            lineHeight: "20px",
            letterSpacing: "-0.5",
          }}
        >
          Find Opportunities
        </Button> */}
      </Container>
    </>
  );
}
