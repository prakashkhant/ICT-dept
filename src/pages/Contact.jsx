import { useState } from "react";
import "../assets/css/styles.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Header */}
      <header className="text-center">
        <h1>Contact Us</h1>
      </header>

      {/* Contact Section */}
      <section className="container py-5">
        <div className="row">
          
          {/* Contact Form */}
          <div className="col-md-6">
            <h2 className="section-title">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Your Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "rgb(0,33,71)", border: "none" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="col-md-6">
            <h2 className="section-title">Contact Information</h2>
            <p>
              <strong>Department of ICT</strong><br />
              Veer Narmad South Gujarat University<br />
              Surat – 395007, Gujarat, India
            </p>
            <p>
              <strong>Email:</strong> dict@vnsgu.ac.in <br />
              <strong>Phone:</strong> +91-261-XXX-XXXX
            </p>
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.763727538143!2d72.784970!3d21.1585814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04df1844beac7%3A0x2e957a52fe09c94d!2sVNSGU%20IT!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="VNSGU Location"
></iframe>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3" style={{ background: "rgb(0,33,71)", color: "white" }}>
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

export default Contact;
