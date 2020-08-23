import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container">
      <h3 classNameName="d-flex display-3">ABOUT ME</h3>
      <div className="row p-5">
        <div className="card text-white bg-danger col-mb-3 ">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Danger card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-white bg-warning col-mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Warning card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-white bg-info col-mb-3 ">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Info card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
