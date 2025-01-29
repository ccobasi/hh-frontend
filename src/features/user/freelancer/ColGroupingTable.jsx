import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CustomProgress } from './CustomProgress';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name,image,progress, code, population, size) {
  const density = population / size;
  return { name,image,progress, code, population, size, density };
}

const rows = [
  createData('India','./assets/removal.png',68, 'IN', 
    1324171354, 3287263),
  createData('China','./assets/removal.png',78, 'CN', 1403500365, 9596961),
  createData('Italy','./assets/removal.png',58, 'IT', 60483973, 301340),
  createData('United States','./assets/removal.png',48, 'US', 327167434, 9833520),
  createData('Canada', 'CA','./assets/removal.png',68, 37602103, 9984670),
  createData('Australia','./assets/removal.png',68, 'AU', 25475400, 7692024),
  createData('Germany','./assets/removal.png',68, 'DE', 83019200, 357578),
  createData('Ireland','./assets/removal.png',68, 'IE', 4857000, 70273),
  createData('Mexico','./assets/removal.png',68, 'MX', 126577691, 1972550),
  createData('Japan','./assets/removal.png',68, 'JP', 126317000, 377973),
  createData('France','./assets/removal.png',68, 'FR', 67022000, 640679),
  createData('United Kingdom','./assets/removal.png',68, 'GB', 67545757, 242495),
  createData('Russia', './assets/removal.png',68,'RU', 146793744, 17098246),
  createData('Nigeria','./assets/removal.png',68, 'NG', 200962417, 923768),
  createData('Brazil', './assets/removal.png',68,'BR', 210147125, 8515767),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}<img src={row.image} style={{height:"34px", width:"34px"}}/><CustomProgress value={row.progress}/>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}