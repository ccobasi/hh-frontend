// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import { TableHead, Typography } from '@mui/material';
// import {Stack} from '@mui/material';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import { CustomProgress } from './CustomProgress';

// function TablePaginationActions(props) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// function createData(name,image,imageLabel,project, price,deliveredIn, applicationProgress) {
//   return { name,image,imageLabel,project, price,deliveredIn, applicationProgress };
// }

// const rows = [
//   createData('Steven Terry','./assets/removal.png','client','Landing page','#80k','1 day 2 hours',  90),
//   createData('Audrey Jones','./assets/removal.png','client','Development','#500k','4 days 8 hours', 50),
//   createData('Brain Fisher','./assets/removal.png','client','Translator','#100k','14 days 2 hours', 95),
//   createData('Molly Mills','./assets/removal.png','client','Data Analyst','#70k','8 days 20 hours', 20),
//   createData('Orlando Versa', './assets/removal.png','client','Landing page','#350k','4 days 2 hours',80),
//   createData('Steven Terry','./assets/removal.pn','client','Landing page','#80k','1 day 2 hours',  90),
//   createData('Audrey Jones','./assets/removal.png','client','Development','#500k','4 days 8 hours', 50),
//   createData('Brain Fisher','./assets/removal.png','client','Translator','#100k','14 days 2 hours', 95),
//   createData('Molly Mills','./assets/removal.png','client','Data Analyst','#70k','8 days 20 hours', 20),
//   createData('Orlando Versa', './assets/removal.png','client','Landing page','#350k','4 days 2 hours',80),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

// export default function CustomPaginationActionsTable({name}) {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <TableContainer component={Paper} >
//       <Table sx={{ minWidth: 500, fontFamily:"Poppins" }} aria-label="custom pagination table">
//       <caption></caption>
//         <TableHead>
//           <TableRow sx={{
//             backgroundColor: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.grey[200]
//                 : theme.palette.grey[800],
                
//           }}>
//             <TableCell sx={{
              
//  color: (theme) =>
//   theme.palette.mode === "light"
//     ? theme.palette.primary.lightModeHeroTitle
//     : theme.palette.primary.darkModeHeroTitle,
//     letterSpacing:"1px",
//     fontSize:'12px'
//             }}>{name}</TableCell>
//             <TableCell align="right"
//             sx={{
              
//               color: (theme) =>
//                theme.palette.mode === "light"
//                  ? theme.palette.primary.lightModeHeroTitle
//                  : theme.palette.primary.darkModeHeroTitle,
//                  letterSpacing:"1px",
//                  fontSize:'12px'
//                          }}
//             >Project</TableCell>
//             <TableCell align="right"
//             sx={{
              
//               color: (theme) =>
//                theme.palette.mode === "light"
//                  ? theme.palette.primary.lightModeHeroTitle
//                  : theme.palette.primary.darkModeHeroTitle,
//                  letterSpacing:"1px",
//                  fontSize:'12px'
//                          }}
//             >Price&nbsp;</TableCell>
//             <TableCell align="right" sx={{
              
//               color: (theme) =>
//                theme.palette.mode === "light"
//                  ? theme.palette.primary.lightModeHeroTitle
//                  : theme.palette.primary.darkModeHeroTitle,
//                  letterSpacing:"0px",
//                  fontSize:'12px',p:"1px"
                
//                          }}>Delivered in</TableCell>
//             <TableCell align="right" sx={{
              
