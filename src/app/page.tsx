import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <main>
        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          <link rel="icon" href="/favicon.png" sizes="any" />
        </header>
        <section style={{ marginBottom: "20px" }}>
          <h2>System Certification Support</h2>
          <ul>
            <li>Quality Management System ISO 9000/ IATF 16949</li>
            <li>Occupational Health and Safety Management System ISO 45001</li>
            <li>
              Environment and Energy Management System ISO 14000 and ISO 5000
            </li>
            <li>Internal Audit and Guidance as per QMS/ OHSMS/ EMS</li>
            <li>
              Online Training for Standard (Specially on weekends for enhancing
              knowledge of working professionals)
            </li>
          </ul>
        </section>

        <section>
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
            <li>Training and Support for Problem Solving tool</li>
          </ul>
        </section>
      </main>

      <footer style={{ textAlign: "center", marginTop: "40px" }}>
        <p>&copy; 2024 QHSE Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
