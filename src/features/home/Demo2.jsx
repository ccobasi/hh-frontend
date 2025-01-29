import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box,Paper , AvatarGroup, Avatar, Tab,
   Tabs} from "@mui/material";
import {Rating} from "@mui/material";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import TalentCarousel from "../components/TalentCarousel";
import ProjectsCarousel from "../components/ProjectCarousel";
import {Stack} from "@mui/material";
import {Divider} from "@mui/material";
import {Chip} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState ,useEffect} from "react";
import { GroupOutlined } from "@mui/icons-material";


 function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>

      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;



export const heroData = {

  col1: {
    title:"Find Your Dream Job",
    subtitle: "Freelance Jobs and Talents at Your Fingertips",
    description: "Connect with top freelancers and clients on our platform! Find your perfect match for your next project.",

  },

  col2:{
    cardBg: "/assets/removal.png",
      cardBgSourceSet:"",
  }
}





export function HeroSection(props) {
  const { data } = props;

  return (
   <Grid container>
     <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {data.col1.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {data.col1.subtitle}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {data.col1.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={""}
            alt={""}
          />
        </Card>
      </CardActionArea>

      <CardActionArea component="a" href="#">
        {/* <Card sx={{ display: "flex" }}> */}
        <Card
          sx={{
            display: "flex",
            mt: "10%",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
            backgroundImage: `url(${data.col2.cardBg})`,
            height: "250px",
            width: "457px",
            boxShadow: "0",
            sourceSet: `url(${data.col2.cardBgSourceSet})`,
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={""}
            alt={""}
          />
        </Card>
      </CardActionArea>
    </Grid>

   </Grid>
  );
}










const BasicGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Setting up the Fluid Grid system */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="grid-elements">xs=6</div>
        </Grid>
        <Grid item xs={6}>
          <div className="grid-elements">xs=6</div>
        </Grid>
        <Grid item xs={8}>
          <div className="grid-elements">xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div className="grid-elements">xs=8</div>
        </Grid>
      </Grid>
    </Box>
  );
};








const ComplexFluidGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <div className="grid-elements">xs=6 md=8</div>
        </Grid>
        <Grid item xs={6} md={4}>
          <div className="grid-elements">xs=6 md=4</div>
        </Grid>
        <Grid item xs={6} md={4}>
          <div className="grid-elements">xs=6 md=4</div>
        </Grid>
        <Grid item xs={6} md={8}>
          <div className="grid-elements">xs=6 md=8</div>
        </Grid>
      </Grid>
    </Box>
  );
};


export const GridDemo =()=>{
  return (<>
  <Grid container>
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"red"}}>
        Col 1
        </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"bisque"}}>
        Col 2
        </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"gold"}}>
        Col 3
        </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"brown"}}>
        Col 4
        </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"palevioletred"}}>
        Col 5
        </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"yellowgreen"}}>
        Col 6
        </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"whitesmoke"}}>
        Col 7
        </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"gainsboro"}}>
        Col 8
        </Box>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"blanchedalmond"}}>
        Col 9
        </Box>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"goldenrod"}}>
        Col 10
        </Box>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"blueviolet"}}>
        Col 11
        </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{backgroundColor:"burlywood"}}>
        Col 12
        </Box>
    </Grid>

  </Grid>
  </>);
}


export const GridWithThreeColumns =()=>{

  return(
    <>
    <Grid container spacing={3}>
      <Grid xs> 
        <Box sx={{backgroundColor:"red"}}>
        Col 1
        </Box>
        
      </Grid>
      <Grid xs={6}> 
      <Box sx={{backgroundColor:"green"}}>
        Col 2
        </Box>
        
        
      </Grid>
      <Grid xs> 
      <Box sx={{backgroundColor:"pink"}}>
        Col 3
        </Box>
        
      </Grid>

    </Grid>
    </>
  );
} 


export const GridWithTwoUnequalColumns =()=>{

  return(
    <>
   <Box sx={{flexGrow: 1}}>
   <Grid container spacing={3}>
      <Grid xs={9}> 
        <Box sx={{backgroundColor:"red", }}>
        Col 1
      


      
          
       



      
      
        </Box>
        <Box sx={{backgroundColor:"red", }}>
        Col 1
      


      
          
       



      
      
        </Box>
        <Box sx={{backgroundColor:"red", }}>
       <Stack direction="row">
<Typography>Stacked </Typography>
<Typography>Stacked </Typography>
       </Stack>
      


      
          
       



      
      
        </Box>

      
      </Grid>
    
      <Grid xs> 
      <Box sx={{backgroundColor:"pink", }}>
        Col 2

      
        
        </Box>
        <Box sx={{backgroundColor:"pink", }}>
        Col 2

      
        
        </Box>
        <Box sx={{backgroundColor:"pink", }}>
        Col 2

      
        
        </Box>

        
        
      </Grid>

    </Grid>

   </Box>

    
    </>
  );
} 



  
  











// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardActionArea from "@mui/material/CardActionArea";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";

//  function FeaturedPost(props) {
//   const { post } = props;

//   return (
//     <Grid item xs={12} md={6}>
//       <CardActionArea component="a" href="#">
//         <Card sx={{ display: "flex" }}>
//           <CardContent sx={{ flex: 1 }}>
//             <Typography component="h2" variant="h5">
//               {post.title}
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary">
//               {post.date}
//             </Typography>
//             <Typography variant="subtitle1" paragraph>
//               {post.description}
//             </Typography>
//             <Typography variant="subtitle1" color="primary">
//               Continue reading...
//             </Typography>
//           </CardContent>
//           <CardMedia
//             component="img"
//             sx={{ width: 160, display: { xs: "none", sm: "block" } }}
//             image={post.image}
//             alt={post.imageLabel}
//           />
//         </Card>
//       </CardActionArea>
//     </Grid>
//   );
// }

// export default FeaturedPost;






























export const MakeLatestJobOpportunities2 = () => {
  const [value, setValue] = React.useState(0);

  const testimonialData = [
    {
        id:0,
        name: "Emily Willis",
    
        jobTitle: "Outstanding Service",
        rating: 5,
        sourceSet:
          "./frontend/dist/assets/emilyWillis.png, ",
        image: "./frontend/dist/assets/emilyWillis.png",
    
        imageLabel: "Emily Willis",
      },
    
      {
        id:1,
        name: "Joy Nelson",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis1.png, ",
        image: "./frontend/dist/assets/emilyWillis1.png",
        imageLabel: "Business Analysis",
      },
      {
        id:2,
        name: "Peterson Water",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis2.png, ",
        image: "./frontend/dist/assets/emilyWillis2.png",
        imageLabel: "Peterson Water",
      },

      {
        id:3,
        name: "Amanda Snow",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis3.png, ",
        image: "./frontend/dist/assets/emilyWillis3.png",
        imageLabel: "Amanda Snow",
      },
  ];


  const demoData = [
    {
        id:0,
        name: "Demo",
    
        jobTitle: "Outstanding Service",
        rating: 5,
        sourceSet:
          "./frontend/dist/assets/emilyWillis.png, ",
        image: "./frontend/dist/assets/emilyWillis.png",
    
        imageLabel: "Emily Willis",
      },
    
      {
        id:1,
        name: "Joy Demo",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis1.png, ",
        image: "./frontend/dist/assets/emilyWillis1.png",
        imageLabel: "Business Analysis",
      },
      {
        id:2,
        name: "Peterson Demo",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis2.png, ",
        image: "./frontend/dist/assets/emilyWillis2.png",
        imageLabel: "Peterson Water",
      },

      {
        id:3,
        name: "Amanda Demo",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis3.png, ",
        image: "./frontend/dist/assets/emilyWillis3.png",
        imageLabel: "Amanda Snow",
      },
  ];

  const oneData = [
    {
        id:0,
        name: "Demo 1",
    
        jobTitle: "Outstanding Service",
        rating: 5,
        sourceSet:
          "./frontend/dist/assets/emilyWillis.png, ",
        image: "./frontend/dist/assets/emilyWillis.png",
    
        imageLabel: "Emily Willis",
      },
    
      {
        id:1,
        name: "Joy Demo 1",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis1.png, ",
        image: "./frontend/dist/assets/emilyWillis1.png",
        imageLabel: "Business Analysis",
      },
      {
        id:2,
        name: "Peterson Demo 1",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis2.png, ",
        image: "./frontend/dist/assets/emilyWillis2.png",
        imageLabel: "Peterson Water",
      },

      {
        id:3,
        name: "Amanda Demo 1",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis3.png, ",
        image: "./frontend/dist/assets/emilyWillis3.png",
        imageLabel: "Amanda Snow",
      },
  ];


  const twoData = [
    {
        id:0,
        name: "Demo 2",
    
        jobTitle: "Outstanding Service",
        rating: 5,
        sourceSet:
          "./frontend/dist/assets/emilyWillis.png, ",
        image: "./frontend/dist/assets/emilyWillis.png",
    
        imageLabel: "Emily Willis",
      },
    
      {
        id:1,
        name: "Joy Demo 2",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis1.png, ",
        image: "./frontend/dist/assets/emilyWillis1.png",
        imageLabel: "Business Analysis",
      },
      {
        id:2,
        name: "Peterson Demo 2",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis2.png, ",
        image: "./frontend/dist/assets/emilyWillis2.png",
        imageLabel: "Peterson Water",
      },

      {
        id:3,
        name: "Amanda Demo 2",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis3.png, ",
        image: "./frontend/dist/assets/emilyWillis3.png",
        imageLabel: "Amanda Snow",
      },
  ];


  const threeData = [
    {
        id:0,
        name: "Demo 3",
    
        jobTitle: "Outstanding Service",
        rating: 5,
        sourceSet:
          "./frontend/dist/assets/emilyWillis.png, ",
        image: "./frontend/dist/assets/emilyWillis.png",
    
        imageLabel: "Emily Willis",
      },
    
      {
        id:1,
        name: "Joy Demo 3",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis1.png, ",
        image: "./frontend/dist/assets/emilyWillis1.png",
        imageLabel: "Business Analysis",
      },
      {
        id:2,
        name: "Peterson Demo3",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis2.png, ",
        image: "./frontend/dist/assets/emilyWillis2.png",
        imageLabel: "Peterson Water",
      },

      {
        id:3,
        name: "Amanda Demo 3",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis3.png, ",
        image: "./frontend/dist/assets/emilyWillis3.png",
        imageLabel: "Amanda Snow",
      },
  ];





 


  function Item  ({ sourceSet,
    image,
    imageLabel,
    name,
    jobTitle,
    rating,}){

    return(<>
      <Grid container   sx={{justifyContent:"center"}}>
          <Grid item xs={6} md={6} 
          spacing={0}
         
          >
         
          <Card sx={{ display: "flex", 
          justifyContent:'center',
          backgroundColor:'	#fff',
          height:{sm:"200px", xs:"240px"},  
             
             width:{sm:"200px", xs:"240px",md:"260px"},  
             }}>
            <CardContent   >
              <CardMedia
                component="picture"
                sx={{
                  display: "flex", 
          justifyContent:'center',
                }}
                
              >
                <Avatar src={image} alt={imageLabel} srcSet={sourceSet} />
              </CardMedia>

              <Stack direction="column" 
              justifyContent='center'>
                <Typography
                  sx={{ fontFamily: "Poppins", 
                    fontWeight: "400", 
                    fontSize: "11px",
                     lineHeight: "39.8px", 
                    letterSpacing:'1px',
                    textAlign: 'center',
                    color:'#000000',
                        
              }}
                >
                  {name}
                </Typography>
                <Typography
                variant="body2"
                sx={{
                  color:'#000000',
                     pb: "5px",
                  //mt: "-26px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "11px",
                  letterSpacing:'1px',
  textAlign: "center",
                  lineHeight: "-5.8px",
  
                }}
                
                >
                  {jobTitle}
                </Typography>
              
               <Rating
                  name="job-rating"
                  value={rating}
                  sx={{
                    height: "12px",
                width:'12px',
                    border: "1px solid #FFFFFF",
                    color: "#FFDC5F",
                    textAlign: "match-parent",
                                 }}
                />
             
              </Stack>
            </CardContent>
          </Card>
        
        
          </Grid>
          </Grid>
    </>);
  }


  
  
  
  const TabPanel = ({children, value, index})=>{
    return value === index && <Box style={{display:"flex",
      width:"100%", position:"relative"
    }}>{children}</Box>;
  }
 
  const ItemOne = ()=>{
    return (
     <TabPanel>
       {testimonialData.map((item) => (
        <div  key={item.id}>
          <div className="testimonialBody">
          <Item {...item}/>
          </div>
        </div>
      ))}
     </TabPanel>
    );
  }

  
  const ItemTwo = ()=>{
    return (
     <TabPanel>
       {demoData.map((item) => (
        <div  key={item.id}>
          <div className="testimonialBody">
          <Item {...item}/>
          </div>
        </div>
      ))}
     </TabPanel>
    );
  }

  const ItemThree = ()=>{
    return (
     <TabPanel>
       {oneData.map((item) => (
        <div  key={item.id}>
          <div className="testimonialBody">
          <Item {...item}/>
          </div>
        </div>
      ))}
     </TabPanel>
    );
  }


  const ItemFour = ()=>{
    return (
     <TabPanel>
       {twoData.map((item) => (
        <div  key={item.id}>
          <div className="testimonialBody">
          <Item {...item}/>
          </div>
        </div>
      ))}
     </TabPanel>
    );
  }


  const ItemFive = ()=>{
    return (
     <TabPanel>
       {threeData.map((item) => (
        <div  key={item.id}>
          <div className="testimonialBody">
          <Item {...item}/>
          </div>
        </div>
      ))}
     </TabPanel>
    );
  }
 

  const tabData = [
  {
    label: "Item One", content: <ItemOne/>
  
  },
  {
    label: "Item Two", content:  <ItemTwo/>
  
  },
  {
    label: "Item Three", content:  <ItemThree/>
  
  },
  {
    label: "Item Four", content:  <ItemFour/>
  
  },
  {
    label: "Item Five", content:  <ItemFive/>
  
  },
  
  ];
    return (
      <Box sx={{ flexGrow: 1 , height:'250px', 
      mt:{xs:"150%", sm:"85%"}, position:"relative", width:"auto"}}>
        {/* Setting up the Fluid Grid system */}
        <Grid container spacing={0}>
        {/* Col1 */}
  
        <Grid item  xs={12} md={6} sx={{
          height:"250px"
        }}>
  
         <Tabs value={value} onChange={(_event, newValue)=> setValue(newValue)}
          orientation="vertical" 
          sx={{width: "150px"}}>
            {tabData.map((tab, index)=>(
              <Tab key={index} label={tab.label}/>
            ))}
         </Tabs>
          </Grid>
          {/* End col1 */}
  
          {/* Col2 */}
          <Grid item  xs={12} md={6} 
          sx={{
         ml:{sm:"0px",md:"-250px"},
         overflow: "auto",
        }}
        >
          {tabData.map((tab, index)=>(
             <TabPanel key={index} value={value} index={index}>
          {tab.content}
             </TabPanel>
          ))}     
          </Grid>
          {/* End col2  */}
        
       
        </Grid>
      </Box>
    );
  
  };
  





  
