  // const Box   = lazy(()=> import('@mui/material/Box'));
//      const Avatar   = lazy(()=> import('@mui/material/Avatar'));
 


//import { Box, Avatar } from "@mui/material";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar'

export default function AppLogo({ src, alt }) {
  return (
    <>
      {/* Box for App logo */}
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
        <Avatar
          src={src}
          alt={alt}
          sx={{
            position: "fixed",
            typography: (theme) => theme.typography.logo,
          }}
        />
      </Box>
      {/* Box End */}
    </>
  );
}
