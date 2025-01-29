// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // const socket = new WebSocket(`ws://${window.location.host}/ws/notification/`);
        const ws = new WebSocket('ws://localhost:8080/ws/notification/');

        ws.onmessage = function(event) {
            const data = JSON.parse(event.data);
            setNotifications((prevNotifications) => [data.message, ...prevNotifications]);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <>
         <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "20.8px",
            textAlign: "start",
            letterSpacing: "1px",
    
            color: (theme) => theme.palette.mode === "light"
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,
            pt: "70px",
            ml: "13%",
          }}
        >
          Notifications
        </Typography>
        
        <Container component="main" maxWidth="md">
       
    
        <div>
           
           <ul>
               {notifications.map((notification, index) => (
                   <li key={index}>{notification}</li>
               ))}
           </ul>
       </div>  
    
        
    
        
          </Container>
        
        </>
      
    );
};

export default Notifications;
