import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
// import Spacer from './components/Spacer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


export default function App() {

  return (
    <>
      <body>
        <
          Nav />
        <
          About />
      </body>
      {/* <
        Spacer /> */}
      <
        Portfolio />
      {/* <
        Spacer /> */}
      <div className="flex-row space-between">
        <
          Contact />
        <
          ContactForm />
      </div>
      <footer>
      <
        Footer />
        </footer>
    </>

  );
}

