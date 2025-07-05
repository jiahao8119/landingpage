export const MapSection = () => {
  return (
    <div id="location" className="text-center" style={{ padding: "50px 0" }}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Locate Us</h2>
          <p>
            Find us at our headquarters. We're always ready to welcome you for a
            discussion about your next project.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              style={{
                width: "100%",
                height: "600px", // ⬅️ taller map
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)", // optional: visual polish
              }}
            >
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
