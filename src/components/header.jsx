import React from "react";

export const Header = (props) => {
  return (
    <header id="header" className="modern-header">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="animate-fade-in-up">
              <h1>
                {props.data ? props.data.title : "Loading"}
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#features" className="modern-btn modern-btn-primary page-scroll">
                  <i className="fa fa-rocket"></i>
                  Learn More
                </a>
                <a href="#contact" className="modern-btn page-scroll">
                  <i className="fa fa-phone"></i>
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};