// export const MakeLatestJobOpportunities2 = () => {
//   const [value, setValue] = React.useState(0);

//   const testimonialData = [
//     {
//         id:0,
//         name: "Emily Willis",
    
//         jobTitle: "Outstanding Service",
//         rating: 5,
//         sourceSet:
//           "./frontend/dist/assets/emilyWillis.png, ",
//         image: "./frontend/dist/assets/emilyWillis.png",
    
//         imageLabel: "Emily Willis",
//       },
    
//       {
//         id:1,
//         name: "Joy Nelson",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis1.png, ",
//         image: "./frontend/dist/assets/emilyWillis1.png",
//         imageLabel: "Business Analysis",
//       },
//       {
//         id:2,
//         name: "Peterson Water",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis2.png, ",
//         image: "./frontend/dist/assets/emilyWillis2.png",
//         imageLabel: "Peterson Water",
//       },

//       {
//         id:3,
//         name: "Amanda Snow",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis3.png, ",
//         image: "./frontend/dist/assets/emilyWillis3.png",
//         imageLabel: "Amanda Snow",
//       },
//   ];


//   const demoData = [
//     {
//         id:0,
//         name: "Demo",
    
//         jobTitle: "Outstanding Service",
//         rating: 5,
//         sourceSet:
//           "./frontend/dist/assets/emilyWillis.png, ",
//         image: "./frontend/dist/assets/emilyWillis.png",
    
