// eslint-disable-next-line no-unused-vars
// import React from 'react';
// import { Box, Card, CardContent, Typography } from '@mui/material';

// function DashboardAnalysis({ title, subtitle, children, lastUpdated, bgColor }) {
//   return (
//     <Card sx={{ borderRadius: 2, boxShadow: 3, position: 'relative', overflow: 'visible' }}>
//       {/* Chart background container */}
//       <Box 
//         sx={{
//           position: 'absolute',
//           top: '-20px', // Chart exceeds container by 20px at the top
//           left: 0,
//           right: 0,
//           height: '180px', // Adjust height as needed
//           background: bgColor,
//           borderRadius: '16px 16px 0 0', // Rounded top corners
//           zIndex: -1, // Ensure it's behind the card content
//         }}
//       />
//       <CardContent sx={{ paddingTop: '160px', paddingBottom: '16px' }}> 
//         {children}
//         <Typography variant="h6" component="div" sx={{ mt: 2 }}>
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {subtitle}
//         </Typography>
//         <Typography variant="caption" color="text.secondary" display="flex" alignItems="center" sx={{ mt: 1 }}>
//           <span role="img" aria-label="clock">🕒</span> {lastUpdated}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }


// export default DashboardAnalysis;
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

function DashboardAnalysis({ title, subtitle, children, lastUpdated, bgColor }) {
  return (
    <Card 
      sx={{ 
        borderRadius: 2, 
        boxShadow: 3, 
        position: 'relative', 
        overflow: 'visible',
        width: '320px', 
        height: '320px',
        display: 'flex',
        flexDirection: 'column' 
      }}
    >
      {/* Chart background container */}
      <Box 
        sx={{
          position: 'absolute',
          top: '-20px', // Chart exceeds container by 20px at the top
          left: 0,
          right: 0,
          height: '180px', // Adjust height as needed
          background: bgColor,
          borderRadius: '16px 16px 0 0', // Rounded top corners
          zIndex: -1, // Ensure it's behind the card content
        }}
      />
      <CardContent sx={{ 
        paddingTop: '16px', 
        paddingBottom: '16px',
        paddingLeft: '16px',
        paddingRight: '16px',
        height: 'calc(100% - 20px)',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}> 
      <Box 
          sx={{
            position: 'absolute',
            top: '-20px', 
            left: '16px', 
            right: '16px', 
            zIndex: 1, 
          }}
        >
        {children}
        </Box>
        <Box sx={{ mt: '160px' }}>
        <Typography variant="h6" component="div" sx={{ mt: 2, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {subtitle}
        </Typography>
        <Typography variant="caption" color="text.secondary" display="flex" alignItems="center">
          <span role="img" aria-label="clock">🕒</span> {lastUpdated}
        </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DashboardAnalysis;