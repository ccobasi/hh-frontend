import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Rating, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";




const testimonialData = [
    {
        id:0,
        name: "Emily Willis",
    
        description: "Outstanding services",
        rank: "Founder & CEO",
        sourceSet:
          "./frontend/dist/assets/emilyWillis.png, ",
        image: "./frontend/dist/assets/emilyWillis.png",
    
        imageLabel: ".Emily Willis",
      },
    
      {
        id:1,
        name: "Joy Nelson",
    
        description: "Outstanding services",
        sourceSet:
        "./frontend/dist/assets/emilyWillis1.png, ",
        image: "./frontend/dist/assets/emilyWillis1.png",
        imageLabel: ".Business Analysis",
      },
      {
        id:2,
        name: "Peterson Water",
    
        description: "Outstanding services",
        rank: "Founder & CEO",
        sourceSet:
        "./frontend/dist/assets/emilyWillis2.png, ",
        image: "./frontend/dist/assets/emilyWillis2.png",
        imageLabel: ".Peterson Water",
      },

      {
        id:3,
        name: "Amanda Snow",
    
        description: "Outstanding services",
        rank: "Founder & CEO",
        sourceSet:
        "./frontend/dist/assets/emilyWillis3.png, ",
        image: "./frontend/dist/assets/emilyWillis3.png",
        imageLabel: ".Amanda Snow",
      },
  ];


  function Testimonials({
    sourceSet,
    image,
    imageLabel,
    name,
    description,
    rank,
  }) {
    return (
      <>
           {/* Card */}
           <Grid item xs={6} md={8}  >
          <Card sx={{ display: "flex", 
          justifyContent:'center',        
 backgroundColor: "#fff",
             borderRadius: "24px" ,
             width: { xs: "80%", sm: "70%", md: "70%", lg: "50%" } 
             }}>
            {/* Card content */}
            <CardContent
              sx={{
                flex: 1,
                //overflow: "hidden",
                height: "200px",  
               
              }}
            >
              {/* Card media */} 
             <CardMedia
                component="picture"
                sx={{
                  maxHeight: { xs: 48, sm: 50, md: 167, lg: 200 },
                  maxWidth: { xs: 48, sm: 50, md: 167, lg: 200 },
                  ml: { lg: "40%", md: "40%", sm: "40%", xs: "42%" },
                  mb: { lg: "-35%", md: "-35%", sm: "-35%", xs: "-25%" },
               
                }}
              >
                <Avatar src={image} alt={imageLabel} srcSet={sourceSet} style={{background:"linear-gradient(to right bottom, #0038F0, #299DF2)",}}/>
              </CardMedia>

              {/* Card Media End */}
              {/* Talent's name, job title and rating  */}
              <Stack direction="column" justifyContent='center'>
                <Typography
                  sx={{ fontFamily: "Poppins", 
                    fontWeight: "400", 
                    fontSize: "11px",
                     lineHeight: "11.8px", 
                    letterSpacing:'1px',
                    textAlign: 'center',
                    
color:"#000000",

                    // color: (theme) =>
                    //   theme.palette.mode === 'light'
                    //    ? theme.palette.primary.lightModeHeroTitle
                    //     : theme.palette.primary.darkModeHeroTitle,
     pb: { lg: "10%", md: "10%", sm: "6%", xs: "10%" },
                        pt: { lg: "40%", md: "40%", sm: "40%", xs: "40%" },
                    
              }}
                >
                  {description}
                </Typography>
                <Typography
                variant="body2"
                sx={{
                 
                  color:"#000000",
                  pb: "5px",
                  mt: "6px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "11px",
                  letterSpacing:'1px',
  textAlign: "center",
                  lineHeight: "-5.8px",
  
                }}
                
                >
                  {name}
                </Typography>
                
                <Typography
                variant="body2"
                sx={{
                  
                  color:"#000000",
                  pb: "5px",
                  mt: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "11px",
                  letterSpacing:'1px',
  textAlign: "center",
                  lineHeight: "-5.8px",
  
                }}
                
                >
                  {rank}
                </Typography>
                
              
              
             
              </Stack>
            </CardContent>
          </Card>
          </Grid>
      </>
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
  
const  MakeCommentSection = () => {
    const [nav1, setNav1] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slider1, setSlider1] = useState(null);
    useEffect(() => {
      setNav1(slider1);
    }, [slider1]);
  
    const settings = {
      dots: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
      autoplaySpeed: 2000,
      lazyLoad: true,
      asNavFor: ".slider-nav",
      focusOnSelect: true,
      nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
 

      responsive: [
        {
          breakpoint: 1024,
          settings: {
           slidesToShow: 2,
          }
        },
        // {
        //     breakpoint: 1000,
        //     settings: {
        //      slidesToShow: 2,
        //     }
        //    },
        {
            //{min:640, max:767}
            //600
          breakpoint:600,
          settings: {
           slidesToShow: 1,
          }
         }
       
         

      ]
    };

    
    return <> 
    <div>
 {/* Heading and Link for the Feature*/}
 <Stack direction="column">
        <Typography
//           
// }}
variant="h4" sx={{
  color: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.primary.lightModeHeroTitle
      : theme.palette.primary.darkModeHeroTitle,
      letterSpacing:"1px",
      fontFamily:"Poppins",
      mb:"2%",mt:{xs:"93%", sm:"92%", md:"30%",lg:"20%"}
}}
        >
          Client's comments
        </Typography>

        <Typography  
      

        variant="body1" sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,
              letterSpacing:"1px",
              fontSize:"16", fontWeight:"400",
              fontFamily:"Poppins",
              mb:"6%",
        }}
        
        >

          
        </Typography>

       
      </Stack>
     
    </div>

    <div className="testimonialContent">
     <div className="testimonialContainer">
      <Slider {...settings}
          asNavFor={nav1}
          ref={(slider) => setSlider1(slider)}
      >
        {testimonialData.map((item) => (
          <div  key={item.id}>
            <div className="testimonialBody">
            <Testimonials {...item}/>
            </div>
          </div>
        ))}
      </Slider>
    </div> 
  </div> </>;
  };
  export default MakeCommentSection;

