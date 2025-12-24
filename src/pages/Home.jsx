import "../assets/css/styles.css";
import campus from "../assets/images/campus.jpg";
import dept from "../assets/images/dept.jpg";
import introVideo from "../assets/images/intro.mp4";

function Home() {
  return (
    <>
      {/* ===== Header / Carousel ===== */}
      <div className="hero-section">
        <img src={campus} alt="Campus" className="hero-img" />

        <div className="hero-text">
          <h1>
            J.P. Dawar Institute of <br />
            Information Science and Technology
          </h1>
          <p>Department of ICT - Home</p>
        </div>
      </div>

      {/* ===== Department Info ===== */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h2 style={{ color: "rgb(0,33,71)" }}>
              Welcome to the Department of ICT – VNSGU
            </h2>
            <p className="lead">
              The Department of Information & Communication Technology at VNSGU
              focuses on teaching, research, and innovation to prepare students
              for modern IT careers.
            </p>

            <div className="row">
              <div className="col-6">🎓 UG & PG Programs</div>
              <div className="col-6">🏆 Industry Collaboration</div>
              <div className="col-6">📚 Modern Labs</div>
              <div className="col-6">💼 Strong Placements</div>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <img
              src={dept}
              className="img-fluid rounded shadow"
              alt="Department"
            />
          </div>
        </div>
      </section>

      {/* ===== Notifications ===== */}
      <div className="container my-5">
        <h3>Notifications</h3>
        <div className="notification-box shadow p-3 rounded">
          <ul>
            <li>Admissions open for M.Sc. (ICT)</li>
            <li>Workshop on Cybersecurity</li>
            <li>Guest lecture on AI Trends</li>
            <li>Placements for 2025 batch</li>
          </ul>
        </div>
      </div>

      {/* ===== Video ===== */}
      <div className="container my-5">
        <h3>Introduction Video</h3>
        <video width="90%" controls>
          <source src={introVideo} type="video/mp4" />
        </video>
      </div>

      {/* ===== Footer ===== */}
      <footer className="text-center py-3">
        <p>© 2025 Department of ICT – VNSGU | Designed by Students</p>
        <p>
          <a href="https://vnsgu.ac.in">Visit VNSGU Official Website</a>
        </p>
      </footer>
    </>
  );
}

export default Home;
