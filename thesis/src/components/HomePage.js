
import {  useNavigate } from "react-router-dom";
import React from "react";
import "./HomePage.css";
import UploadButton from "./UploadButton";

function HomePage() {

const navigate = useNavigate()
  return (
    <div className="App">
      <header className="header">
        <div className="logo"><b>Project</b> Finder</div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li className="butt">
              <button onClick={()=>navigate('log-in')}>Log In</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="body">
        <div className="description">
          <h1>Thesis store & finder</h1>
          <p>
            We offer a wide range of services to meet all your needs. Whether
            you're looking for web development, graphic design, or content
            creation, we have you covered. Our team of experts is dedicated to
            providing you with the highest quality work, delivered on time and
            within budget. Contact us today to get started!
          </p>
        </div>
       
        
      </div>
      <UploadButton/>
    </div>
  );
}

export default HomePage;