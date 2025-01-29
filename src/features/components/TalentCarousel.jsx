// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useState, useEffect } from "react";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import { Card, CardContent, CardMedia, Rating, Box } from "@mui/material";
// import Avatar from "@mui/material/Avatar";

const talentData = [
  {
    id: 0,
    name: "John Doe",

    jobTitle: "Backend Developer",
    rating: 5,
    sourceSet: "./frontend/dist/assets/johnDoe.png,",
    image: "./frontend/dist/assets/johnDoe.png",

    imageLabel: "John Doe",
  },

  {
    id: 1,
    name: "John Doe",

    jobTitle: "Backend Developer",
    rating: 4,
    sourceSet: "./frontend/dist/assets/johnDoe.png,",
    image: "./frontend/dist/assets/johnDoe.png",
    imageLabel: "John Doe",
  },
  {
    id: 2,
    name: "John Doe",

    jobTitle: "Backend Developer",
    rating: 4,
    sourceSet: "./frontend/dist/assets/johnDoe.png,",
    image: "./frontend/dist/assets/johnDoe.png",
    imageLabel: "John Doe",
  },

  {
    id: 3,
    name: "John Doe",

    jobTitle: "Backend Developer",
    rating: 4,
    sourceSet: "./frontend/dist/assets/johnDoe.png,",
    image: "./frontend/dist/assets/johnDoe.png",
    imageLabel: "John Doe",
  },
];

// function Talents({ sourceSet, image, imageLabel, name, jobTitle, rating }) {
//   return (
//     <>
//       {/* Card for the feature */}
//       <Grid item xs={6} md={4} sx={{ mb: "10px" }}>
//         <Card
//           sx={{
//             display: "flex",
//             backgroundColor:'	#cfecf7'
//             //borderRadius: "24px",
//           }}
//         >
//           {/* Card Content for the feature */}
//           <CardContent
//             sx={{
//               flex: 1,
//               overflow: "hidden",
//               width: "155px",
//               height: "250px",
//               borderRadius: "16px",
//               boxShadow: "0px 4px 20px -10px #00000005",
//             }}
//           >
//             {/* Card Media*/}
//             <CardMedia
//               component="picture"
//               sx={{
//                 width: "156px",
//                 height: "40px",
//                 maxHeight: { xs: 48, sm: 50, md: 167, lg: 200 },
//                 maxWidth: { xs: 48, sm: 50, md: 167, lg: 200 },
//                 ml: { lg: "40%", md: "40%", sm: "40%", xs: "35%" },
//                 mb: { lg: "-30%", md: "-25%", sm: "-25%", xs: "-25%" },
//                 mt: { lg: "10%", md: "10%", sm: "10%", xs: "25%" },
//               }}
//             >
//               <Avatar
//                 src={image}
//                 alt={imageLabel}
//                 srcSet={sourceSet}
//                 style={{ height: "48px", width: "48px" }}
//               />
//             </CardMedia>
//             {/* Name of the talent */}
//             <Typography
//               sx={{ fontFamily: "Poppins", 
//                 fontWeight: "400", fontSize: "11px", lineHeight: "5.8px", 
//                 textAlign: 'center',
//                 color: (theme) =>
//                   theme.palette.mode === 'light'
//                    ? theme.palette.primary.lightModeHeroTitle
//                     : theme.palette.primary.darkModeHeroTitle,
                
//           pb: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
//                 pt: { lg: "-7%", md: "35%", sm: "35%", xs: "35%" },}}
//             >
//               {name}
//             </Typography>
//             {/* Job Title */}
//             <Typography
//               sx={{
//                 color: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.primary.lightModeHeroTitle
//                     : theme.palette.primary.darkModeHeroTitle,
//                 pb: "5px",
//                 pt: "3px",
//                 fontFamily: "Poppins",
//                 fontWeight: "400",
//                 fontSize: "11px",
//                 letterSpacing:'1px',
// textAlign: "center",
//                 lineHeight: "5.8px",

//               }}
//               variant="body2"
//             >
//               {jobTitle}
//             </Typography>
//             {/* Readonly Job Rating  for  devices*/}
//             <Rating
//               name="job-rating"
//               value={rating}
//               readOnly
//               sx={{
//                 height: "12px",
//                 width:'12px',
//                 border: "1px solid #FFFFFF",
//                 color: "#FFDC5F",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 mt: { lg: "5%", md: "5%", sm: "5%", xs: "2%" },
//                 ml: { lg: "3%", md: "3%", sm: "1%", xs: "1%" },
//                 mb: { lg: "0%", md: "0%", sm: "5%", xs: "5%" },
//               }}
//             />
//           </CardContent>
//         </Card>
//       </Grid>
//     </>
//   );
// }

