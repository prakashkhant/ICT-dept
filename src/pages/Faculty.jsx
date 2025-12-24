import "../assets/css/styles.css";

// Faculty images
import pydesai from "../assets/images/faculties/pydesai.jpg";
import kp from "../assets/images/faculties/kp.jpg";
import rpanchal from "../assets/images/faculties/rpanchal.png";
import dhaval from "../assets/images/faculties/dhavaljoshi.jpeg";
import shailesh from "../assets/images/faculties/shailesh_chaudhri.jpg";
import payal from "../assets/images/faculties/payalpandya.jpg";
import parul from "../assets/images/faculties/parul_patel.jpg";
import hitesh from "../assets/images/faculties/hiteshlad.jpg";
import veena from "../assets/images/faculties/veena_jokhakar.jpg";
import falguni from "../assets/images/faculties/falguni.jpg";
import divyangi from "../assets/images/faculties/dchaudhari.jpeg";
import maitri from "../assets/images/faculties/mhingu.jpg";

function Faculty() {
  const facultyList = [
    { name: "Dr. Pushpal Desai", role: "Professor & HOD", img: pydesai },
    { name: "Dr. Kamlendu Pandey", role: "Assistant Professor", img: kp },
    { name: "Ms. Rupal Panchal", role: "Teaching Assistant", img: rpanchal },
    { name: "Dr. Dhaval Joshi", role: "Assistant Professor", img: dhaval },
    { name: "Dr. Shailesh Chaudhari", role: "Assistant Professor", img: shailesh },
    { name: "Dr. Payal Joshi", role: "Assistant Professor", img: payal },
    { name: "Dr. Parul Patel", role: "Assistant Professor", img: parul },
    { name: "Dr. Hitesh Lad", role: "Assistant Professor", img: hitesh },
    { name: "Dr. Veena Jokhakar", role: "Assistant Professor", img: veena },
    { name: "Ms. Falguni Thakker", role: "Teaching Assistant", img: falguni },
    { name: "Ms. Divyangi Chaudhari", role: "Contractual Assistant Professor", img: divyangi },
    { name: "Ms. Maitri Hingu", role: "Teaching Assistant", img: maitri }
  ];

  return (
    <>
      {/* Header */}
      <header className="text-center">
        <h1>Our Faculty</h1>
      </header>

      {/* Faculty Cards */}
      <div className="container py-5">
        <div className="row">
          {facultyList.map((f, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card faculty-card shadow-sm">
                <img src={f.img} className="card-img-top" alt={f.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{f.name}</h5>
                  <p className="card-text">
                    <strong>{f.role}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-3">
        <p>© 2025 Department of ICT – VNSGU | Designed by Students</p>
      </footer>
    </>
  );
}

export default Faculty;
