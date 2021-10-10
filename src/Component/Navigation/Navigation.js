import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div class="nav">   
       
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
      SAVINDU@PASINTHA
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="https://github.com/savindu-pasintha?tab=repositories" target="blank">Github</a>
    <a href="https://savindupasingtha.medium.com" target="blank">Medium</a>
    <a href="https://www.linkedin.com/in/savindu-pasintha-6287a31a4/" target="blank">LinkedIn</a>
     <a href="email">savindupasingtha@gmail.com</a>
    <a href="call"> +94 76 875 5787</a> 
    <a href="call" style={{color:"gold"}}> WEB | MOBILE | DESKTOP Application Developer</a> 
  </div>
</div>
       
    );
}

export default Navigation;
