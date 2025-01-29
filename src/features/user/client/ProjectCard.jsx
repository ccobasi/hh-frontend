// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Table from "@mui/material/Table";
import  TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import 
  TableRow from "@mui/material/TableRow";
  import
    Paper from "@mui/material/Paper";
    import 
      Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

export default function ProjectContainer({ title, description, closing_date }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor: "#87CEEB", color: "white"}}>
            <TableCell align="center" sx={{ backgroundColor: "#87CEEB", color: "white" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Title</Typography>
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: "#87CEEB", color: "white" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Description</Typography>
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: "#87CEEB", color: "white" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Closing Date</Typography>
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: "#87CEEB", color: "white" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Link</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
              <Typography variant="body1">{title}</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="body1" sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {description}
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="body1">{closing_date}</Typography>
            </TableCell>
            <TableCell align="center">
              <Link
                href="/categories"
                sx={{
                  textDecoration: "none",
                  color: "#87CEEB",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "19.2px",
                  letterSpacing: "-1%",
                }}
              >
                View Project
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
