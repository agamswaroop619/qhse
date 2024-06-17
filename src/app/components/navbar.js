"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            My Website
          </Typography>
          {!isMobile && (
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
      {isMobile && (
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
          style={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            component={Link}
            href="/home"
            style={{ color: theme.palette.primary.contrastText }}
          />
          <BottomNavigationAction
            label="Solutions"
            icon={<BuildIcon />}
            component={Link}
            href="/solutions"
            style={{ color: theme.palette.primary.contrastText }}
          />
          <BottomNavigationAction
            label="About"
            icon={<InfoIcon />}
            component={Link}
            href="/about"
            style={{ color: theme.palette.primary.contrastText }}
          />
        </BottomNavigation>
      )}
    </div>
  );
}