//         imageLabel: "Emily Willis",
//       },
    
//       {
//         id:1,
//         name: "Joy Demo",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis1.png, ",
//         image: "./frontend/dist/assets/emilyWillis1.png",
//         imageLabel: "Business Analysis",
//       },
//       {
//         id:2,
//         name: "Peterson Demo",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis2.png, ",
//         image: "./frontend/dist/assets/emilyWillis2.png",
//         imageLabel: "Peterson Water",
//       },

//       {
//         id:3,
//         name: "Amanda Demo",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis3.png, ",
//         image: "./frontend/dist/assets/emilyWillis3.png",
//         imageLabel: "Amanda Snow",
//       },
//   ];

//   const oneData = [
//     {
//         id:0,
//         name: "Demo 1",
    
//         jobTitle: "Outstanding Service",
//         rating: 5,
//         sourceSet:
//           "./frontend/dist/assets/emilyWillis.png, ",
//         image: "./frontend/dist/assets/emilyWillis.png",
    
//         imageLabel: "Emily Willis",
//       },
    
//       {
//         id:1,
//         name: "Joy Demo 1",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis1.png, ",
//         image: "./frontend/dist/assets/emilyWillis1.png",
//         imageLabel: "Business Analysis",
//       },
//       {
//         id:2,
//         name: "Peterson Demo 1",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis2.png, ",
//         image: "./frontend/dist/assets/emilyWillis2.png",
//         imageLabel: "Peterson Water",
//       },

