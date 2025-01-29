import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box,Avatar, Tab,
   Tabs} from "@mui/material";
import {Stack} from "@mui/material";
import {Divider} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GroupOutlined } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const productManagerData = [
  {
    id:0,
    jobTitle: "Product Designer",
    jobType:"Full Time",
    rank: "Manager",
    salary:"#75k - #100k",
    createdAt:"1 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Gitlab",
    numOfStaffs:"1200-1300",
    numOfJobs:"20",
    color:"#FFDC5F"
  },
  {
    id:1,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:2,
    jobTitle: "Creative Director",
    jobType:"Full Time",
    rank: "Designer",
    salary:"#175k - #200k",
    createdAt:"5 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Github",
    numOfStaffs:"6200-4000",
    numOfJobs:"20",
    color:"#2F6AD8"
  },

];

const extraData = [
  {
    id:3,
    jobTitle: "Creative Director",
    jobType:"Full Time",
    rank: "Designer",
    salary:"#175k - #200k",
    createdAt:"5 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Github",
    numOfStaffs:"6200-4000",
    numOfJobs:"20",
    color:"#2F6AD8"
  },{
    id:4,
    jobTitle: "Product Designer",
    jobType:"Full Time",
    rank: "Manager",
    salary:"#75k - #100k",
    createdAt:"1 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Gitlab",
    numOfStaffs:"1200-1300",
    numOfJobs:"20",
    color:"#FFDC5F"
  },
  {
    id:5,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:6,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:7,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:8,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:9,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:10,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:11,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:12,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:13,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:14,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:15,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:16,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:17,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:18,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:19,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:20,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:21,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:22,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
]


const designData = [
  {
    id:0,
    jobTitle: " Designer",
    jobType:"Full Time",
    rank: "Manager",
    salary:"#75k - #100k",
    createdAt:"1 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Gitlab",
    numOfStaffs:"1200-1300",
    numOfJobs:"20",
    color:"#FFDC5F"
  },
  {
    id:1,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:2,
    jobTitle: "Creative Director",
    jobType:"Full Time",
    rank: "Designer",
    salary:"#175k - #200k",
    createdAt:"5 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Github",
    numOfStaffs:"6200-4000",
    numOfJobs:"20",
    color:"#2F6AD8"
  },
  {
    id:3,
    jobTitle: "Creative Director",
    jobType:"Full Time",
    rank: "Designer",
    salary:"#175k - #200k",
    createdAt:"5 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Github",
    numOfStaffs:"6200-4000",
    numOfJobs:"20",
    color:"#2F6AD8"
  },{
    id:4,
    jobTitle: "Product Designer",
    jobType:"Full Time",
    rank: "Manager",
    salary:"#75k - #100k",
    createdAt:"1 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Gitlab",
    numOfStaffs:"1200-1300",
    numOfJobs:"20",
    color:"#FFDC5F"
  },
  {
    id:5,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
];


const developmentData = [
  {
    id:0,
    jobTitle: "Developer",
    jobType:"Full Time",
    rank: "Manager",
    salary:"#75k - #100k",
    createdAt:"1 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Gitlab",
    numOfStaffs:"1200-1300",
    numOfJobs:"20",
    color:"#FFDC5F"
  },
  {
    id:1,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:2,
    jobTitle: "Creative Director",
    jobType:"Full Time",
    rank: "Designer",
    salary:"#175k - #200k",
    createdAt:"5 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Github",
    numOfStaffs:"6200-4000",
    numOfJobs:"20",
    color:"#2F6AD8"
  },
  {
    id:3,
    jobTitle: "Creative Director",
    jobType:"Full Time",
    rank: "Designer",
    salary:"#175k - #200k",
    createdAt:"5 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Github",
    numOfStaffs:"6200-4000",
    numOfJobs:"20",
    color:"#2F6AD8"
  },{
    id:4,
    jobTitle: "Product Designer",
    jobType:"Full Time",
    rank: "Manager",
    salary:"#75k - #100k",
    createdAt:"1 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Gitlab",
    numOfStaffs:"1200-1300",
    numOfJobs:"20",
    color:"#FFDC5F"
  },
  {
    id:5,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
];


const marketingData = [
  {
    id:0,
    jobTitle: "Marketing",
    jobType:"Full Time",
    rank: "Manager",
    salary:"#75k - #100k",
    createdAt:"1 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Gitlab",
    numOfStaffs:"1200-1300",
    numOfJobs:"20",
    color:"#FFDC5F"
  },
  {
    id:1,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:2,
    jobTitle: "Creative Director",
    jobType:"Full Time",
    rank: "Designer",
    salary:"#175k - #200k",
    createdAt:"5 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Github",
    numOfStaffs:"6200-4000",
    numOfJobs:"20",
    color:"#2F6AD8"
  },
  {
    id:3,
    jobTitle: "Creative Director",
    jobType:"Full Time",
    rank: "Designer",
    salary:"#175k - #200k",
    createdAt:"5 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Github",
    numOfStaffs:"6200-4000",
    numOfJobs:"20",
    color:"#2F6AD8"
  },{
    id:4,
    jobTitle: "Product Designer",
    jobType:"Full Time",
    rank: "Manager",
    salary:"#75k - #100k",
    createdAt:"1 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Gitlab",
    numOfStaffs:"1200-1300",
    numOfJobs:"20",
    color:"#FFDC5F"
  },
  {
    id:5,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
];


const customerServiceData = [
  {
    id:0,
    jobTitle: "Customer Service",
    jobType:"Full Time",
    rank: "Manager",
    salary:"#75k - #100k",
    createdAt:"1 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Gitlab",
    numOfStaffs:"1200-1300",
    numOfJobs:"20",
    color:"#FFDC5F"
  },
  {
    id:1,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
  {
    id:2,
    jobTitle: "Creative Director",
    jobType:"Full Time",
    rank: "Designer",
    salary:"#175k - #200k",
    createdAt:"5 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Github",
    numOfStaffs:"6200-4000",
    numOfJobs:"20",
    color:"#2F6AD8"
  },
  {
    id:3,
    jobTitle: "Creative Director",
    jobType:"Full Time",
    rank: "Designer",
    salary:"#175k - #200k",
    createdAt:"5 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Github",
    numOfStaffs:"6200-4000",
    numOfJobs:"20",
    color:"#2F6AD8"
  },{
    id:4,
    jobTitle: "Product Designer",
    jobType:"Full Time",
    rank: "Manager",
    salary:"#75k - #100k",
    createdAt:"1 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Gitlab",
    numOfStaffs:"1200-1300",
    numOfJobs:"20",
    color:"#FFDC5F"
  },
  {
    id:5,
    jobTitle: "Senior Designer",
    jobType:"Full Time",
    rank: "Head of Design",
    salary:"#85k - #100k",
    createdAt:"4 hour ago",
    companyLogo:"./revomal.png",
    companyLogoLabel:"./revomal.png",
    sourceSet: "./revomal.png, ",
    company:"Hotjar",
    numOfStaffs:"140-300",
    numOfJobs:"40",
    color:"#FFDC5F"
  },
];



// export const MakeLatestJobOpportunities = () => {
//     const [value, setValue] = React.useState(0);

   
  
  
//     function Job  ({ id, jobTitle, jobType,
//       rank,
//       salary,
//       createdAt,companyLogo,
//       companyLogoLabel,
//        sourceSet,
//        company,
//        numOfStaffs,
//        numOfJobs,
//        color
    
      
      
//     }){
  
//       return(<>

    
//         <Grid container   sx={{justifyContent:"center"}}>
//             <Grid item xs={6} md={4} 
//             //spacing={0}
           
//             >
           
//             <Card sx={{ display: "flex", 
//             justifyContent:'center',
//             backgroundColor: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.grey[100]
//                 : theme.palette.grey[900],
//             height:{sm:"240px", xs:"240px", md:"260px"},  
               
//                width:{sm:"200px", xs:"240px",md:"260px"},  
//                fontFamily:"Poppins",
//                borderRadius:"16px"
//                }} key={id}>
//               <CardContent   >
//                 <Typography sx={{textAlign:"center",mt:"10px",color: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.primary.lightModeHeroTitle
//                 : theme.palette.primary.darkModeHeroTitle,}}>
//                 {jobTitle}
               
        
//                 </Typography>
//               <Stack direction="row" 
//                 justifyContent="space-evenly" sx={{display:"flex", p:"5px"}}>
//                   <Typography
//                      variant="body2"
//                      sx={{
//                        color:'#000000',
                       
//                        fontFamily: "Poppins",
//                        fontWeight: "400",
//                        fontSize: "11px",
//                        letterSpacing:'1px',
//        textAlign: "center",
//                        lineHeight: "-5.8px",
//                        backgroundColor:"wheat",
//                        borderRadius:"10px",
//                        p:"2px",
                       
       
//                      }}
//                   >
//                     {jobType}
//                   </Typography>
//                   <Typography
//                   variant="body2"
//                   sx={{
//                     color:'#000000',
//                     fontFamily: "Poppins",
//                     fontWeight: "400",
//                     fontSize: "11px",
//                     letterSpacing:'1px',
//     textAlign: "center",
//                     lineHeight: "-5.8px",
//                      backgroundColor:"wheat",
//                        borderRadius:"10px",p:"2px",
    
//                   }}
                  
//                   >
//                     {rank}
//                   </Typography>
              
               
//                 </Stack>
//                 <Typography
//                  sx={{color:{color}, textAlign:"center", p:"5px",pt:"7px"}}
//                  >
//                   {salary}
//                 </Typography>
//                 <Stack direction="row" justifyContent="space-evenly"
//                 sx={{mt:"30px"}}>
//                   <Divider 
//                     sx={{
//                       width: "100px",
//                       color: (theme) =>
//                         theme.palette.mode === "light"
//                           ? theme.palette.primary.lightModeTitleTextColor
//                           : theme.palette.primary.darkModeTitleTextColor,
//                     }}
//                   /><Typography sx={{fontSize:"10px"}}>{createdAt}</Typography>
//                 </Stack>
//                <Stack direction="row" style={{marginTop:"10px"}} >
//                <CardMedia
//                   component="picture"
//                   sx={{
//                     display: "flex", 
//             justifyContent:'start',
//                   }}
                  
//                 >
//                   <Avatar src={companyLogo} alt={companyLogoLabel}
//                    srcSet={sourceSet} />
//                 </CardMedia>
//                 <Stack direction="column"
//                 sx={{ml:"-69%"}}
               
                
//                 >
//                   <Typography sx={{ color: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.primary.lightModeHeroTitle
//                 : theme.palette.primary.darkModeHeroTitle,}}>{company}</Typography>
//                   <Stack direction="row" style={{display:"flex"}}>
//                     <GroupOutlined/>
//                     <Typography variant="body2"  sx={{fontSize:"10px"}}>{numOfStaffs}</Typography>
//                   </Stack>
  
//                 </Stack>
//                   <Typography variant="body2" sx={{fontSize:"10px", mt:"24px", 
//                     backgroundColor:"wheat", borderRadius:"16px", width:"50px",
//                     p:"6px",color:'#000000',
//                   }}>
//                     {numOfJobs}jobs
//                   </Typography>
//                </Stack>
  
              
//               </CardContent>
//             </Card>
          
          
//             </Grid>
//             </Grid>
//       </>);
//     }




    
    

    
//     const TabPanel = ({children, value, index})=>{
//       return value === index && <Box style={{display:"flex",
//         width:"100%", position:"relative"
//       }}>{children}</Box>;
//     }
    
//     const Label = ({label, data, color})=>{
  
//      const  numOfOpening = data.length;
    
  
//       return(
//         <Stack direction="row" >
//           <Typography>{label}</Typography>
//           <Typography 
//           sx={{color:{color}, borderRadius:"10px" ,backgroundColor:"skyblue", width:"32px", height:"25px",
//             padding:"1px", m:"1px",mr:"6px"
//           }}> 
//             {numOfOpening}</Typography>
           
//         </Stack>
//       );
//     }
  
//     const ProductManagementLabel = ()=>{
//       return(
//         <Label label="Product Management" 
//         data={productManagerData}
//         color="#FFDC5F"
//         />
//       );
//     }

//     const DesignLabel = ()=>{
//       return(
//         <Label label="Design" 
//         data={designData}
//         color="#FFDC5F"
//         />
//       );
//     }

//     const DevelopmentLabel = ()=>{
//       return(
//         <Label label="Development" 
//         data={developmentData}
//         color="#FFDC5F"
//         />
//       );
//     }

//     const MarketingLabel = ()=>{
//       return(
//         <Label label="Marketing" 
//         data={marketingData}
//         color="#FFDC5F"
//         />
//       );
//     }

//     const CustomerServiceLabel = ()=>{
//       return(
//         <Label label="Customer Service" 
//         data={customerServiceData}
//         color="#FFDC5F"
//         />
//       );
//     }
    



//     const ProductManagementCard =()=>{
//       return (
//         <TabPanel>
//           {productManagerData.map((item) => (
//            <div  key={item.id}>
//              <div className="testimonialBody">
//              <Job {...item}/>
//              </div>
//            </div>
//          ))}
//         </TabPanel>
//        );
//     }

//     const DesignCard =()=>{
//       return (
//         <TabPanel>
//           {designData.map((item) => (
//            <div  key={item.id}>
//              <div className="testimonialBody">
//              <Job {...item}/>
//              </div>
//            </div>
//          ))}
//         </TabPanel>
//        );
//     }
   
//     const DevelopmentCard =()=>{
//       return (
//         <TabPanel>
//           {developmentData.map((item) => (
//            <div  key={item.id}>
//              <div className="testimonialBody">
//              <Job {...item}/>
//              </div>
//            </div>
//          ))}
//         </TabPanel>
//        );
//     }
  
//     const MarketingCard =()=>{
//       return (
//         <TabPanel>
//           {marketingData.map((item) => (
//            <div  key={item.id}>
//              <div className="testimonialBody">
//              <Job {...item}/>
//              </div>
//            </div>
//          ))}
//         </TabPanel>
//        );
//     }

//     const CustomerServiceCard =()=>{
//       return (
//         <TabPanel>
//           {customerServiceData.map((item) => (
//            <div  key={item.id}>
//              <div className="testimonialBody">
//              <Job {...item}/>
//              </div>
//            </div>
//          ))}
//         </TabPanel>
//        );
//     }

//     const tabData = [
   
//     {
//       label: <ProductManagementLabel/>, content:  <ProductManagementCard/>,
//       label: <DesignLabel/>, content:  <DesignCard/>,
//       label: <DevelopmentLabel/>, content:  <DevelopmentCard/>,
//       label: <MarketingLabel/>, content:  <MarketingCard/>,
//       label: <CustomerServiceLabel/>, content:  <CustomerServiceCard/>,
    
//     }
    
//     ];
//       return (
//         <><Box sx={{
//           flexGrow: 1, height: '250px',
//           mt: { xs: "185%", sm: "115%", md: "55%" ,lg:"35%"},
//           position: "relative", width: "auto"
//         }}>
//           <Typography variant="h4" sx={{
//             color: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.primary.lightModeHeroTitle
//                 : theme.palette.primary.darkModeHeroTitle,
//                 letterSpacing:"1px",
//                 fontFamily:"Poppins",
//                 mb:"4%"
//           }}><strong style={{ color: "#2F6AD8" }}>Latest </strong>Job Opportunities </Typography>
//           {/* Setting up the Fluid Grid system */}
//           <Grid container spacing={0}>
//             {/* Col1 */}

//             <Grid item xs={12} md={6} sx={{
//               height: "250px"
//             }}>

//               <Tabs value={value} onChange={(_event, newValue) => setValue(newValue)}
//                 orientation="vertical"
//                 sx={{ width: "250px",
        
//                   //height:"100%" 
//                   //height:{xs:"10%"}
                
//                 }}>
//                 {tabData.map((tab, index) => (
//                   <Tab key={index} label={tab.label} 
//                    //sx={{mt:{xs:"100px"}}}
                   
//                    />
//                 ))}
//               </Tabs>
//             </Grid>
//             {/* End col1 */}

//             {/* Col2 */}
//             <Grid item xs={12} md={6}
//               sx={{
//                 ml: { sm: "0px", md: "-250px" },
//                 overflow: "auto",
                
//               }}
//             >
//               {tabData.map((tab, index) => (
//                 <TabPanel key={index} value={value} index={index}>
//                   {tab.content}
//                 </TabPanel>
//               ))}
//             </Grid>
//             {/* End col2  */}


//           </Grid>
//         </Box></>
//       );
    
//     };
    





    
export const MakeLatestJobOpportunities3 = () => {
  const [value, setValue] = React.useState(0);

  //Job card
  function Job  ({ id, jobTitle, jobType,
    rank,
    salary,
    createdAt,companyLogo,
    companyLogoLabel,
     sourceSet,
     company,
     numOfStaffs,
     numOfJobs,
     color,
     isFirstCard, }){
    return(<>

  
      <Grid container   sx={{justifyContent:"center", }}>
          <Grid item xs={6} md={4}  >
         
          <Card sx={{ display: "flex", 
          justifyContent:'center',
          background: isFirstCard
      ? "linear-gradient(159.69deg, rgba(0, 56, 240, 0.94) 5.04%, rgba(41, 157, 242, 0.75) 98.97%)"
      : "#E4EEFC",
          height:{sm:"240px", xs:"240px", md:"260px"},  
             width:{sm:"200px", xs:"240px",md:"250px"},  
             fontFamily:"Poppins",
             borderRadius:"16px"
             }} key={id}>
            <CardContent   >
              <Typography sx={{textAlign:"center",mt:"10px",color: "#000000",}}>
              {jobTitle}
              </Typography>
            <Stack direction="row" 
              justifyContent="space-evenly" sx={{display:"flex", p:"5px"}}>
                <Typography
                   variant="body2"
                   sx={{
                     color:'#fff',
                     
                     fontFamily: "Poppins",
                     fontWeight: "400",
                     fontSize: "10px",
                     letterSpacing:'1px',
     textAlign: "center",
                     lineHeight: "-5.8px",
                     backgroundColor:"#0146B1",
                     borderRadius:"10px",
                     p:"2px",
                     mr:"5px"
     
                   }}
                >
                  {jobType}
                </Typography>
                <Typography
                variant="body2"
                sx={{
                  color:'#fff',
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "10px",
                  letterSpacing:'1px',
  textAlign: "center",
                  lineHeight: "-5.8px",
                   backgroundColor:"#0146B1",
                     borderRadius:"10px",p:"2px",
                    
                }}>
                  {rank}
                </Typography>
              </Stack>
              <Typography
               sx={{color:"#131517", textAlign:"center", p:"5px",pt:"7px"}}

               >
                {salary}
              </Typography>
              <Stack direction="row" justifyContent="space-evenly"
              sx={{mt:"30px"}}>
                <Divider 
                  sx={{
                    width: "100px",
                    color: "#000000",
                  }}
                /><Typography sx={{fontSize:"10px", color :'#000000'}}>{createdAt}</Typography>
              </Stack>
             <Stack direction="row" style={{marginTop:"10px"}} >
             <CardMedia
                component="picture"
                sx={{
                  display: "flex", 
          justifyContent:'start',
                }} >
                <Avatar src={companyLogo} alt={companyLogoLabel}
                 srcSet={sourceSet}   style={{background:"linear-gradient(to right bottom, #0038F0, #299DF2)",}}/>
              </CardMedia>
              <Stack direction="column"
              sx={{ml:"-69%"}} 
              >
                <Typography sx={{ color: "#000000",}}>{company}</Typography>
                <Stack direction="row" style={{display:"flex", color: "#000000",}}>
                  <GroupOutlined />
                  <Typography variant="body2"  sx={{fontSize:"10px",color: "#000000",}}>{numOfStaffs}</Typography>
                </Stack>

              </Stack>
                <Typography variant="body2" sx={{fontSize:"10px", mt:"24px", 
                  backgroundColor:"#FDC0AE", borderRadius:"16px", width:"50px",
                  p:"6px",color:'#000000',
                }}>

                  {numOfJobs}jobs
                </Typography>
             </Stack>
            </CardContent>
          </Card>
          </Grid>
          </Grid>
    </>);
  }




  // Label
  const Label = ({label, data, color})=>{
  
   const numOfOpening  = data.length
 
     return(
       <Stack direction="row" >
         <Typography>{label}</Typography>

         <Typography 
         sx={{color:{color}, borderRadius:"2px" ,backgroundColor:"#0146B1", width:"32px", height:"25px",
           paddingLeft:"8px", m:"1px",ml:"10px"
         }}> 
           {numOfOpening}</Typography>
          
       </Stack>
     );
   }

  //ProductManagementLabel
   const ProductManagementLabel = ()=>{
     return(
       <Label label="Product Management" 
       data={productManagerData}
       color="#FFDC5F"
       />
     );
   }
   //DesignLabel
   const DesignLabel = ()=>{
     return(
       <Label label="Design" 
       data={designData}
       color="#FFDC5F"
       />
     );
   }
   //DevelopmentLabel
   const DevelopmentLabel = ()=>{
     return(
       <Label label="Development" 
       data={developmentData}
       color="#FFDC5F"
       />
     );
   }
   //MarketingLabel
   const MarketingLabel = ()=>{
     return(
       <Label label="Marketing" 
       data={marketingData}
       color="#FFDC5F"
       />
     );
   }
   //CustomerServiceLabel
   const CustomerServiceLabel = ()=>{
     return(
       <Label label="Customer Service" 
       data={customerServiceData}
       color="#FFDC5F"
       />
     );
   }
   

// Tab panel
  const TabPanel = ({children, value, index})=>{
    return value === index && <Box style={{display:"flex",
      width:"100%", position:"relative"
    }}>{children}</Box>;
  } 
  
  //ProductManagementCard
  const ProductManagementCard = ()=>{
    const navigate = useNavigate(); 

  const handleCardClick = (id) => {
    navigate(`/browse-project`); 
  };
    return (
     <TabPanel>
       {productManagerData.map((item, index) => (
        <div  key={index}>
          <div className="testimonialBody" onClick={() => handleCardClick(item.id)}>
          <Job {...item} 
           isFirstCard={index === 0}
          />
          </div>
        </div>
      ))}
     </TabPanel>
    );
  }

  //DesignerCard
  const DesignerCard = ()=>{
    return (
     <TabPanel>
  {designData.map((item) => (
        <div  key={item.id}>
          <div className="testimonialBody">
          <Job {...item}/>
          </div>
        </div>
      ))}
     </TabPanel>
    );
  }
  //DevelopmentCard
  const DevelopmentCard = ()=>{
    return (
     <TabPanel>
       {developmentData.map((item) => (
        <div  key={item.id}>
          <div className="testimonialBody">
          <Job {...item}/>
          </div>
        </div>
      ))}
     </TabPanel>
    );
  }

//MarketingCard
  const MarketingCard = ()=>{
    return (
     <TabPanel>
       {marketingData.map((item) => (
        <div  key={item.id}>
          <div className="testimonialBody">
          <Job {...item}/>
          </div>
        </div>
      ))}
     </TabPanel>
    );
  }

//CustomerServiceCard
  const CustomerServiceCard = ()=>{
    return (
     <TabPanel>
       {customerServiceData.map((item) => (
        <div  key={item.id}>
          <div className="testimonialBody">
          <Job {...item}/>
          </div>
        </div>
      ))}
     </TabPanel>
    );
  }
 

  const tabData = [
  { 
     id:0, 
    label: <ProductManagementLabel/>, content: <ProductManagementCard/>
  
  },
  {
     id:1, 
    label: <DesignLabel/>, content:  <DesignerCard/>
  
  },
  {
    label: <DevelopmentLabel/>, content:  <DevelopmentCard/>
  
  },
  { id:2, 
    label: <MarketingLabel/>, content:  <MarketingCard/>
  
  },
  { id:3, 
    label: <CustomerServiceLabel/> , content:  <CustomerServiceCard/>
  
  }
  
  ];
    return (
      <Box sx={{ flexGrow: 1 , height:'250px', 
      mt:{xs:"190%", sm:"125%",md:"50%", lg:"50%"}, position:"relative", width:"auto",}}>
         <Typography variant="h4" sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
                letterSpacing:"1px",
                fontFamily:"Poppins",
                mb:"4%",
          }}><strong style={{ color: "#2F6AD8" }}>Latest </strong>Job Opportunities </Typography>
     
        {/* Setting up the Fluid Grid system */}
        <Grid container spacing={0}>
        {/* Col1 */}
  
        <Grid item  xs={12} md={6} sx={{
          height:"250px"
        }}>
  
         <Tabs value={value} onChange={(_event, newValue)=> setValue(newValue)}
          orientation="vertical" 
          sx={{width: "250px"}}>
            {tabData.map((tab , index)=>(
              <Tab key={index} label={tab.label}
              sx={{ alignItems: "flex-start", textAlign: "left", 
               
              }}
              />
              
            ))}
         </Tabs>
          </Grid>
          {/* End col1 */}
  
          {/* Col2 */}
          <Grid item  xs={12} md={9} 
          sx={{
         ml:{sm:"0px",md:"-270px"},
         
         overflow: "auto",
         mt:{xs:"15%",sm:"0%"},
         
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
  