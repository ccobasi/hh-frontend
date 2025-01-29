// import React from 'react';
// import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Box } from '@mui/material';

// const steps = [
//   { label: 'Step 1', description: 'This is the first step' },
//   { label: 'Step 2', description: 'Here is the second step' },
//   { label: 'Step 3', description: 'And this is the third step' },
// ];

// const VerticalStepper = () => {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Paper elevation={0} sx={{ p: 2 }}>
//       <Stepper activeStep={activeStep} orientation="vertical">
//         {steps.map((step, index) => (
//           <Step key={step.label}>
//             <StepLabel>
//               {step.label}
//             </StepLabel>
//             <StepContent>
//               <Typography>{step.description}</Typography>
//               <Box sx={{ mb: 2 }}>
//                 <div>
//                   <Button
//                     variant="contained"
//                     onClick={handleNext}
//                     sx={{ mt: 1, mr: 1 }}
//                   >
//                     {index === steps.length - 1 ? 'Finish' : 'Continue'}
//                   </Button>
//                   <Button
//                     disabled={index === 0}
//                     onClick={handleBack}
//                     sx={{ mt: 1, mr: 1 }}
//                   >
//                     Back
//                   </Button>
//                 </div>
//               </Box>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length && (
//         <Paper square elevation={0} sx={{ p: 3 }}>
//           <Typography>All steps completed - you&apos;re finished</Typography>
//           <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
//             Reset
//           </Button>
//         </Paper>
//       )}
//     </Paper>
//   );
// };

// export default VerticalStepper;
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography 
} from "@mui/material";

const VerticalStepper = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          "ccobasi.pythonanywhere.com/payment/payments/",
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`
            }
          }
        );
        setPayments(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Typography 
        variant="h6" 
        component="h2" 
        sx={{ 
          mb: 2, 
          textAlign: 'center', 
          color: (theme) => theme.palette.primary.main 
        }}
      >
        Payment Overview
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell 
                sx={{ 
                  fontWeight: 'bold', 
                  color: 'primary.main', 
                  fontSize: '14px' 
                }}
              >
                Amount
              </TableCell>
              <TableCell 
                sx={{ 
                  fontWeight: 'bold', 
                  color: 'primary.main', 
                  fontSize: '14px' 
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell 
                  sx={{ 
                    fontSize: '12px',
                    color: (theme) => theme.palette.text.secondary
                  }}
                >
                  {payment.amount}
                </TableCell>
                <TableCell 
                  sx={{ 
                    fontSize: '12px',
                    color: (theme) => theme.palette.text.secondary
                  }}
                >
                  {payment.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default VerticalStepper;