//       {
//         id:3,
//         name: "Amanda Demo 1",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis3.png, ",
//         image: "./frontend/dist/assets/emilyWillis3.png",
//         imageLabel: "Amanda Snow",
//       },
//   ];


//   const twoData = [
//     {
//         id:0,
//         name: "Demo 2",
    
//         jobTitle: "Outstanding Service",
//         rating: 5,
//         sourceSet:
//           "./frontend/dist/assets/emilyWillis.png, ",
//         image: "./frontend/dist/assets/emilyWillis.png",
    
//         imageLabel: "Emily Willis",
//       },
    
//       {
//         id:1,
//         name: "Joy Demo 2",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis1.png, ",
//         image: "./frontend/dist/assets/emilyWillis1.png",
//         imageLabel: "Business Analysis",
//       },
//       {
//         id:2,
//         name: "Peterson Demo 2",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis2.png, ",
//         image: "./frontend/dist/assets/emilyWillis2.png",
//         imageLabel: "Peterson Water",
//       },

//       {
//         id:3,
//         name: "Amanda Demo 2",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis3.png, ",
//         image: "./frontend/dist/assets/emilyWillis3.png",
//         imageLabel: "Amanda Snow",
//       },
//   ];


//   const threeData = [
//     {
//         id:0,
//         name: "Demo 3",
    
//         jobTitle: "Outstanding Service",
//         rating: 5,
//         sourceSet:
//           "./frontend/dist/assets/emilyWillis.png, ",
//         image: "./frontend/dist/assets/emilyWillis.png",
    
//         imageLabel: "Emily Willis",
//       },
    
//       {
//         id:1,
//         name: "Joy Demo 3",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis1.png, ",
//         image: "./frontend/dist/assets/emilyWillis1.png",
//         imageLabel: "Business Analysis",
//       },
//       {
//         id:2,
//         name: "Peterson Demo3",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis2.png, ",
//         image: "./frontend/dist/assets/emilyWillis2.png",
//         imageLabel: "Peterson Water",
//       },

//       {
//         id:3,
//         name: "Amanda Demo 3",
    
//         jobTitle: "Outstanding Service",
//         rating: 4,
//         sourceSet:
//         "./frontend/dist/assets/emilyWillis3.png, ",
//         image: "./frontend/dist/assets/emilyWillis3.png",
//         imageLabel: "Amanda Snow",
//       },
//   ];





 


//   function Item  ({ sourceSet,
//     image,
//     imageLabel,
//     name,
//     jobTitle,
//     rating,}){

//     return(<>
//       <Grid container   sx={{justifyContent:"center"}}>
//           <Grid item xs={6} md={6} 
//           spacing={0}
         
//           >
         
//           <Card sx={{ display: "flex", 
//           justifyContent:'center',
//           backgroundColor:'	#fff',
//           height:{sm:"200px", xs:"240px"},  
             
//              width:{sm:"200px", xs:"240px",md:"260px"},  
//              }}>
//             <CardContent   >
//               <CardMedia
//                 component="picture"
//                 sx={{
//                   display: "flex", 
//           justifyContent:'center',
//                 }}
                
//               >
//                 <Avatar src={image} alt={imageLabel} srcSet={sourceSet} />
//               </CardMedia>

//               <Stack direction="column" 
//               justifyContent='center'>
//                 <Typography
//                   sx={{ fontFamily: "Poppins", 
//                     fontWeight: "400", 
//                     fontSize: "11px",
//                      lineHeight: "39.8px", 
//                     letterSpacing:'1px',
//                     textAlign: 'center',
//                     color:'#000000',
                        
