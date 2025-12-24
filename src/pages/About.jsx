import "../assets/css/styles.css";
import hod from "../assets/images/dept.jpg";

function About() {
  return (
    <>
      {/* Header */}
      <header className="text-center">
        <h1>About Us</h1>
      </header>

      {/* Vision */}
      <section className="container py-4">
        <h2 className="section-title">Vision</h2>
        <p>
          To be an institution of excellence in higher and technical education,
          sensitive to regional needs and global changes.
        </p>
      </section>

      {/* Mission */}
      <section className="container py-4">
        <h2 className="section-title">Mission</h2>
        <p>
          VNSGU offers programs through well-designed curricular and
          co-curricular activities, research, and outreach to society.
        </p>
      </section>

      {/* Department Info */}
      <section className="container py-4">
        <h2 className="section-title">About the Department</h2>
        <p>
          The Department of ICT was established in 2000 under Veer Narmad South
          Gujarat University. It offers M.Sc.(IT) and M.Sc.(ICT) programs with
          strong focus on programming, networking, and communication technology.
        </p>
      </section>

      {/* HOD Message */}
      <section className="container py-4">
        <h2 className="section-title">Message from HOD</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={hod}
              alt="HOD"
              className="img-fluid rounded-circle"
              width="200"
            />
          </div>
          <div className="col-md-8">
            <p>
              Welcome to the Department of ICT at VNSGU. We focus on academic
              excellence, research culture, and industry-ready skills.
            </p>
            <p>
              <strong>Dr. Pushpal Desai</strong> <br />
              Head of Department, ICT
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3">
        <p>© 2025 Department of ICT – VNSGU | Designed by Students</p>
        <p>
          <a href="https://vnsgu.ac.in">Visit VNSGU Official Website</a>
        </p>
      </footer>
    </>
  );
}

export default About;
