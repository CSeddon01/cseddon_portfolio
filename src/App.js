import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//Makes it look like you are going to individual pages even though this is a SPA application.  Leaves footer and Nav static.
export default function App() {
  const [pages] = useState([
    { name: 'Home', description: 'About' },
    { name: 'Portfolio', description: 'Portfolio' },
    { name: 'Contact', description: 'Contact' },
    { name: 'Resume', description: 'Resume' },
  ]);
  const [currentPage, setcurrentPage] = useState(pages[0]);

  return (
    <div class='container-fluid homepage-bgimage'>
      <Nav
        pages={pages}
        setcurrentPage={setcurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main>
        {currentPage.name === 'Home' ?
          (<About></About>)
          : currentPage.name === 'Portfolio' ?
            (<Portfolio></Portfolio>)
            : currentPage.name === 'Resume' ?
              (<Resume></Resume>)
              : currentPage.name === 'ContactForm' ?
                (<ContactForm />)
                : (<></>)
        }
      </main>
      <footer style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: ''
      }}>
        <Footer />
      </footer>
    </div>
  );
}

