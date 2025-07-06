import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="modern-features">
      <div className="container">
        <div className="modern-section-title">
          <h2>Why Choose UnixMould?</h2>
          <p>Discover what makes us the preferred choice for precision engineering and CNC machining solutions.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-6 col-md-3 mb-4">
                  <div className="modern-feature-card animate-fade-in-up">
                    <div className="modern-feature-icon">
                      <i className={d.icon}></i>
                    </div>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};