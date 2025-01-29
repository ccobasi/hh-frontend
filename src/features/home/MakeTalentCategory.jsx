import { Grade } from "@mui/icons-material";
import { Grid, Card ,CardContent, Typography, Stack,Box} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";



export const MakeTalentCategory = ()=>{

      const theme = useTheme();
const  CategoryCard =({id, jobTitle, rating, numOfSkills})=>{

    return (<>
    <Box sx={{flexGrow:1}}>
    <Grid container >
        <Grid item xs={6} sm={6} md={4} key={id}>
        <Card sx={{ display: "flex", 
      justifyContent:'center',
      backgroundColor:'	#fff',
      height:{sm:"240px", xs:"240px", md:"260px"},  
         
         width:{sm:"200px", xs:"240px",md:"260px"},  
         }}  >
        <CardContent   >
          <Typography sx={{textAlign:"center",mt:"10px",
            color: (theme) =>
                  theme.palette.mode === 'light'
                   ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
            
          }}>
          {jobTitle}
         
  
          </Typography>
        <Stack direction="row" 
          justifyContent="space-evenly" sx={{display:"flex", p:"5px"}}>
            <Grade sx={{color:"blue"}}/>
            <Typography
               variant="body2"
               sx={{
                 color:'#000000',
                 
                 fontFamily: "Poppins",
                 fontWeight: "400",
                 fontSize: "11px",
                 letterSpacing:'1px',
 textAlign: "center",
                 lineHeight: "-5.8px",
                 backgroundColor:"wheat",
                 borderRadius:"10px",
                 p:"2px",
                 
 
               }}
            >
              {rating}
            </Typography>
            <Typography
            variant="body2"
            sx={{
              color:'#000000',
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "11px",
              letterSpacing:'1px',
textAlign: "center",
              lineHeight: "-5.8px",
               backgroundColor:"wheat",
                 borderRadius:"10px",p:"2px",

            }}
            
            >
              {numOfSkills}
            </Typography>
        
         
          </Stack>
       
        
        
        
        </CardContent>
      </Card>

        </Grid>
    </Grid>
    </Box>
    </>);
};


const  CategoryCardDemo =(
        //{id, jobTitle, rating, numOfSkills}
    )=>{

        const talentCategoryData = [
            {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459 Skills"},
            {id: 1, jobTitle: "Design & Creative", rating:"4.85/5", numOfSkills:"459 Skills"},
            {id: 2, jobTitle: "Sales & Marketing", rating:"4.85/5", numOfSkills:"459 Skills"},
            {id: 3, jobTitle: "Customer Support", rating:"4.85/5", numOfSkills:"459 Skills"},
            {id: 4, jobTitle: "Finance & Accounting", rating:"4.85/5", numOfSkills:"459 Skills"},
            {id: 5, jobTitle: "Engineering", rating:"4.85/5", numOfSkills:"459 Skills"},
            {id: 6, jobTitle: "Writing & Translation", rating:"4.85/5", numOfSkills:"459 Skills"},
            {id: 7, jobTitle: "Legal", rating:"4.85/5", numOfSkills:"459 Skills"},
            {id: 8, jobTitle: "Photography", rating:"4.85/5", numOfSkills:"459 Skills"},
           
            
            
                ];

        return (<>
       <Box sx={{flexGrow:1}}>
       <Grid container spacing={1}>
     {talentCategoryData.map((cat, index)=>(
      
       <Grid item xs={6} sm={6} md={4} key={index} >
       <Card sx={{ 
        display: "flex", 
     justifyContent:'center',
     backgroundColor: "#fff",
     height:{sm:"240px", xs:"240px", md:"260px"},  
        
        width:{sm:"auto", xs:"auto",md:"auto"},  
        }} 
        
        >
       <CardContent   >
         <Typography sx={{textAlign:"center",mt:"70px",    color:'#000000',
                
            fontSize: "16", fontWeight: "700", fontFamily: "Poppins",
            letterSpacing: "1px",}}>
         {cat.jobTitle}
        
 
         </Typography>
       <Stack direction="row" 
         justifyContent="space-evenly" sx={{display:"flex", p:"5px"}}>
           <Grade sx={{color:"blue"}}/>
           <Typography
              variant="body2"
              sx={{
                color:'#000000',
                
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "11px",
                letterSpacing:'1px',
textAlign: "center",
                lineHeight: "-5.8px",
                backgroundColor:"#fff",
                borderRadius:"10px",
                p:"2px",
                

              }}
           >
             {cat.rating}
           </Typography>
           <Typography
           variant="body2"
           sx={{
             color:'#000000',
             fontFamily: "Poppins",
             fontWeight: "400",
             fontSize: "11px",
             letterSpacing:'1px',
textAlign: "center",
             lineHeight: "-5.8px",
              backgroundColor:"#fff",
                borderRadius:"10px",p:"2px",

           }}
           
           >
             {cat.numOfSkills}
           </Typography>
       
        
         </Stack>
      
       
       
       
       </CardContent>
     </Card>

       </Grid>
  
       
     ))}
        </Grid>
       </Box>
        </>);
    };



    const talentCategoryData = [
        {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459"},
        {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459"},
        {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459"},
        {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459"},
        {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459"},
        {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459"},
        {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459"},
        {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459"},
        {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459"},
        {id: 0, jobTitle: "Development & IT", rating:"4.85/5", numOfSkills:"459"},
        
        
            ];

    return(
      <><Typography
        variant="h4" sx={{
          color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
                letterSpacing:"1px",
                fontFamily:"Poppins",
                mb:"4%", mt: { xs: "144%", sm: "100%", md: "50%", lg: "35%" },
        }}>Browse Talent by Category</Typography><Box
          sx={{ backgroundColor: "#F3F7FA" }}
        ><CategoryCardDemo /></Box></>
    );
}






// const  CategoryCard =({id, jobTitle, rating, numOfSkills})=>{

//     return (<>
//     <Grid container>
//         <Grid item xs={6} sm={6} md={4}>
//         <Card sx={{ display: "flex", 
//       justifyContent:'center',
//       backgroundColor:'	#fff',
//       height:{sm:"240px", xs:"240px", md:"260px"},  
         
//          width:{sm:"200px", xs:"240px",md:"260px"},  
//          }} key={id}>
//         <CardContent   >
//           <Typography sx={{textAlign:"center",mt:"10px"}}>
//           {jobTitle}
         
  
//           </Typography>
//         <Stack direction="row" 
//           justifyContent="space-evenly" sx={{display:"flex", p:"5px"}}>
//             <Grade sx={{color:"blue"}}/>
//             <Typography
//                variant="body2"
//                sx={{
//                  color:'#000000',
                 
//                  fontFamily: "Poppins",
//                  fontWeight: "400",
//                  fontSize: "11px",
//                  letterSpacing:'1px',
//  textAlign: "center",
//                  lineHeight: "-5.8px",
//                  backgroundColor:"wheat",
//                  borderRadius:"10px",
//                  p:"2px",
                 
 
//                }}
//             >
//               {rating}
//             </Typography>
//             <Typography
//             variant="body2"
//             sx={{
//               color:'#000000',
//               fontFamily: "Poppins",
//               fontWeight: "400",
//               fontSize: "11px",
//               letterSpacing:'1px',
// textAlign: "center",
//               lineHeight: "-5.8px",
//                backgroundColor:"wheat",
//                  borderRadius:"10px",p:"2px",

//             }}
            
//             >
//               {numOfSkills}
//             </Typography>
        
         
//           </Stack>
       
        
        
        
//         </CardContent>
//       </Card>

//         </Grid>
//     </Grid>
//     </>);
// };