import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Nomad's Odyssey</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/beautifulplaces">
              Beautiful Places
            </Button>
            <Button color="inherit" component={Link} to="/openai">
              OpenAI
            </Button>
            {isLoggedIn ? (
              <Button color="inherit" variant="outlined" onClick={handleLogOut}>
                Log Out
              </Button>
            ) : (
              <>
                <Button color="inherit" variant="outlined" sx={{ mr: 3 }} onClick={handleLogIn}>
                  Log In
                </Button>
                <Button color="secondary" variant="contained" component={Link} to="/signup">
                  Sign Up
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
