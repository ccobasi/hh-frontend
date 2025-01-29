// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ClientThirdFeature from './ClientThirdFeature';

const ClientContractsPage = ({ userId }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  userId = user ? user.id : null;
  
  return (
    <Container 
      component="main" 
      maxWidth="lg"
      sx={{
        backgroundColor: '#edeffc', // Background for the entire container
        minHeight: '100vh', // Optional for full viewport height
        p: 2, // Padding for the container
        position: 'relative', // Needed for absolute positioning of children
      }}
    >
      <Box 
       
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
            backgroundColor: '#34acf8 ',
          borderRadius: '16px',
          p: 3,
          mt: 4,
          mb: -2, // Negative margin to ensure overlap
          width: { xs: '78%', sm: '66%', md: '78%', lg: '60%' },
          mx: 'auto',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1, // Ensure it's above the table
          }}
        >
          My Contracts
        </Typography>
      </Box>

      <Box 
        sx={{
          // Remove ml to align with container edges if necessary
          width: { xs: '100%', sm: '80%', md: '90%', lg: '70%' }, 
          mx: 'auto',
          pt: '50px', // Adjust this value to control the overlap
        }}
      >
        <ClientThirdFeature 
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

export default ClientContractsPage;