// const TalentCarousel = () => {
//   const [nav1, setNav1] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slider1, setSlider1] = useState(null);
//   useEffect(() => {
//     setNav1(slider1);
//   }, [slider1]);

//   const settings = {
//     dots: true,
//     speed: 2000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//     autoplay: true,
//     onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
//     autoplaySpeed: 2000,
//     lazyLoad: true,
//     asNavFor: ".slider-nav",
//     focusOnSelect: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div >
//         <Typography
         
//  sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "12px", lineHeight: "20.8px", textAlign: "start",
//   letterSpacing:'1px',
 
//   color: (theme) =>
//     theme.palette.mode === 'light'
//      ? theme.palette.primary.lightModeHeroTitle
//       : theme.palette.primary.darkModeHeroTitle,
// pb: { lg: "2%", md: "2%", sm: "1%", xs: "1%" },
// mt: { lg: "5%", md: "5%", sm: "10%", xs: "10%" },
// ml: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
// }}

//         >
//           Find Talent Your Way
//         </Typography>
//       </div>
//       <div className="talentContent">
//         <div className="talentContainer">
//           <Slider
//             {...settings}
//             asNavFor={nav1}
//             ref={(slider) => setSlider1(slider)}
//           >
//             {talentData.map((item) => (
//               <div key={item.id}>
//                 <div className="talentBody">
//                   <Talents {...item} />
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TalentCarousel;
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, CardContent, CardMedia, Typography, Rating, Avatar, Box, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function Talents({ sourceSet, image, imageLabel, name, jobTitle, rating }) {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ padding: '8px' }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#cfecf7',
          borderRadius: '16px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          height: 'auto',
          maxWidth: '250px',
          overflow: 'hidden',
          margin: 'auto',
        }}
      >
        <CardMedia
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px',
            width: '100%',
            backgroundColor: '#f5f5f5',
          }}
        >
          <Avatar
            src={image}
            alt={imageLabel}
            srcSet={sourceSet}
            sx={{ width: 80, height: 80 }}
          />
        </CardMedia>
        <CardContent sx={{ textAlign: 'center', padding: '16px' }}>
          <Typography
            
            sx={{
              fontWeight: "400", 
                    fontSize: "11px",
                     lineHeight: "39.8px", 
                    letterSpacing:'1px',
                    textAlign: 'center',
              // color: (theme) =>
              //   theme.palette.mode === 'light'
              //     ? theme.palette.primary.lightModeHeroTitle
              //     : theme.palette.primary.darkModeHeroTitle,
              //
              color:'#000000',
              mb: 1,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: "400",
              fontSize: "11px",
              letterSpacing:'1px',
textAlign: "center",
              lineHeight: "-5.8px",
              color:'#000000',
              // color: (theme) =>
              //   theme.palette.mode === 'light'
              //     ? theme.palette.primary.lightModeHeroTitle
              //     : theme.palette.primary.darkModeHeroTitle,
              // 
              mb: 2,
            }}
          >
            {jobTitle}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Rating
              name="job-rating"
              value={rating}
              readOnly
              sx={{ color: '#FFDC5F' }}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      // style={{ ...style, display: "block", background: "background.default" }}
      // onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      // style={{ ...style, display: "block", background: "green" }}
      // onClick={onClick}
    />
  );
}


const TalentCarousel = () => {
  const [slider1, setSlider1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
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
          fontSize: "12px", 
          lineHeight: "20.8px", 
          textAlign: "start",
          letterSpacing:'1px',
          color: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,
          // mb: 4,
           mt: 4,
          pb: {lg:'5%',md:"6%",sm:'1%',xs:'1%'},
        ml:{lg:'10%',md:"10%",sm:'10%',xs:'10%'},

        }}
      >
        Find Talent Your Way
      </Typography>
      <Slider {...settings} ref={(slider) => setSlider1(slider)}>
        {talentData.map((item) => (
          <Talents key={item.id} {...item} />
        ))}
      </Slider>
    </>
  );
};

export default TalentCarousel;

