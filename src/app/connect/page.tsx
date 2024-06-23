"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Page() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Navbar />
      <Box sx={{ flex: 1 }}>
        <section style={{ marginBottom: "20px" }}>
          <h2>Connect</h2>
          <p>Mobile: +91-7079841145 (Mr. Ajay Ranjan)</p>
          <p>Email: connect.qhse.solution@gmail.com</p>
        </section>
      </Box>
      <Footer />
    </div>
  );
}
