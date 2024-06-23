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
        <Box
          sx={{
            height: "50vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            <span style={{ color: "#007bff", fontWeight: "700" }}>Q</span>
            <span style={{ color: "#ff0000", fontWeight: "700" }}>H</span>
            <span style={{ color: "#ffa500", fontWeight: "700" }}>S</span>
            <span style={{ color: "#008000", fontWeight: "700" }}>E</span>{" "}
            Solutions
          </Typography>
          <Typography variant="h5" component="h2" style={{ color: "black" }}>
            Transforming Businesses with{" "}
            <Typewriter
              words={[
                "ISO Certifications",
                "Safety Training",
                "Environmental Compliance",
                "Continuous Improvement",
                "Risk Assessment",
                "Compliance Initiatives",
              ]}
              loop
              cursor
              cursorStyle={<span style={{ color: "#003366" }}>•</span>}
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </Typography>
        </Box>
        <Box sx={{ height: "50vh", width: "100%" }}>
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={2000}
          >
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  style={{ height: "50vh", objectFit: "cover" }}
                />
              </div>
            ))}
          </Carousel>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
