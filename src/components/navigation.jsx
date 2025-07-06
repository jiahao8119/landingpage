import React, { useState, useEffect } from "react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-default navbar-fixed-top modern-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <i className="fa fa-cogs" style={{ marginRight: '0.5rem' }}></i>
            UnixMould Engineering
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                <i className="fa fa-star" style={{ marginRight: '0.5rem' }}></i>
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                <i className="fa fa-info-circle" style={{ marginRight: '0.5rem' }}></i>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                <i className="fa fa-wrench" style={{ marginRight: '0.5rem' }}></i>
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                <i className="fa fa-comments" style={{ marginRight: '0.5rem' }}></i>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#location" className="page-scroll">
                <i className="fa fa-map-marker" style={{ marginRight: '0.5rem' }}></i>
                Location
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                <i className="fa fa-envelope" style={{ marginRight: '0.5rem' }}></i>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};