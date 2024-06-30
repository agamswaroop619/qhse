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
    <div style={{ display: "flex", flexDirection: "column", zIndex: "10" }}>
      <AppBar position="static" style={{ backgroundColor: "#003366" }}>
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <span style={{ color: "#007bff", fontWeight: "700" }}>Q</span>
            <span style={{ color: "#ff0000", fontWeight: "700" }}>H</span>
            <span style={{ color: "#ffa500", fontWeight: "700" }}>S</span>
            <span style={{ color: "#008000", fontWeight: "700" }}>E</span>{" "}
            Services
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
              <Tab label="Connect" component={Link} href="/connect" />
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
            backgroundColor: "#003366",
            color: theme.palette.primary.contrastText,
          }}
        >
          <BottomNavigationAction
            icon={<HomeIcon />}
            component={Link}
            href="/home"
            style={{ color: theme.palette.primary.contrastText }}
          />
          <BottomNavigationAction
            icon={<BuildIcon />}
            component={Link}
            href="/solutions"
            style={{ color: theme.palette.primary.contrastText }}
          />
          <BottomNavigationAction
            icon={<InfoIcon />}
            component={Link}
            href="/connect"
            style={{ color: theme.palette.primary.contrastText }}
          />
        </BottomNavigation>
      )}
    </div>
  );
}
