import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="modern-services">
      <div className="container">
        <div className="modern-section-title">
          <h2>Our Services</h2>
          <p className="section-description">
            At Unix Mould Engineering, we provide precision mould making and CNC machining solutions tailored to your industrial and manufacturing needs. Our services are designed to ensure durability, efficiency, and accuracy for every project.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 mb-4">
                  <div className="modern-service-card">
                    <div className="modern-service-icon">
                      <i className={d.icon}></i>
                    </div>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading services..."}
        </div>
      </div>
    </div>
  );
};