import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CategoryIcon from '@mui/icons-material/Category';
import DiscountIcon from '@mui/icons-material/Discount';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const AppDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer =(open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };


  return (
    <>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
        >
            <MenuIcon />
        </IconButton>
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer(false)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                          <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>   
                    {['Categories', 'Returns', 'Support'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                        {index === 0 ? <CategoryIcon /> : index===1 ? <DiscountIcon /> : <HelpIcon/> }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                          <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="sign out" />
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
           
    </>
  )
}

export default AppDrawer;