// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, CardContent, Typography, Box, IconButton, Grid } from '@mui/material';
// import ChairIcon from '@mui/icons-material/EventSeat';
// import BarChartIcon from '@mui/icons-material/BarChart';
import BusinessIcon from '@mui/icons-material/Business';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import ArchitectureIcon from '@mui/icons-material/Architecture';

const DashCard = ({ icon, title, value, comparison, color }) => {
  return (
    <Card sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start', 
      borderRadius: 2, 
      boxShadow: 4, 
      position: 'relative', 
      height: '100%', 
      overflow: 'visible' 
    }}>
      {/* Icon positioned at the top left outside the card */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20px', 
          left: '10px', 
          backgroundColor: color,
          borderRadius: '8px',
          p: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '40px',
          zIndex: 1, 
        }}
      >
        <IconButton color="inherit" sx={{ p: 0, color: "#fff" }}>{icon}</IconButton>
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 2, pt: 4, textAlign: 'left' }}>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5">{value}</Typography>
        <Typography variant="body2" color="success.main">
          {comparison}
        </Typography>
      </CardContent>
    </Card>
  );
};


const DashboardCard = ({ projects = [] }) => {
  const projectColors = ["#000", "#2196F3", "#4CAF50", "#FFC107"]; 
  return (

    <Grid container spacing={2}>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <Grid key={project.id} item xs={10} sm={6} md={2.8}>
            <DashCard
              icon={<BusinessIcon />} 
              title={project.title || 'No Name'} 
              value={`Budget: # ${project.budget || 'N/A'}`} 
              comparison={`Deadline: ${project.closing_date || 'N/A'}`} 
              color={projectColors[index % projectColors.length]} 
            />
          </Grid>
        ))
      ) : (
        <p>No projects available</p>
      )}
    </Grid>
  );
};

export default DashboardCard;