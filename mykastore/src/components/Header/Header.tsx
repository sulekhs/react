import React, { FormEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
//import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import AppDrawer from '../Drawer/AppDrawer';

const Header = () => {
  
//   const navigate = useNavigate();

//   const handleClick = (e:FormEvent) => {
//       e.preventDefault();
//       navigate("/cart");
//   }

  const handleClick = (e:FormEvent) => {
      e.preventDefault();
      //navigate("/cart");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AppDrawer/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mykaa
          </Typography>
          <Button color="inherit" component={Link} to="/cart" >
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon/> 
            </Badge>
            <Box component="span" sx={{ ml:1.2 }}>
                Cart
            </Box>
          </Button>
          <Button color="inherit" onClick={handleClick} >
            <Box component="span" sx={{ ml:1.2 }}>
                logout
            </Box>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header