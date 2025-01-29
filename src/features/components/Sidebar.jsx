import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const clientSidebarData = [
  {
    id:0,
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
    <path d="M6 1H1v14h5zm9 0h-5v5h5zm0 9v5h-5v-5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/>
  </svg>,
    url:'/client',
    label:'Dashboard',
    
  },
  {
    id:1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
  </svg>,
    url:'/edit-client',
    label:'Edit',
    
  },

];

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop:'72px',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  marginTop:'72px',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop:'2px',
  
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
   height:'100%',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function Sidebar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <Box sx={{ display: 'flex',  }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box>
            {theme.direction   === 'rtl' ? (<></>): ( <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={[
                  {
                    marginLeft: 40,
                  },
                  open && { display: 'none' },
                ]}
              >
                <ChevronRightIcon />
              
              </IconButton>)}
          </Box>

          <IconButton onClick={handleDrawerClose} sx={[!open && {display:'none'}
          ]}>
            {theme.direction === 'rtl' ? '' : <ChevronLeftIcon />}
          </IconButton> 
          
        </DrawerHeader>
        <Divider />
        <List>
          
           {clientSidebarData.map((data)=>(
             <ListItem  disablePadding sx={{ display: 'block' }} key={data.id}>
             <ListItemButton
               sx={[
                 {
                   minHeight: 48,
                   px: 2.5,
                 },
                 open
                   ? {
                       justifyContent: 'initial',
                     }
                   : {
                       justifyContent: 'center',
                     },
               ]}
             >
               <ListItemIcon
               onClick={() => navigate(data.url)}
                 sx={[
                   {
                     minWidth: 0,
                     justifyContent: 'center',
                   },
                   open
                     ? {
                         mr: 3,
                       }
                     : {
                         mr: 'auto',
                       },
                 ]}
               >
                 { data.icon}
               </ListItemIcon>
               <ListItemText
                onClick={() => navigate(data.url)}
                 primary={data.label}
                 sx={[
                   open
                     ? {
                         opacity: 1,
                       }
                     : {
                         opacity: 0,
                       },
                 ]}
               />
             </ListItemButton>
           </ListItem>
           ))}
          
        </List>
        <Divider />

      
       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
















// <Divider />
// <List>
//   {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//     <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//       <ListItemButton
//         sx={[
//           {
//             minHeight: 48,
//             px: 2.5,
//           },
//           open
//             ? {
//                 justifyContent: 'initial',
//               }
//             : {
//                 justifyContent: 'center',
//               },
//         ]}
//       >
//         <ListItemIcon
//           sx={[
//             {
//               minWidth: 0,
//               justifyContent: 'center',
//             },
//             open
//               ? {
//                   mr: 3,
//                 }
//               : {
//                   mr: 'auto',
//                 },
//           ]}
//         >
//           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//         </ListItemIcon>
//         <ListItemText
//           primary={text}
//           sx={[
//             open
//               ? {
//                   opacity: 1,
//                 }
//               : {
//                   opacity: 0,
//                 },
//           ]}
//         />
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>
// <Divider />