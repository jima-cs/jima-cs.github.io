import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';


function ButtonAppBar() {
  return (
    <div className='Toolbar'>
        <AppBar position="static" padding = {0}>
            <Toolbar >
            <Box borderColor="#3f51b5">
                <Typography variant='h4'>
                    Dazhen's Homepage
                </Typography>
            </Box>
            </Toolbar>
        </AppBar>
    </div>
  );
}
export default ButtonAppBar;
