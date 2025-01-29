import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios';

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
  const [contracts, setContracts] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  React.useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/contract/users/${userId}/contracts/`);
        console.log(response);
        setContracts(response.data);
      } catch (error) {
        console.error("Error fetching contracts:", error);
      }
    };
    fetchContracts();
  }, [userId]);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - contracts.length) : 0;

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
            <TableCell align="left" sx={{ letterSpacing: "1px", fontSize: '12px' }}>Contract Title</TableCell>
            <TableCell align="left" sx={{ letterSpacing: "1px", fontSize: '12px' }}>Amount</TableCell>
            <TableCell align="left" sx={{ letterSpacing: "0px", fontSize: '12px', p: "1px" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.length > 0 ? contracts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contract) => (
            <TableRow
              key={contract.id}
              hover
              sx={{ cursor: 'pointer' }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                {contract.client_name || "N/A"}
              </TableCell>
              <TableCell align="left">
                {contract.contract_name || "N/A"}
              </TableCell>
              <TableCell align="left">
                #{contract.contract_amount || "N/A"}
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                {contract.status || "N/A"}
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No contracts found
              </TableCell>
            </TableRow>
          )}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={4} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={4}
              count={contracts.length}
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
