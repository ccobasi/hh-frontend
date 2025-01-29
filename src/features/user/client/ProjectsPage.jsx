// // eslint-disable-next-line no-unused-vars
// import  Box  from "@mui/material/Box";
// import  Container from "@mui/material/Container";
// import  Link from "@mui/material/Link";
// import  Typography from "@mui/material/Typography";
// import ProjectsGrid from './ProjectsGrid';


// const ProjectsPage = ({ userId }) => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   userId = user ? user.id : null;
  
//   return (
//     <Box sx={{ backgroundColor: "#f1f2f6"}}>
//           <Container component="main" maxWidth="lg">
  
   
//       <div >
//         <Typography
         
//           sx={{
//             fontFamily: 'Poppins',
//             fontWeight: '600',
//             letterSpacing:'1px',
//             fontSize: '12px',
//             lineHeight: '20.8px',
//             textAlign: 'start',
//             color: (theme) =>
//               theme.palette.mode === 'light'
//                ? theme.palette.primary.lightModeHeroTitle
//                 : theme.palette.primary.darkModeHeroTitle,
//             pt: '70px',
//             ml: '16%',
//             //pb:'0%'
//           }}
//         >
//           My Projects
//           <Link
//             href="/create-project"
//             sx={{
//               fontFamily: 'Poppins',
//               fontWeight: '400',
//               fontSize: '12px',
//               lineHeight: '20.8px',
//               textDecoration: 'true',
//               color: '#87CEEB',
//               ml: '50%',
//             }}
//           >
//             Create a Project
//           </Link>
//         </Typography>
//       </div>

// <Box sx={{ml:{xs:'10%',sm:'7%', md:'7%',lg:'5%'},}}>
// <ProjectsGrid/>    

// </Box>


     
//     </Container>
//     </Box>
//   );
// };

// export default ProjectsPage;

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProjectsGrid from './ProjectsGrid';
import Link from "@mui/material/Link";

const ProjectsPage = ({ userId }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  userId = user ? user.id : null;
  
  return (
    <Container 
      component="main" 
      maxWidth="lg"
      sx={{
        backgroundColor: '#edeffc',
        minHeight: '100vh',
        p: 2,
        position: 'relative', // Needed for absolute positioning of the title
      }}
    >
      <Box 
        sx={{
          position: 'relative', // Relative positioning for z-index to work
          zIndex: 2, // Higher z-index for the title to appear on top
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
            letterSpacing: '1px',
            fontSize: { xs: '12px', sm: '14px', md: '16px' },
            lineHeight: { xs: '1.5', sm: '1.75', md: '2' },
            textAlign: 'start',
            color: 'white',
            pt: { xs: '20px', sm: '30px', md: '40px' },
            backgroundColor: '#34acf8',
            borderRadius: '16px',
            p: 3,
            mt: 4,
            mb: -2, // Negative margin to push the title down slightly
            width: { xs: '78%', sm: '66%', md: '78%', lg: '60%' },
            mx: 'auto',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1, // Ensure it's above the table but below other content for overlap effect
            display: 'flex', // Use flexbox for alignment
    justifyContent: 'space-between', // Space between the start and end
    alignItems: 'center',
          }}
        >
          My Projects
          <Link
            href="/create-project"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '20.8px',
              textDecoration: 'none', // Removed 'true' as it's not a valid value
              color: '#fff',
              textAlign: 'end',
              ml: '10px', // Changed from '50%' to a smaller value for better alignment
            }}
          >
            Create a Project
          </Link>
        </Typography>
      </Box>

      <Box 
        sx={{
          width: { xs: '100%', sm: '80%', md: '90%', lg: '70%' }, 
          mx: 'auto',
          pt: '50px', // Adjust this to control how much the title overlaps the table
        }}
      >
        <ProjectsGrid 
          userId={userId} 
          sx={{
            '& .MuiTableContainer-root': {
              // Assuming the TableContainer is styled with a class named 'MuiTableContainer-root'
              mt: '30px', // Adjust this to ensure the table header is half overlapped
              '& .MuiTableHead-root': {
                '& .MuiTableCell-root': {
                  // Reduce 10px from each side of the table header cells
                  px: '10px !important', 
                },
              },
            },
          }}
        />
      </Box>
    </Container>
  );
};

export default ProjectsPage;