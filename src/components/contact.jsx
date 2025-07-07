import { useState } from "react";
import emailjs from "emailjs-com";
import { React } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

// Responsive modern textarea component
const ResponsiveTextarea = ({ value, onChange }) => (
  <textarea
    name="message"
    className="form-control"
    rows="5"
    placeholder="Your Message"
    required
    value={value}
    onChange={onChange}
    style={{
      marginBottom: "20px",
      padding: "14px 16px",
      borderRadius: "20px",
      resize: "vertical",
      width: "100%",
      border: "1px solid #ccc",
    }}
  ></textarea>
);

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytvl59i",
        "template_0e7ue9w",
        e.target,
        "V_XCevpBrTy5oJn0q"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" style={{ padding: "60px 0", backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <div className="row">
          {/* Left: Contact Form */}
          <div className="col-md-8">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>Please fill out the form below. We'll get back to you soon.</p>
            </div>
            <form name="sentMessage" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={handleChange}
                    style={{
                      marginBottom: "15px",
                      padding: "14px 16px",
                      borderRadius: "15px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={handleChange}
                    style={{
                      marginBottom: "15px",
                      padding: "14px 16px",
                      borderRadius: "15px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>

              <ResponsiveTextarea value={message} onChange={handleChange} />

              <button
                type="submit"
                className="btn btn-custom btn-lg"
                style={{
                  backgroundColor: "#333",
                  color: "#fff",
                  padding: "12px 25px",
                  border: "none",
                  borderRadius: "20px",
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="col-md-4">
            <div className="contact-info" style={{ marginTop: "30px" }}>
              <h3>Contact Info</h3>
              <p>
                <i className="fa fa-map-marker"></i>{" "}
                {props.data ? props.data.address : "loading"}
              </p>
              <p>
                <i className="fa fa-phone"></i>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
              <p>
                <i className="fa fa-envelope-o"></i>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
              <div className="social" style={{ marginTop: "20px" }}>
                <ul className="list-inline">
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-12 text-center text-white">
            <p>
              &copy; UnixmouldEngineering 2025. Developed by{" "}
              <a
                href="https://blinkcodedev.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                BlinkCodeDev.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
