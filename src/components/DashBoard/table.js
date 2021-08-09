import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core';
import { FaEdit, FaTimes } from 'react-icons/fa';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BasicTable = ({ Data, setpopupForUserDetails, setidForPopup, DeleteUser }) => {
  const showpopup = (id) => {
    setpopupForUserDetails(true);
    setidForPopup(id);
  };

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Username</TableCell>
            <TableCell align='right'>Role</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>Edit</TableCell>
            <TableCell align='right'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.username}</TableCell>
              <TableCell align='right'>{row.role}</TableCell>
              <TableCell align='right'>{row.email}</TableCell>
              <TableCell align='right'>
                <FaEdit
                  style={{
                    color: "grey",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  onClick={() => showpopup(row.id)}
                />
              </TableCell>
              <TableCell align='right'>
                <FaTimes
                  style={{
                    color: "crimson",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  onClick={() => DeleteUser(row.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default BasicTable;