import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import  Button  from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

//const ExpandMore = styled((props: ExpandMoreProps) => {
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ margin: "25%" }}>
      <Card sx={{ maxWidth: 345,backgroundColor: '#A0D9EF',
                borderRadius: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                
                 }}>
        <CardHeader style={{ backgroundColor: '#fff',}}
      
         
          title={<Typography sx={{
            fontWeight: "200",
            mb: 1,
            //color: "#ffffff",
            color: '#000000',
            textAlign: "start",
            mt: 1,
            letterSpacing: "0.5px",
          }}>Summary</Typography>}
          subheader={<Typography
            variant="body2"
            sx={{
              color: '#000000', marginTop: '15px' ,
              display:'flex',
              // color: (theme) =>
              //   theme.palette.mode === "light"
              //     ? theme.palette.primary.lightModeHeroTitle
              //     : theme.palette.primary.darkModeHeroTitle,
             
              pb: "0px",
              pt: "1px",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "12px",
             
              letterSpacing: "0.5px",}}>nomzykush@gmail.com</Typography>}
        />
        <CardContent sx={{
            backgroundColor: '#fff',
            padding: '20px',
            pt:'30px',
            marginBottom:'90px',
            borderRadius: '0px',
        }}>
          <Typography  variant="body2"
                  sx={{
                    
                    color: '#000000', marginTop: '5px' ,
                    // color: (theme) =>
                    //   theme.palette.mode === "light"
                    //     ? theme.palette.primary.lightModeHeroTitle
                    //     : theme.palette.primary.darkModeHeroTitle,
                    // pb: "2px",
                    pt: "3px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "12px",
                    letterSpacing: "1px",}}>
            Front-end developer and Technical writer with keen attention to
            detail and a passion for delivering content as interactive as it is
            educational.
          </Typography>
          <Typography  variant="body2"
                  sx={{
                    
                    color: '#000000', marginTop: '5px' ,
                    // color: (theme) =>
                    //   theme.palette.mode === "light"
                    //     ? theme.palette.primary.lightModeHeroTitle
                    //     : theme.palette.primary.darkModeHeroTitle,
                    // pb: "2px",
                    pt: "3px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "12px",
                    letterSpacing: "1px",}}>
            Front-end developer and Technical writer with keen attention to
            detail and a passion for delivering content as interactive as it is
            educational.
          </Typography>


          <CardActions  disableSpacing sx={{ justifyContent: 'center', paddingBottom: '20px' , }}>
        <Button
         onClick={() => handleProjectClick(project.id)}
          sx={{
            backgroundColor: '#A0D9EF',
            letterSpacing:'0.5px',
            color: '#fff',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#B0DAE5',
            },
            position:'absolute',
            mt:'165px'
          }}
          variant="contained"
        >
          Learn More
        </Button>
      </CardActions>
          

        </CardContent>
        {/* <CardActions disableSpacing>
        
        </CardActions> */}
       
       
      </Card>
    </div>
  );
}








// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// // interface ExpandMoreProps extends IconButtonProps {
// //   expand: boolean;
// // }

// //const ExpandMore = styled((props: ExpandMoreProps) => {
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div style={{ margin: "25%" }}>
//       <Card sx={{ maxWidth: 345 }}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//               D
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Doro Onome Churchill"
//           subheader="nomzykush@gmail.com"
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             Front-end developer and Technical writer with keen attention to
//             detail and a passion for delivering content as interactive as it is
//             educational.
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           <ExpandMore
//             expand={expanded}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </ExpandMore>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Chevrolet Description</Typography>
//             <Typography paragraph>
//               Chevrolet is an iconic American automobile brand founded in 1911
//               by Louis Chevrolet and William C. Durant
//             </Typography>
//             <Typography paragraph>
//               It is currently the fourth-largest automotive brand in the United
//               States and is a division of General Motors. Chevrolet has become
//               one of America’s most iconic brands, producing reliable and
//               stylish cars, trucks, and SUVs for over a century. Its models
//               range from the economical Spark to the luxurious Corvette.
//             </Typography>
//             <Typography paragraph>
//               Chevrolet is also known for its commitment to safety, providing
//               advanced features like lane departure warning and front crash
//               prevention. (Discard any mussels that don&apos;t open.)
//             </Typography>
//           </CardContent>
//         </Collapse>
//       </Card>
//     </div>
//   );
// }