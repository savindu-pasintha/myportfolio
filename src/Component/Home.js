import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./Home.css";
import Video from "./Videos/Video";
import Fixed from "./Fixed/Fixed";

import Navigation from "./Navigation/Navigation";
import Professional from "./Professional/Professional";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Fixed /> {/**top 1 */}
        <Professional/>
        <Video />
     
      
      </BrowserRouter>
    </div>
  );
};

export default Home;
