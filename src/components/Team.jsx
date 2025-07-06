export const MapSection = () => {
  return (
    <div id="location" className="modern-map">
      <div className="container">
        <div className="modern-section-title">
          <h2>Find Us</h2>
          <p>
            Visit our state-of-the-art facility where precision meets innovation. We're always ready to welcome you for a discussion about your next project.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="modern-map-container" style={{ height: "500px" }}>
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4725.325401143491!2d101.6170111!3d3.2020294999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc460811c10f6d%3A0x25d3644d3af7765c!2sUnix%20Mould%20Engineering!5e1!3m2!1sen!2smy!4v1751730434006!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};