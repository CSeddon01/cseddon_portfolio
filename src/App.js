import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

export default function App () {
  const appName = "Christy"
  const appInfo = "Business/Web Developer"

    return (
      <body>
        <div>
          <div>
            <Nav></Nav>
          </div>
          <div>
            <About name={appName} number={appInfo}></About>
          </div>
        </div>
      </body>
    );
  }

