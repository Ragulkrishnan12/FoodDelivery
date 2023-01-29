import React, { useEffect, useState } from "react";
import "./fetch.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function DataPage() {
  const [state, setState] = useState([]); // json
  const [search, setSearch] = useState([]); //input

  //use effect fetch data from json
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setState(json));
  });

  return (
    <>
      <div className="s1">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="namebox">
        {/* {
        state
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((item) => {
            return (
              <p>
                name:{item.name} - id:{item.email}
              </p>
            );
          })} */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Customer Name </StyledTableCell>
                <StyledTableCell align="right">Mail</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state
                .filter((item) => {
                  if (search == "") {
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.email}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default DataPage;
