import "../assets/css/styles.css";

// Event images
import event1 from "../assets/images/events/event1.jpg";
import event2 from "../assets/images/events/event2.jpg";
import event3 from "../assets/images/events/event3.jpg";

function Student() {
  return (
    <>
      {/* Header */}
      <header className="text-center">
        <h1>Student Corner</h1>
        <p className="lead">
          Celebrating achievements, activities, placements, and success stories
        </p>
      </header>

      {/* Events & Activities */}
      <section className="container my-5">
        <h3>🏆 Recent Events & Activities</h3>
        <div className="list-group">
          <div className="list-group-item">
            <strong>Workshop on AI & ML (Jan 4–13, 2024)</strong>
            <br />
            Conducted by Dr. Pushpal Desai
          </div>
          <div className="list-group-item">
            <strong>Alumni Meet 2023</strong>
            <br />
            Alumni shared career guidance with students
          </div>
          <div className="list-group-item">
            <strong>Building Next-Gen Applications</strong>
            <br />
            Hands-on workshop with 40 participants
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container my-5">
        <h3>📸 Event Gallery</h3>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src={event1} className="img-fluid rounded shadow" alt="Event 1" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={event2} className="img-fluid rounded shadow" alt="Event 2" />
          </div>
          <div className="col-md-4 mb-3">
            <img src={event3} className="img-fluid rounded shadow" alt="Event 3" />
          </div>
        </div>
      </section>

      {/* Placement Table */}
      <section className="container my-5">
        <h3>💼 Placement Highlights</h3>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Year</th>
              <th>Highest Package</th>
              <th>Average Package</th>
              <th>Top Recruiters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024</td>
              <td>₹7.5 LPA</td>
              <td>₹3.8 LPA</td>
              <td>TCS, Infosys, Wipro</td>
            </tr>
            <tr>
              <td>2023</td>
              <td>₹6.2 LPA</td>
              <td>₹3.5 LPA</td>
              <td>Capgemini, Tech Mahindra</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Video */}
      <section className="container my-5">
        <h3>🎥 Student Video</h3>
        <video width="100%" controls>
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Footer */}
      <footer className="text-center py-3" style={{ background: "#002147", color: "white" }}>
        <p>© 2025 Department of ICT – VNSGU | Designed by Students</p>
        <p>
          <a href="https://vnsgu.ac.in" style={{ color: "#ffc107" }}>
            Visit VNSGU Official Website
          </a>
        </p>
      </footer>
    </>
  );
}

export default Student;
