"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Sample images
const images = [
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/800x601",
  "https://source.unsplash.com/random/800x602",
  "https://source.unsplash.com/random/800x603",
  "https://source.unsplash.com/random/800x604",
  "https://source.unsplash.com/random/800x605",
];

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
