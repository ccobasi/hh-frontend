// import Talents from "./Talents";
// import homeTalentsData from "./homeTalentsData";
// import { Grid, Typography, Link } from "@mui/material";

// export const HomeTalents = () => {
//   {
//     /* Data mapping for the Talent Feature*/
//   }
//   let thirdContainer = homeTalentsData.map((el) => {
//     return <Talents key={el.id} {...el} />;
//   });
//   {
//     /* Mapping End*/
//   }
//   return (
//     <>
//       {/* Heading for the Feature*/}
//       <Typography
//         sx={{
//           color: (theme) =>
//             theme.palette.mode === "light"
//               ? theme.palette.primary.lightModeHeroTitle
//               : theme.palette.primary.darkModeHeroTitle,
//           fontFamily: "Poppins",
//           fontWeight: "600",
//           fontSize: "16px",
//           lineHeight: "20.8px",
//           // ml: "9%",
//           // pb: "15px",
//           // mt: "12%",
//           pb: {lg:'2%',md:"2%",sm:'1%',xs:'1%'},
//           mt: {lg:'5%',md:"5%",sm:'10%',xs:'10%'},
//           ml:{lg:'10%',md:"10%",sm:'10%',xs:'10%'},

//         }}
//       >
//         Find Talent Your Way
//       </Typography>
//       {/* Heading End*/}

//       {/* Grid for the Feature*/}
//       <Grid
//         container
//         spacing={4}
//         sx={{
//           // maxWidth: "100%",
//           // margin: "auto",
//           pb: {lg:'15%',md:"8%",sm:'1%',xs:'1%'},
//           mt: {lg:'0%',md:"0%",sm:'5%',xs:'5%'},
//           ml:{lg:'-2%',md:"-2%",sm:'2%',xs:'-2%'},

//         }}
//       >
//         {thirdContainer}
//       </Grid>
//       {/* Grid End*/}

//       {/* Link for Freelancer Search Feature*/}

//       {/* <Link
//         href="/freelancer-search"
//         sx={{
//           typography: (theme) => theme.typography.categoriesSeeAllLink,
//           ml: "67%",
//         }}
//       >
//         Freelancer Search
//       </Link> */}


//       {/* Link End*/}
//     </>
//   );
// };
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";
import Talents from "./Talents";
import talentData from "./talentData";

const TalentCarousel = () => {
  const [slider1, setSlider1] = useState(null);

  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "18px",
          lineHeight: "24px",
          textAlign: "center",
          color: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,
          mb: 4,
          mt: 4,
        }}
      >
        Find Talent Your Way
      </Typography>
      <Slider {...settings} ref={(slider) => setSlider1(slider)}>
        {talentData.map((item) => (
          <div key={item.id} style={{ padding: '0 10px' }}>
            <Talents {...item} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TalentCarousel;
