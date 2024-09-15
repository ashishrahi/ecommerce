import { useState } from 'react';
import { Box, Grid, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import AccountAlertIcon from '@mui/icons-material/NotificationImportant';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/images/Meubel House_Logos-05.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250, bgcolor: 'background.paper' }}>
      <List>
        {['Home', 'Shop', 'About', 'Contact'].map((text) => (
          <ListItem button key={text}>
            <NavLink 
              to={`/${text.toLowerCase()}`} 
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '#d4af37' : '#000', // Dark golden color for active state
                display: 'block',
                padding: '12px 16px',
                borderRadius: '8px',
                fontWeight: isActive ? 'bold' : 'normal', // Bold for active link
                borderBottom: isActive ? '2px solid #d4af37' : 'none', // Underline for active link
              })}
            >
              <ListItemText primary={text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ width: '100%', height: { xs: 80, md: 100 }, position: 'relative', bgcolor: 'white', boxShadow: 2 }}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ height: '100%', px: { xs: 2, md: 6 } }}>
        
        {/* Logo and Title */}
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: 50, height: 32 }}
            />
            <Typography 
              variant="h4" 
              fontFamily="Montserrat" 
              fontWeight={700}
              sx={{ fontSize: { xs: '24px', md: '34px' }, color: '#000' }}
            >
              Furniro
            </Typography>
          </Box>
        </Grid>

        {/* Mobile Menu Icon */}
        <Grid item sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Grid>

        {/* Navigation Links (hidden on mobile) */}
        <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
            {['Home', 'Shop', 'About', 'Contact'].map((text) => (
              <NavLink 
                key={text}
                to={`/${text.toLowerCase()}`} 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#d4af37' : '#000', // Dark golden color for active state
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontWeight: isActive ? 'bold' : 'normal',
                  fontSize: '16px', // Adjust font size as needed
                  transition: 'color 0.3s, border-bottom 0.3s', // Smooth transition
                  borderBottom: isActive ? '2px solid #d4af37' : 'none', // Underline for active link
                })}
              >
                <Typography variant="body1" fontFamily="Poppins" fontWeight={500}>
                  {text}
                </Typography>
              </NavLink>
            ))}
          </Box>
        </Grid>

        {/* Icons */}
        <Grid item>
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
            <NavLink to="/notifications" style={{ color: 'inherit' }}>
              <IconButton size="large">
                <AccountAlertIcon />
              </IconButton>
            </NavLink>
            <NavLink to="/search" style={{ color: 'inherit' }}>
              <IconButton size="large">
                <SearchIcon />
              </IconButton>
            </NavLink>
            <NavLink to="/favorites" style={{ color: 'inherit' }}>
              <IconButton size="large">
                <FavoriteIcon />
              </IconButton>
            </NavLink>
            <NavLink to="/cart" style={{ color: 'inherit' }}>
              <IconButton size="large">
                <ShoppingCartIcon />
              </IconButton>
            </NavLink>
          </Box>
        </Grid>
      </Grid>

      {/* Drawer component for mobile menu */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
