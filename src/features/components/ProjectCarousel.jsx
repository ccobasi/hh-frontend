// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper } from "@mui/material";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button,  } from "@mui/material";
// import Stack from "@mui/material/Stack";
// import { Home } from "@mui/icons-material";

// const items = [
//   {
//     id: 0,
//     jobTitle: "Product Design",
//     company: "Google",
//     topic1: "Design",
//     topic2: "UI/UX",
//     rank: "Junior",
//     jobType: "UI Design Job",
//     sourceSet: "./frontend/dist/assets/greatProject.png, ",
//     image: "./frontend/dist/assets/greatProject.png",

//     imageLabel: "Product Design",
//   },

//   {
//     id: 1,
//     jobTitle: "Product Design",
//     company: "Google",
//     topic1: "Design",
//     topic2: "UI/UX",
//     rank: "Junior",
//     jobType: "UI Design Job",
//     sourceSet: "./frontend/dist/assets/greatProject.png, ",
//     image: "./frontend/dist/assets/greatProject.png",
//     imageLabel: "Product Design",
//   },
//   {
//     id: 2,
//     jobTitle: "Product Design",
//     company: "Google",
//     topic1: "Design",
//     topic2: "UI/UX",
//     rank: "Junior",
//     jobType: "UI Design Job",
//     sourceSet: "./frontend/dist/assets/greatProject.png, ",
//     image: "./frontend/dist/assets/greatProject.png",
    

//     imageLabel: "Product Design",
//   },

//   {
//     id: 3,
//     jobTitle: "Product Design",
//     company: "Google",
//     topic1: "Design",
//     topic2: "UI/UX",
//     rank: "Junior",
//     jobType: "UI Design Job",
//     sourceSet: "./frontend/dist/assets/greatProject.png, ",
//     image: "./frontend/dist/assets/greatProject.png",
//     imageLabel: "Product Design",
//   },
// ];

// export default function ProjectsCarousel() {
//   return (
//   <div >
//       <Carousel
//       animation="fade"
//       fullHeightHover={false}
//       indicatorIconButtonProps={{
//         style: {
//           padding: "4px",
//           width: "2%",
//           height: "2px",
//           margin: "5px",
//           fontWeight: "400",
//           color: "rgba(27, 33, 37, 0.23)",
//           borderRadius: "0px"
//         }
//       }}
     
//       activeIndicatorIconButtonProps={{
//         style: {
//           borderRadius: "100%",
//           fontSize: "6px",
//           color: "#000000",
//           // width: "2px",
//           // height: "2px",
//           // background: "rgba(39, 121, 245, 0.1)",
//           // boxShadow: "0px 2px 5px rgb(0 0 0 / 25%)"
//         }
//       }}
//       indicatorContainerProps={{
//         style:{
//           marginTop:'70px',
//           textAlign:'center',
//         }
//       }}
//       navButtonsAlwaysInvisible={true}
//       IndicatorIcon={<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
//         <circle cx="8" cy="8" r="8"/>
//       </svg>}
//     >
//       {items.map((item, i) => (
//         <GreatWork key={i} {...item} />
//       ))}
//     </Carousel>
//   </div>
//   );
// }

