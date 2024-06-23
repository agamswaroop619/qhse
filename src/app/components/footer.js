import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Footer() {
  return (
    <footer
      className="bg-light text-dark flex px-2"
      style={{ marginTop: "auto" }}
    >
      <img src="/favicon.png" alt="QHSE Solutions Logo" />
      <p>&copy; 2024 QHSE Solutions. All rights reserved.</p>
    </footer>
  );
}
