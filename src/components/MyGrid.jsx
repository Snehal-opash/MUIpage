import React from 'react';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import SearchIcon from '@mui/icons-material/Search';
import '../style.css';
const useStyles = makeStyles (() => ({
  root: {
    flexGrow: 1,
  },
}));
function MyGrid () {
  const classes = useStyles ();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper>
            <TableContainer sx={{bgColor: '#0C0D0F'}}>
              <Table
                display="flex"
                alignItems="flex-start"
                sx={{
                  p: '0',
                  color: 'white',
                  bgcolor: '#0C0D0F',
                  border: '1px solid #16191F',
                  borderRadius: '8px',
                  boxSizing: 'border-box',
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{
                        color: 'white',
                        height: '24px',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '24px',
                        border: '1px solid #16191F',
                      }}
                      colSpan={2}
                    >
                      Posts
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        p: '0',
                        bgColor: '#0C0D0F',
                        width: '10px',
                        border: '1px solid #16191F',
                        borderRadius: '4px',
                      }}
                    >
                      <Checkbox sx={{color: 'inherit'}} />
                    </TableCell>
                    <TableCell
                      width={'100%'}
                      sx={{
                        color: '#6C757D',
                        display: 'flex',
                        flexDirection: 'row',
                        border: '1px solid #16191F',
                        justifyContent: 'space-between',
                        fontSize: '14px',
                        pl: '2',
                      }}
                    >
                      <Typography width={'auto%'}>Search post...</Typography>
                      <SearchIcon color="red" />
                    </TableCell>
                  </TableRow>
                  {[...Array (6)].map ((_, index) => (
                    <TableRow key={index}>
                      <TableCell
                        sx={{
                          p: '0',
                          bgColor: '#0C0D0F',
                          width: '10px',
                          border: '1px solid #16191F',
                          borderRadius: '4px',
                        }}
                      >
                        <Checkbox sx={{color: 'inherit'}} />
                      </TableCell>

                      <TableCell
                        sx={{
                          color: 'white',
                          border: '1px solid #16191F',
                          pl: '2',
                        }}
                        align="left"
                      >
                        Post Name
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper>
            <TableContainer sx={{bgColor: '#0C0D0F'}}>
              <Table
                display="flex"
                alignItems="flex-start"
                sx={{
                  p: '0',
                  color: 'white',
                  bgcolor: '#0C0D0F',
                  border: '1px solid #16191F',
                  borderRadius: '8px',
                  boxSizing: 'border-box',
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{
                        color: 'white',
                        height: '24px',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '24px',
                        border: '1px solid #16191F',
                      }}
                      colSpan={2}
                    >
                      Pages
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        p: '0',
                        bgColor: '#0C0D0F',
                        width: '10px',
                        border: '1px solid #16191F',
                        borderRadius: '4px',
                      }}
                    >
                      <Checkbox sx={{color: 'inherit'}} />
                    </TableCell>
                    <TableCell
                      width={'100%'}
                      sx={{
                        color: '#6C757D',
                        display: 'flex',
                        flexDirection: 'row',
                        border: '1px solid #16191F',
                        justifyContent: 'space-between',
                        fontSize: '14px',
                        pl: '2',
                      }}
                    >
                      <Typography width={'auto%'}>Search post...</Typography>
                      <SearchIcon color="red" />
                    </TableCell>
                  </TableRow>
                  {[...Array (6)].map ((_, index) => (
                    <TableRow key={index}>
                      <TableCell
                        sx={{
                          p: '0',
                          bgColor: '#0C0D0F',
                          width: '10px',
                          border: '1px solid #16191F',
                          borderRadius: '4px',
                        }}
                      >
                        <Checkbox sx={{color: 'inherit'}} />
                      </TableCell>

                      <TableCell
                        sx={{
                          color: 'white',
                          border: '1px solid #16191F',
                          pl: '2',
                        }}
                        align="left"
                      >
                        Post Name
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid sx={{p: '0'}} item xs={12} sm={4}>
          <Paper>
            <TableContainer sx={{bgColor: '#0C0D0F'}}>
              <Table
                display="flex"
                alignItems="flex-start"
                sx={{
                  p: '0',
                  color: 'white',
                  bgcolor: '#0C0D0F',
                  border: '1px solid #16191F',
                  borderRadius: '8px',
                  boxSizing: 'border-box',
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{
                        color: 'white',
                        height: '24px',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '24px',
                        border: '1px solid #16191F',
                      }}
                      colSpan={2}
                    >
                      Products
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        p: '0',
                        bgColor: '#0C0D0F',
                        width: '10px',
                        border: '1px solid #16191F',
                        borderRadius: '4px',
                      }}
                    >
                      <Checkbox sx={{color: 'inherit'}} />
                    </TableCell>
                    <TableCell
                      width={'100%'}
                      sx={{
                        color: '#6C757D',
                        display: 'flex',
                        flexDirection: 'row',
                        border: '1px solid #16191F',
                        justifyContent: 'space-between',
                        fontSize: '14px',
                        pl: '2',
                      }}
                    >
                      <Typography width={'auto%'}>Search post...</Typography>
                      <SearchIcon color="red" />
                    </TableCell>
                  </TableRow>
                  {[...Array (6)].map ((_, index) => (
                    <TableRow key={index}>
                      <TableCell
                        sx={{
                          p: '0',
                          bgColor: '#0C0D0F',
                          width: '10px',
                          border: '1px solid #16191F',
                          borderRadius: '4px',
                        }}
                      >
                        <Checkbox sx={{color: 'inherit'}} />
                      </TableCell>
                      <TableCell
                        display="flex"
                        sx={{
                          color: 'white',

                          justifyContent: 'space-between',
                          border: '1px solid #16191F',
                          pl: 2,
                        }}
                        align="left"
                      >
                        Post Name
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MyGrid;