// const GreatWork = ({
//   jobTitle,
//   company,
//   topic1,
//   topic2,
//   rank,
//   jobType,
//   sourceSet,
//   image,
//   imageLabel,
// }) => {
//   return (
//     <>
//       {/* Grid for the Great Work Feature */}
//       <Paper
//         sx={
//           {
//             //borderRadius:"12px"
//           }
//         }
//       >
//         {/* Card for the Feature */}
//         <Card
//           sx={{
//             display: "flex",
//             backgroundColor: "#87CEEB",
//             p:'2px',
//             pb:'0px'
            
           
//             //borderRadius:"12px"
//           }}
//         >
//           {/* Card Content for the feature */}
//           <CardContent
//             sx={{ flex: 1,
//               // overflow: "hidden", width: "50%", m:'0px' 
//               }}
//           >
//             {/* Card Media for the feature */}
//             <CardMedia
//               component="picture"
//               sx={{
//                 height: "70px",
//                 maxHeight: { xs: 233, md: 167 },
//               }}
//             >
//               <source srcSet={sourceSet} />
//               <Stack direction="row" sx={{ ml: "12%", mt: "4%" }}>
//                 <img
//                   src={image}
//                   alt={imageLabel}
//                   style={{
//                     width: "56px",
//                     height: "56px",
//                     borderRadius: "12px",
//                   }}
//                 />
//                 {/* Heading for the Job title */}
//                 <Typography
//                   sx={{
//                     color: "#FFFFFF",
//                     fontFamily: "Poppins",
//                     fontWeight: "400",
//                     fontSize: "11px",
//                     lineHeight: "20.8px",
//                     letterSpacing: "1px",
//                     pt: "25px",
//                     ml: "5%",
//                   }}
//                 >
//                   {jobTitle} ,
//                 </Typography>
            
//                   <Typography
//                     sx={{
//                       color: "#FFFFFF",
//                       fontFamily: "Poppins",
//                       fontWeight: "400",
//                       fontSize: "11px",
//                       lineHeight: "21px",
//                       letterSpacing: "1px",
//                       pt: "25px",
//                       pb: "10px",
//                       ml: "1%",
//                     }}
//                   >
//                     {company}
//                   </Typography>
               
//               </Stack>
//             </CardMedia>
//             <Stack direction="row">
//               <Button
//                 variant="contained"
//                 disabled
//                 sx={{
//                   ml: "21%",
//                   fontFamily: "Poppins",
//                   fontWeight: "300",
//                   fontSize: "11px",
//                   lineHeight: "17.6px",
//                   letterSpacing: "1px",
//                   color: "#FFFFFF",
//                   width: "69px",
//                   height: "26px",
//                   borderRadius: "65px",
//                   backgroundColor: "#87CEEB",
//                   mt:'2%'
//                 }}
//               >
//                 {topic1}
//               </Button>
//               <Button
//                 variant="contained"
//                 disabled
//                 sx={{
//                   ml: "12%",
//                   fontFamily: "Poppins",
//                   fontWeight: "300",
//                   fontSize: "11px",
//                   lineHeight: "17.6px",
//                   letterSpacing: "1px",
//                   color: "#FFFFFF",
//                   width: "69px",
//                   height: "26px",
//                   borderRadius: "65px",
//                   backgroundColor: "#87CEEB",
//                   mt:'2%'
//                 }}
//               >
//                 {topic2}
//               </Button>
//               <Button
//                 variant="contained"
//                 disabled
//                 sx={{
//                   ml: "12%",
//                   fontFamily: "Poppins",
//                   fontWeight: "300",
//                   fontSize: "11px",
//                   lineHeight: "17.6px",
//                   letterSpacing: "1px",
//                   color: "#FFFFFF",
//                   width: "69px",
//                   height: "26px",
//                   borderRadius: "65px",
//                   backgroundColor: "#87CEEB",
//                   mt:'2%'
//                 }}
//               >
//                 {rank}
//               </Button>
//             </Stack>
//             <Typography
//               sx={{
//                 fontFamily: "Poppins",
//                 fontWeight: "400",
//                 fontSize: "12px",
//                 lineHeight: "20.8px",
//                 letterSpacing: "-1%",
//                 color: "#FFFFFF",
//                 width: "169px",
//                 height: "21px",
//                 mt: "1%",
//                 ml: "22%",
//               }}
//             >
//               {jobType}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Paper>
//     </>
//   );
// };
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Card, CardContent, CardMedia, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const BannerCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: theme.shadows[5],
  padding: "20px",
  margin: "10px",
  textAlign: "center",
  overflow: "hidden",
  height: "100%",
}));

