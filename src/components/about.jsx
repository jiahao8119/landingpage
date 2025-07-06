import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="modern-about">
      <div className="container">
        <div className="modern-about-content">
          <div className="modern-about-text">
            <h2>About UnixMould Engineering</h2>
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Why Choose Us?
            </h3>
            
            <div className="modern-about-features">
              {props.data && props.data.Why
                ? props.data.Why.map((item, i) => (
                    <div key={`why-${i}`} className="modern-about-feature">
                      <i className="fa fa-check-circle"></i>
                      <span>{item}</span>
                    </div>
                  ))
                : "loading"}
              
              {props.data && props.data.Why2
                ? props.data.Why2.map((item, i) => (
                    <div key={`why2-${i}`} className="modern-about-feature">
                      <i className="fa fa-check-circle"></i>
                      <span>{item}</span>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
          
          <div className="modern-about-image">
            <img src="img/cncaboutus.jpg" className="img-responsive" alt="CNC Machining" />
          </div>
        </div>
      </div>
    </div>
  );
};