//               }}
//                 >
//                   {name}
//                 </Typography>
//                 <Typography
//                 variant="body2"
//                 sx={{
//                   color:'#000000',
//                      pb: "5px",
//                   //mt: "-26px",
//                   fontFamily: "Poppins",
//                   fontWeight: "400",
//                   fontSize: "11px",
//                   letterSpacing:'1px',
//   textAlign: "center",
//                   lineHeight: "-5.8px",
  
//                 }}
                
//                 >
//                   {jobTitle}
//                 </Typography>
              
//                <Rating
//                   name="job-rating"
//                   value={rating}
//                   sx={{
//                     height: "12px",
//                 width:'12px',
//                     border: "1px solid #FFFFFF",
//                     color: "#FFDC5F",
//                     textAlign: "match-parent",
//                                  }}
//                 />
             
//               </Stack>
//             </CardContent>
//           </Card>
        
        
//           </Grid>
//           </Grid>
//     </>);
//   }


  
  
  
//   const TabPanel = ({children, value, index})=>{
//     return value === index && <Box style={{display:"flex",
//       width:"100%", position:"relative"
//     }}>{children}</Box>;
//   }
 
//   const ItemOne = ()=>{
//     return (
//      <TabPanel>
//        {testimonialData.map((item) => (
//         <div  key={item.id}>
//           <div className="testimonialBody">
//           <Item {...item}/>
//           </div>
//         </div>
//       ))}
//      </TabPanel>
//     );
//   }

  
//   const ItemTwo = ()=>{
//     return (
//      <TabPanel>
//        {demoData.map((item) => (
//         <div  key={item.id}>
//           <div className="testimonialBody">
//           <Item {...item}/>
//           </div>
//         </div>
//       ))}
//      </TabPanel>
//     );
//   }

//   const ItemThree = ()=>{
//     return (
//      <TabPanel>
//        {oneData.map((item) => (
//         <div  key={item.id}>
//           <div className="testimonialBody">
//           <Item {...item}/>
//           </div>
//         </div>
//       ))}
//      </TabPanel>
//     );
//   }


//   const ItemFour = ()=>{
//     return (
//      <TabPanel>
//        {twoData.map((item) => (
//         <div  key={item.id}>
//           <div className="testimonialBody">
//           <Item {...item}/>
//           </div>
//         </div>
//       ))}
//      </TabPanel>
//     );
//   }


//   const ItemFive = ()=>{
//     return (
//      <TabPanel>
//        {threeData.map((item) => (
//         <div  key={item.id}>
//           <div className="testimonialBody">
//           <Item {...item}/>
//           </div>
//         </div>
//       ))}
//      </TabPanel>
//     );
//   }
 

//   const tabData = [
//   {
//     label: "Item One", content: <ItemOne/>
  
//   },
//   {
//     label: "Item Two", content:  <ItemTwo/>
  
//   },
//   {
//     label: "Item Three", content:  <ItemThree/>
  
//   },
//   {
//     label: "Item Four", content:  <ItemFour/>
  
//   },
//   {
//     label: "Item Five", content:  <ItemFive/>
  
//   },
  
//   ];
//     return (
//       <Box sx={{ flexGrow: 1 , height:'250px', 
//       mt:{xs:"150%", sm:"85%"}, position:"relative", width:"auto"}}>
//         {/* Setting up the Fluid Grid system */}
//         <Grid container spacing={0}>
//         {/* Col1 */}
  
//         <Grid item  xs={12} md={6} sx={{
//           height:"250px"
//         }}>
  
//          <Tabs value={value} onChange={(_event, newValue)=> setValue(newValue)}
//           orientation="vertical" 
//           sx={{width: "150px"}}>
//             {tabData.map((tab, index)=>(
//               <Tab key={index} label={tab.label}/>
//             ))}
//          </Tabs>
//           </Grid>
//           {/* End col1 */}
  
//           {/* Col2 */}
//           <Grid item  xs={12} md={6} 
//           sx={{
//          ml:{sm:"0px",md:"-250px"},
//          overflow: "auto",
//         }}
//         >
//           {tabData.map((tab, index)=>(
//              <TabPanel key={index} value={value} index={index}>
//           {tab.content}
//              </TabPanel>
//           ))}     
//           </Grid>
//           {/* End col2  */}
        
       
//         </Grid>
//       </Box>
//     );
  
//   };
  
  
  