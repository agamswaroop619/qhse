"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
    });
  }, []);

  const sections = [
    {
      title: "System Certification Support",
      content: [
        "Quality Management System ISO 9000/ IATF 16949",
        "Occupational Health and Safety Management System ISO 45001",
        "Environment and Energy Management System ISO 14001 and ISO 50001",
        "Internal Audit and Guidance as per QMS/ OHSMS/ EMS",
        "Online Training for Standard (Specially on weekends for enhancing knowledge of working professionals)",
        "Training of 7-QC Tools and Support for Implementations",
      ],
    },
    {
      title: "Support – Continual Quality Improvement",
      content: [
        "Development of APQP and PPAP documents, specially:",
        "Station Specific Pictorial Work Instruction / Standard Work Method (Both Hindi and English language)",
        "Training and Support for Problem Solving Tools Implementation",
        "Training of Continual Improvement Tools e.g. Kaizen / Pokayoke etc",
      ],
      subcontent: [
        ["Process Flow Chart", "FMEA", "Control Plan"],
        ["Example: 8D, RCA, WHY-WHY Analysis, CAR etc"],
      ],
    },
    {
      title: "Occupational Health and Safety Initiative",
      content: [
        "Training and Support for Incident/Accident Investigation",
        "Hazard Identification and Risk Assessment",
        "Ergonomics Assessment",
        "Online Training and Support for Implementation of Critical Safety Initiatives:",
      ],
      subcontent: [
        [
          "Lock out Tag out",
          "Hoist and Crane",
          "Chemical Management",
          "Noise Management",
        ],
      ],
    },
    {
      title: "Environment and HSE Compliance Initiative",
      content: ["HSE Compliance:", "Environment:"],
      subcontent: [
        [
          "Making HSE Legal Register (XL sheet) for ensuring compliance on time",
          "Support for Consent to Establish, Consent to operate, annual report, Form 4, Form 5 submission as per different Environmental Act and Rule, Factory Rule and CGWS requirements",
          "Consultation for HSE Legal issues",
        ],
        [
          "Environment Aspect Impact Study",
          "Consultation for Continual Improvement related to Water, Waste and Energy aspects",
        ],
      ],
    },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Navbar />
      <Box sx={{ flex: 1 }}>
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              minHeight: "100vh",
              padding: "40px",
              background: `linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(${
                (index + 1) * 50
              }, ${(index + 1) * 100}, ${(index + 1) * 150}, 1) 100%)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <section>
              <h2 data-aos="fade-up">{section.title}</h2>
              <ul>
                {section.content.map((item, idx) => (
                  <li
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={`${idx * 100}`}
                  >
                    {item}
                    {section.subcontent && section.subcontent[idx] && (
                      <ul>
                        {section.subcontent[idx].map((subitem, subidx) => (
                          <li
                            key={subidx}
                            data-aos="fade-up"
                            data-aos-delay={`${(idx + subidx) * 100}`}
                          >
                            {subitem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
      </Box>
      <Footer />
    </div>
  );
}
