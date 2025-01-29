// import Categories from "./Categorys";
// import homeCategoriesData from "./homeCategoriesData";
// import { Grid } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";


// export const HomeCategories = () => {
//   let secondContainer = homeCategoriesData.map((el) => {
//     return <Categories key={el.id} {...el} />;
//   });
//   return (
//     <>
//       {/* Heading for the Categories Feature*/}
//       <Typography
       
//  sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "12px", lineHeight: "20.8px", textAlign: "start",
//   letterSpacing:'1px',
 
//   color: (theme) =>
//     theme.palette.mode === 'light'
//      ? theme.palette.primary.lightModeHeroTitle
//       : theme.palette.primary.darkModeHeroTitle,
//  pb: {lg:'1%',md:"1%",sm:'1%',xs:'1%'},
// mt: {lg:'5%',md:"5%",sm:'5%',xs:'5%'},
// ml:{lg:'10%',md:"8%",sm:'10%',xs:'10%'},
// }}
//       >
//         Categories
//       </Typography>

//       {/* Heading End*/}

//       {/* Grid for the Categories Feature*/}
//       <Grid
//         container
//         spacing={4}
//         sx={{
//           pb: {lg:'5%',md:"5%",sm:'5%',xs:'5%'},
//           mt: {lg:'0%',md:"0%",sm:'10%',xs:'10%'},
//           ml:{lg:'-1%',md:"-1%",sm:'3%',xs:'-2%'},
//         }}
//       >
//         {secondContainer}
//       </Grid>
//       {/* Grid End*/}

//       {/* Link for all Categories */}
//       {/* <Link
//         href="/categories"
//         sx={{
//           typography: (theme) => theme.typography.categoriesSeeAllLink,
//           ml:{lg:'10%',md:"10%",sm:'10%',xs:'10%'},
//         }}
//       >
//         See all
//       </Link> */}
      
//     </>
//   );
// };

import Categories from "./Categorys";
import homeCategoriesData from "./homeCategoriesData";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import './LayeredCard.css'; // Importing the 3D card CSS

export const HomeCategories = () => {
  let secondContainer = homeCategoriesData.map((el) => {
    return (
      <Grid item key={el.id} xs={12} sm={6} md={4}>
        {/* 3D Card wrapper */}
        <div className="card-container">
          <div className="card">
            <h3>{el.title}</h3> {/* Category Title */}
            <p>{el.description}</p> {/* Category Description */}
            {/* You can further add content from the category data here */}
            <Categories {...el} />
            <div className="layers">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="layer"></div>
              ))}
            </div>
          </div>
        </div>
      </Grid>
    );
  });

  return (
    <>
      {/* Heading for the Categories Feature*/}
      <Typography
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
          pb: { lg: "1%", md: "1%", sm: "1%", xs: "1%" },
          mt: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
          ml: { lg: "10%", md: "8%", sm: "10%", xs: "10%" },
        }}
      >
        Categories
      </Typography>

      {/* Grid for the Categories Feature*/}
      <Grid
        container
        spacing={4}
        sx={{
          pb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
          mt: { lg: "0%", md: "0%", sm: "10%", xs: "10%" },
          ml: { lg: "-1%", md: "-1%", sm: "3%", xs: "-2%" },
        }}
      >
        {secondContainer}
      </Grid>
    </>
  );
};
