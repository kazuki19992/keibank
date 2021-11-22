import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href='/'>
            <a style={{textDecoration: 'none', display: 'block'}}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                🐎 KEIBANK
              </Typography>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}