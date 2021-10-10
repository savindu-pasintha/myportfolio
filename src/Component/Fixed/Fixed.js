import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./Fixed.css";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

import img2 from "../Img/two.jpg";
import m from "../Videos/m.mp4";

const Fixed = () => {
  return (
    <div className="fixed">
      <div className="one">
        <Bounce top>
          <button type="button" class="btn  rounded-circle">
            <a href="https://www.linkedin.com/in/savindu-pasintha-6287a31a4/">
              <i class="bi bi-linkedin"></i>
            </a>
          </button>
        </Bounce>
      </div>
      <div className="one">
        <Bounce left>
          <button type="button" class="btn  rounded-circle">
            <a href="savindupasingtha@gmail.com">
              <i class="bi bi-envelope-fill"></i>
            </a>
          </button>
        </Bounce>
      </div>
      <div className="one">
        <Bounce bottom>
          <button type="button" class="btn  rounded-circle">
            <Link>
              {" "}
              <i class="bi bi-telephone-fill"> </i>
            </Link>
          </button>
        </Bounce>
      </div>

      <div className="name">
        <div className="h1">
          <Bounce top>
            <h1>
              SAVINDU PASINTHA <br />
              <p className="text-light">Software Enginner from Sri Lanka</p>
            </h1>
          </Bounce>
        </div>
      </div>

      <div className="img">
        <div className="img">
          <Flip left>
            <img src={img2} alt="savindu1" />
          </Flip>
        </div>
      </div>

      <div className="personal-profile">
        <div className="pp">
          <h1>Personal Profile</h1>
          <p>
            I love to think out of the box and find and implement brand new
            ideas and brand new solutions in IT industry, And also hang with a
            strong fun & challenging team and grab more and more experience ,and
            learn new necessary skills for my career. I'm motivated to do my
            best for the sake of helping myself and the company advancement in
            the IT industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fixed;
