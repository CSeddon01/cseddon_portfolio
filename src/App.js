import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function App() {
  const appName = 'Christy'
  const appInfo = 'Business/Web Developer'

  return (
    <body>
       <
        Nav / >
        <
        About name={appName} number={appInfo} / >
        <
        Portfolio / >
        <
        Contact / >
        <
        Footer / >
        
    </body>
    // <>
    // <body>
    //   <div>
    //     <Nav></Nav>
    //   </div>
    //   <div>
    //     <About name={appName} number={appInfo}></About>
    //   </div>
    //   <div>
    //     <Portfolio></Portfolio>
    //   </div>
    //   <div>
    //     <Contact></Contact>
    //   </div>
    //   <div>
    //     <Footer></Footer>
    //   </div>
    // </body>
    // </>
  );
}

