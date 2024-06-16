import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="bg-light text-dark text-center py-3">
      <img src="/favicon.png" alt="QHSE Solutions Logo" className="mb-2" />
      <p>&copy; 2024 QHSE Solutions. All rights reserved.</p>
    </footer>
  );
}
