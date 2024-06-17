"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Website
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link href="/home" passHref>
                  <Typography component="a" color="inherit">
                    Home
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/solutions" passHref>
                  <Typography component="a" color="inherit">
                    Solutions
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/about" passHref>
                  <Typography component="a" color="inherit">
                    About
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="navigation tabs"
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab label="Home" component={Link} href="/home" />
            <Tab label="Solutions" component={Link} href="/solutions" />
            <Tab label="About" component={Link} href="/about" />
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}
