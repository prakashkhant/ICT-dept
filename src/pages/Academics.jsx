import "../assets/css/styles.css";

function Academics() {
  return (
    <>
      {/* Header */}
      <header className="text-center">
        <h1>Academics</h1>
      </header>

      {/* Courses Offered */}
      <section className="container py-4">
        <h2 className="section-title">Courses Offered</h2>
        <ul>
          <li>
            <strong>M.Sc. (ICT)</strong> – 2-year postgraduate program focusing on
            software development, networking, and communication technology.
          </li>
          <li>
            <strong>M.Sc. (IT)</strong> – 2-year postgraduate program focusing on
            core IT skills and software engineering.
          </li>
        </ul>
      </section>

      {/* Curriculum Table */}
      <section className="container py-4">
        <h2 className="section-title">Curriculum Structure</h2>
        <table className="table table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th>Program</th>
              <th>Year</th>
              <th>Semesters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>M.Sc. (ICT)</td>
              <td>1st Year</td>
              <td>Semester 1 & 2</td>
            </tr>
            <tr>
              <td>M.Sc. (ICT)</td>
              <td>2nd Year</td>
              <td>Semester 3 & 4</td>
            </tr>
            <tr>
              <td>M.Sc. (IT)</td>
              <td>1st Year</td>
              <td>Semester 1 & 2</td>
            </tr>
            <tr>
              <td>M.Sc. (IT)</td>
              <td>2nd Year</td>
              <td>Semester 3 & 4</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Syllabus PDFs */}
      <section className="container py-4">
        <h2 className="section-title">Download Syllabus</h2>
        <ul>
          <li>
            <a href="/pdf/MSc_ICT_Syllabus.pdf" target="_blank" rel="noreferrer">
              M.Sc. (ICT) – Full Syllabus
            </a>
          </li>
          <li>
            <a href="/pdf/MSc_IT_Syllabus.pdf" target="_blank" rel="noreferrer">
              M.Sc. (IT) – Full Syllabus
            </a>
          </li>
        </ul>
      </section>

      {/* Brochures */}
      <section className="container py-4">
        <h2 className="section-title">Download Brochures</h2>
        <ul>
          <li>
            <a href="/pdf/prospectus_msc_ICT.pdf" target="_blank" rel="noreferrer">
              M.Sc. (ICT) Brochure
            </a>
          </li>
          <li>
            <a href="/pdf/prospectus_msc_it.pdf" target="_blank" rel="noreferrer">
              M.Sc. (IT) Brochure
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-3">
        <p>© 2025 Department of ICT – VNSGU | Designed by Students</p>
      </footer>
    </>
  );
}

export default Academics;
