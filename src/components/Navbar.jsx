import * as React from 'react';
import { AppBar, Grid, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from '@mui/icons-material';
import HideOnScroll from '../functions/HideOnScroll';
import Link from '@mui/material/Link';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';

const navItems = [
  { id:1, title: 'HOME', path: '/' },
  { id:2, title: 'ABOUT', path: '/about' },
  { id:3, title: 'CONTACT', path: '/contact' },
  { id:3, title: 'PORTFOLIO', path: '/Portfolio' },
  
];

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Grid sx={{ width: 250, backgroundColor:'background.main' ,minHeight:'100vh'}}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link component={RouterLink} to={item.path} onClick={handleDrawerToggle} underline="none"
>
            <Button
            sx={{ 
              color:'dark.main',
              textDecorationColor:'background.main',
              ':hover':{
                color:'dark.gray'
              }
             }
             
            } >
              <Button 
              sx={{
                
              }} />{item.title}
            </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  return (
    <Grid justifyContent="space-around" sx={{ flexGrow: 1 }}>
      <HideOnScroll> 
       
        <AppBar   sx={{maxWidth:'100vw', position: 'fixed', left: 0, right: 0}}>
          <Toolbar  sx={{textAlign:'left', justifyContent:'space-around',backgroundColor:'background.main'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { md: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuOutlined />
            </IconButton>
            <Grid  container justifyContent='flex-start'
            >
            <Link to='/'  sx={{ flexGrow: 1 }} underline="none" component={RouterLink}
>
            <Button
            sx={{
              ':hover':{
                color:'dark.main'
              }
            }}
            >
             {/* <Typography variant="h6" component="div" color="dark.main"  sx={{ flexGrow: 1 , textDecoration:'none',':hover':{color:'backgorund.main'}}}> */}
              virginia
            {/* </Typography> */}
            </Button>
            
            </Link>
            </Grid>
            <Grid container sx={{ display: { xs: 'none', md: 'flex' }}}>
            <Grid sx={{ display:'flex', justifyContent:'flex-end', flexGrow:1}}>
              {navItems.map((item) => (
                <Link key={item.id} to={item.path} component={RouterLink} >
                <Button key={item.id} color="primary"  
                sx={{
                  ':hover':{
                    color:'dark.main'
                  }
                }}>
                  {item.title}
                </Button>
                </Link>
              ))}
            </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        </HideOnScroll>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          {drawer}
        </Drawer>
      </Grid>
  );
};

export default NavBar;