const items = [
  {
    id: 0,
    jobTitle: "Product Design",
    company: "Google",
    topic1: "Design",
    topic2: "UI/UX",
    rank: "Junior",
    jobType: "UI Design Job",
    sourceSet: "./frontend/dist/assets/greatProject.png",
    image: "./frontend/dist/assets/greatProject.png",
    imageLabel: "Product Design",
  },
  {
    id: 1,
    jobTitle: "Product Design",
    company: "Google",
    topic1: "Design",
    topic2: "UI/UX",
    rank: "Junior",
    jobType: "UI Design Job",
    sourceSet: "./frontend/dist/assets/greatProject.png",
    image: "./frontend/dist/assets/greatProject.png",
    imageLabel: "Product Design",
  },
  {
    id: 2,
    jobTitle: "Product Design",
    company: "Google",
    topic1: "Design",
    topic2: "UI/UX",
    rank: "Junior",
    jobType: "UI Design Job",
    sourceSet: "./frontend/dist/assets/greatProject.png",
    image: "./frontend/dist/assets/greatProject.png",
    imageLabel: "Product Design",
  },
  {
    id: 3,
    jobTitle: "Product Design",
    company: "Google",
    topic1: "Design",
    topic2: "UI/UX",
    rank: "Junior",
    jobType: "UI Design Job",
    sourceSet: "./frontend/dist/assets/greatProject.png",
    image: "./frontend/dist/assets/greatProject.png",
    imageLabel: "Product Design",
  },
];

export default function ProjectsCarousel() {
  return (
    <div>
      <Carousel
        animation="fade"
        fullHeightHover={false}
        indicatorIconButtonProps={{
          style: {
            padding: "4px",
            width: "8px",
            height: "8px",
            margin: "5px",
            color: "rgba(27, 33, 37, 0.5)",
            borderRadius: "50%",
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            borderRadius: "50%",
            backgroundColor: "#87CEEB",
            width: "12px",
            height: "12px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
          }
        }}
        indicatorContainerProps={{
          style: {
            marginTop: '10px',
            textAlign: 'center',
          }
        }}
        navButtonsAlwaysInvisible={true}
      >
        {items.map((item, i) => (
          <GreatWork key={i} {...item} />
        ))}
      </Carousel>
    </div>
  );
}

const GreatWork = ({
  jobTitle,
  company,
  topic1,
  topic2,
  rank,
  jobType,
  sourceSet,
  image,
  imageLabel,
}) => {
  return (
    <BannerCard>
      <CardContent>
        <CardMedia
          component="picture"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <source srcSet={sourceSet} />
          <img
            src={image}
            alt={imageLabel}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          />
        </CardMedia>
        <Typography
          sx={{
            color: "#333333",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "1.4",
            letterSpacing:'1px',
            mb: "5px",
          }}
        >
          {jobTitle}
        </Typography>
        <Typography
          sx={{
            color: "#666666",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "1.4",
            mb: "10px",
          }}
        >
          {company}
        </Typography>
        <Stack direction="row" spacing={1} mb={2} sx={{backgroundColor:'#87CEEB', borderRadius:'16px'}}>
          <Button
            variant="contained"
            disabled
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "12px",
              color:'#000000',
              backgroundColor: "#87CEEB",
              borderRadius: "20px",
              padding: "5px 10px",
            }}
          >
            {topic1}
          </Button>
          <Button
            variant="contained"
            disabled
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "12px",
              color: "#000000",
              backgroundColor: "#87CEEB",
              borderRadius: "20px",
              padding: "5px 10px",
            }}
          >
            {topic2}
          </Button>
          <Button
            variant="contained"
            disabled
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "12px",
              color: "#000000",
              backgroundColor: "#87CEEB",
              borderRadius: "20px",
              padding: "5px 10px",
            }}
          >
            {rank}
          </Button>
        </Stack>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "1.5",
            color: "#333333",
            letterSpacing:'1px'
          }}
        >
          {jobType}
        </Typography>
      </CardContent>
    </BannerCard>
  );
};
