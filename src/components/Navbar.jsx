import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {styled} from '@mui/material';
import {useAppstore} from '../appStore';

const AppBar = styled (MuiAppBar, {}) (({theme}) => ({
  zIndex: theme.zIndex.drawer + 1,
}));
export default function Navbar () {
  const updateOpen = useAppstore (state => state.updateOpen);
  const dopen = useAppstore (state => state.dopen);
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
       
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
            onClick={() => updateOpen (!dopen)}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
