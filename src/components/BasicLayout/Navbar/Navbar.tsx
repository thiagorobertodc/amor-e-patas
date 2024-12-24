import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./style.scss";
import { Link } from "react-router-dom"; // Import Link

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Página Inicial" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemText primary="Serviços" />
        </ListItem>
        <ListItem button component={Link} to="/blog">
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contato" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box className="navbar-container">
      <AppBar position="static" className="navbar-appbar">
        <Toolbar className="navbar-toolbar">
          {/* Logo and Title */}
          <div className="navbar-logo-container">
            <img src="src/assets/images/aep.svg" alt="Logo" className="logo" />
            <Typography variant="h6" className="title">
              Amor e Patas
            </Typography>
          </div>

          {/* Menu Items for Larger Screens */}
          <div className="navbar-menu">
            <Typography variant="body1" className="desktop-menu">
              <Link to="/" className="menu-link">
                Página Inicial
              </Link>
            </Typography>
            <Typography variant="body1" className="desktop-menu">
              <Link to="/services" className="menu-link">
                Serviços
              </Link>
            </Typography>
            <Typography variant="body1" className="desktop-menu">
              <Link to="/blog" className="menu-link">
                Blog
              </Link>
            </Typography>
            <Typography variant="body1" className="desktop-menu">
              <Link to="/contact" className="menu-link">
                Contato
              </Link>
            </Typography>
          </div>

          {/* Social Media Icons */}
          <div className="navbar-icons">
            <a
              href="https://www.instagram.com/amorepatasvet/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-icon-link"
            >
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </a>

            <a
              href="https://wa.me/+553199381294"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-icon-link"
            >
              <IconButton>
                <WhatsAppIcon />
              </IconButton>
            </a>
          </div>

          {/* Hamburger Menu Icon for Small Screens */}
          <IconButton
            edge="start"
            className="mobile-menu-icon"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </Box>
  );
}
