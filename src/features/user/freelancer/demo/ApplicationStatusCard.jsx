import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box ,Stack} from "@mui/material";

export default function ApplicationStatusCard({
    status,date, jobTitle,rank, company,location,requirement 
}) {
  return (
    <>
      {/* Container  */}
      <Box   sx={{
            width: "100%",
            mb: "10px",
            mt: "5%",
            bgcolor: "background.paper",
            textAlign: "center",
            boxShadow: 1,
          }}>

        <div aria-label="main">
        <List>
          <Box alignItems="flex-start" sx={{ ml: "3%",mr:"3%",height:"70px",mt:"2%" }}>
          
            <ListItem sx={{ justifyContent: "flex-start",    color:'#000000',
                 
                 fontFamily: "Poppins",
                 fontWeight: "400",
                 fontSize: "11px",
                 letterSpacing:'1px',
 textAlign: "center",
                 lineHeight: "-5.8px",
                 backgroundColor:"wheat",
                 borderRadius:"10px",
                 p:"2px", }}>
           
           
          
              {status}
           
           <ListItem sx={{ justifyContent: "flex-start",    color:'#000000',
                 
                 fontFamily: "Poppins",
                 fontWeight: "400",
                 fontSize: "11px",
                 letterSpacing:'1px',
 textAlign: "center",
                 lineHeight: "-5.8px",
                 backgroundColor:"wheat",
                 borderRadius:"10px",
                 p:"2px", }}>
         
            
           
              {date}
            
           </ListItem>
          

            </ListItem>
           
            <ListItem sx={{ justifyContent: "flex-start",    color:'#000000',
                 
                 fontFamily: "Poppins",
                 fontWeight: "400",
                 fontSize: "11px",
                 letterSpacing:'1px',
 textAlign: "center",
                 lineHeight: "-5.8px",
                 backgroundColor:"wheat",
                 borderRadius:"10px",
                 p:"2px", }}
              
              >
               
         
          {jobTitle}
         

        
              </ListItem>
              <ListItem sx={{ justifyContent: "flex-start",    color:'#000000',
                 
                 fontFamily: "Poppins",
                 fontWeight: "400",
                 fontSize: "11px",
                 letterSpacing:'1px',
 textAlign: "center",
                 lineHeight: "-5.8px",
                 backgroundColor:"wheat",
                 borderRadius:"10px",
                 p:"2px", }}>
             
          {rank}
          
              </ListItem>
              <ListItem sx={{ justifyContent: "flex-start",    color:'#000000',
                 
                 fontFamily: "Poppins",
                 fontWeight: "400",
                 fontSize: "11px",
                 letterSpacing:'1px',
 textAlign: "center",
                 lineHeight: "-5.8px",
                 backgroundColor:"wheat",
                 borderRadius:"10px",
                 p:"2px", }}>
            
          
           
              {company}
         

      
              </ListItem>
              <ListItem sx={{ justifyContent: "flex-start",    color:'#000000',
                 
                 fontFamily: "Poppins",
                 fontWeight: "400",
                 fontSize: "11px",
                 letterSpacing:'1px',
 textAlign: "center",
                 lineHeight: "-5.8px",
                 backgroundColor:"wheat",
                 borderRadius:"10px",
                 p:"2px", }}>
            
            ({location})
            
              </ListItem>

              <ListItem sx={{ justifyContent: "flex-start",    color:'#000000',
                 
                 fontFamily: "Poppins",
                 fontWeight: "400",
                 fontSize: "11px",
                 letterSpacing:'1px',
 textAlign: "center",
                 lineHeight: "-5.8px",
                 backgroundColor:"wheat",
                 borderRadius:"10px",
                 p:"2px", }}>

            {
              requirement.map((req, id)=>(
                <Typography key={id}>
                  {req}
                </Typography>
              ))
            }

       
       
              </ListItem>
          </Box>
        
        </List>

        </div>
        
      </Box>
      {/* Container End */}
    </>
  );
}
