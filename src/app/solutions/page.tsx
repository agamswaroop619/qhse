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
          <h2>System Certification Support</h2>
          <ul>
            <li>Quality Management System ISO 9000/ IATF 16949</li>
            <li>Occupational Health and Safety Management System ISO 45001</li>
            <li>
              Environment and Energy Management System ISO 14001 and ISO 50001
            </li>
            <li>Internal Audit and Guidance as per QMS/ OHSMS/ EMS</li>
            <li>
              Online Training for Standard (Specially on weekends for enhancing
              knowledge of working professionals)
            </li>
            <li>Training of 7-QC Tools and Support for Implementations</li>
          </ul>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2>Support – Continual Quality Improvement</h2>
          <ul>
            <li>
              Development of APQP and PPAP documents, specially:
              <ul>
                <li>Process Flow Chart</li>
                <li>FMEA</li>
                <li>Control Plan</li>
              </ul>
            </li>
            <li>
              Station Specific Pictorial Work Instruction / Standard Work Method
              (Both Hindi and English language)
            </li>
            <li>
              Training and Support for Problem Solving Tools Implementation
              <ul>
                <li>Example: 8D, RCA, WHY-WHY Analysis, CAR etc</li>
              </ul>
            </li>
            <li>
              Training of Continual Improvement Tools e.g. Kaizen / Pokayoke etc
            </li>
          </ul>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2>Occupational Health and Safety Initiative</h2>
          <ul>
            <li>Training and Support for Incident/Accident Investigation</li>
            <li>Hazard Identification and Risk Assessment</li>
            <li>Ergonomics Assessment</li>
            <li>
              Online Training and Support for Implementation of Critical Safety
              Initiatives:
              <ul>
                <li>Lock out Tag out</li>
                <li>Hoist and Crane</li>
                <li>Chemical Management</li>
                <li>Noise Management</li>
              </ul>
            </li>
          </ul>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2>Environment and HSE Compliance Initiative</h2>
          <ul>
            <li>
              HSE Compliance:
              <ul>
                <li>
                  Making HSE Legal Register (XL sheet) for ensuring compliance
                  on time
                </li>
                <li>
                  Support for Consent to Establish, Consent to operate, annual
                  report, Form 4, Form 5 submission as per different
                  Environmental Act and Rule, Factory Rule and CGWS requirements
                </li>
                <li>Consultation for HSE Legal issues</li>
              </ul>
            </li>
            <li>
              Environment:
              <ul>
                <li>Environment Aspect Impact Study</li>
                <li>
                  Consultation for Continual Improvement related to Water, Waste
                  and Energy aspects
                </li>
              </ul>
            </li>
          </ul>
        </section>
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
