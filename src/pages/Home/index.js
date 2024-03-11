import React from 'react';
import './Home.css';

function Home() {

    return (
      <div>
        <div className="moon">
          <div className="crater"></div>
        </div>
  
        <div className="footprints">
          <span></span>
          <span></span>
          <span></span>
        </div>
  
        <div className="astronaut">
  
          <div className="backpack"></div>
  
          <div className="head">
            <div className="helmet"></div>
          </div>
  
          <div className="neck"></div>
  
          <div className="body"></div>
  
          <div className="arm right">
            <div className="top"></div>
            <div className="bot"></div>
            <div className="hand"></div>
          </div>
  
          <div className="arm left">
            <div className="top"></div>
            <div className="bot"></div>
            <div className="hand"></div>
          </div>
  
          <div className="leg right">
            <div className="top"></div>
            <div className="bot"></div>
            <div className="foot"></div>
          </div>
  
          <div className="leg left">
            <div className="top"></div>
            <div className="bot"></div>
            <div className="foot"></div>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Home;
  
