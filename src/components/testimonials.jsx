import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials" className="modern-testimonials">
      <div className="container">
        <div className="modern-section-title">
          <h2>What Our Clients Say</h2>
          <p>Don't just take our word for it. Here's what our satisfied clients have to say about our services.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 mb-4">
                  <div className="modern-testimonial-card">
                    <div className="modern-testimonial-content">
                      <p>{d.text}</p>
                    </div>
                    <div className="modern-testimonial-author">
                      <img src={d.img} alt={d.name} className="modern-testimonial-avatar" />
                      <div className="modern-testimonial-info">
                        <h4>{d.name}</h4>
                        <p>Satisfied Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};