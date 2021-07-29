import React from 'react';
import "./Footer.css"

function Footer() {
  return (
<>
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*Colum1*/}
          <div className="col">
            <h4>Row1</h4>
            <ul className="list-unstyled">
              <li>Name</li>
              <li>Number</li>
              <li>location</li>
            </ul>

          </div>
          <div className="col">
            <h4>Row1</h4>
            <ul className="list-unstyled">
              <li>Name</li>
              <li>Number</li>
              <li>location</li>
            </ul>

          </div>
          <div className="col">
            <h4>Row1</h4>
            <ul className="list-unstyled">
              <li>Name</li>
              <li>Number</li>
              <li>location</li>
            </ul>

          </div>

        </div>
        <div className="row">
          <p className= "col-sm">
            Somthing like copy right
          </p>
        </div>
      </div>
    </div>
</>
  );
}

export default Footer;