//               color: (theme) =>
//                theme.palette.mode === "light"
//                  ? theme.palette.primary.lightModeHeroTitle
//                  : theme.palette.primary.darkModeHeroTitle,
//                  letterSpacing:"1px",
//                  fontSize:'12px'
//                          }}>Progress&nbsp;</TableCell>
        
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {(rowsPerPage > 0
//             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : rows
//           ).map((row) => (
//             <TableRow key={row.name} >
//               <TableCell component="th" scope="row"
//                sx={{
              
//                 color: (theme) =>
//                  theme.palette.mode === "light"
//                    ? theme.palette.primary.lightModeHeroTitle
//                    : theme.palette.primary.darkModeHeroTitle,
//                    letterSpacing:"1px",
//                    fontSize:'11px'
//                            }}>
//               <Stack direction="row">
//               <img src={row.image} alt={row.imageLabel} style={{height:"20px", width:"30px"}}
//               /> 
             
//                           {row.name}
              
              
//               </Stack>
//               </TableCell>
//               <TableCell style={{ width: 160,textAlign:"start" }} align="right"
//                sx={{
              
//                 color: (theme) =>
//                  theme.palette.mode === "light"
//                    ? theme.palette.primary.lightModeHeroTitle
//                    : theme.palette.primary.darkModeHeroTitle,
//                    letterSpacing:"1px",
//                    fontSize:'11px'
//                            }}
//               >
//                 {row.project}
//               </TableCell>
//               <TableCell style={{ width: 160,textAlign:"start" }} align="right"
//                sx={{
              
//                 color: (theme) =>
//                  theme.palette.mode === "light"
//                    ? theme.palette.primary.lightModeHeroTitle
//                    : theme.palette.primary.darkModeHeroTitle,
//                    letterSpacing:"1px",
//                    fontSize:'11px'
//                            }}
//               >
//                 {row.price}
//               </TableCell>
//               <TableCell style={{ width: 160,textAlign:"start" }} align="right"
//                sx={{
              
//                 color: (theme) =>
//                  theme.palette.mode === "light"
//                    ? theme.palette.primary.lightModeHeroTitle
//                    : theme.palette.primary.darkModeHeroTitle,
//                    letterSpacing:"1px",
//                    fontSize:'11px'
//                            }}>
//                 {row.deliveredIn}
//               </TableCell >
//               <TableCell style={{ width: 160 }} align="right" 
//                sx={{
              
//                 color: (theme) =>
//                  theme.palette.mode === "light"
//                    ? theme.palette.primary.lightModeHeroTitle
//                    : theme.palette.primary.darkModeHeroTitle,
//                    letterSpacing:"1px",
//                    fontSize:'11px'
//                            }}>
//                 {row.applicationProgress} <CustomProgress value={row.applicationProgress}/>{row.applicationProgress}%
//               </TableCell>
//             </TableRow>
//           ))}
//           {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }} >
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//         </TableBody>
//         <TableFooter >
//           <TableRow >
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={3}
//               count={rows.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               slotProps={{
//                 select: {
//                   inputProps: {
//                     'aria-label': 'rows per page',
//                   },
//                   native: true,
//                 },
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
             
//             />
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }

import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import { TableHead, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { CustomProgress } from './CustomProgress';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable({ name }) {
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/contract/user/${userId}/contracts/`);
        
        setRows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, fontFamily: "Poppins" }} aria-label="custom pagination table">
        <caption></caption>
        <TableHead>
          <TableRow sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}>
            <TableCell sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
              letterSpacing: "1px",
              fontSize: '12px'
            }}>{name}</TableCell>
            <TableCell align="right" sx={{ letterSpacing: "1px", fontSize: '12px' }}>Project Title</TableCell>
            <TableCell align="right" sx={{ letterSpacing: "1px", fontSize: '12px' }}>Contract Amount</TableCell>
            <TableCell align="right" sx={{ letterSpacing: "0px", fontSize: '12px', p: "1px" }}>Status</TableCell>
            {/* <TableCell align="right" sx={{ letterSpacing: "1px", fontSize: '12px' }}>Progress&nbsp;</TableCell> */}
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" sx={{ letterSpacing: "1px", fontSize: '11px' }}>
                <Stack direction="row">
                  <img src={row.image} alt={row.imageLabel} style={{ height: "20px", width: "30px" }} />
                  {row.name}
                </Stack>
              </TableCell>
              <TableCell align="right" sx={{ letterSpacing: "1px", fontSize: '11px' }}>{row.project}</TableCell>
              <TableCell align="right" sx={{ letterSpacing: "1px", fontSize: '11px' }}>{row.price}</TableCell>
              <TableCell align="right" sx={{ letterSpacing: "1px", fontSize: '11px' }}>{row.deliveredIn}</TableCell>
              <TableCell align="right" sx={{ letterSpacing: "1px", fontSize: '11px' }}>
                <CustomProgress value={row.applicationProgress} /> {row.applicationProgress}%
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody> */}
         <TableBody>
  {rows.length > 0 ? rows.map((contract) => (
    <TableRow
      key={contract.id}
      hover
      onClick={() => handleContractClick(contract.id)}
      sx={{ cursor: 'pointer' }}
    >
      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
        {contract.client_name || "N/A"}
      </TableCell>
      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
        {contract.project_title || "N/A"}
      </TableCell>
      <TableCell align="center">
        #{contract.contract_amount || "N/A"}
      </TableCell>
      <TableCell align="center" sx={{ fontWeight: 'bold' }}>
        {contract.status || "N/A"}
      </TableCell>
    </TableRow>
  )) : (
    <TableRow>
      <TableCell colSpan={3} align="center">
        No contracts found
      </TableCell>
    </TableRow>
  )}
</TableBody>


        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
