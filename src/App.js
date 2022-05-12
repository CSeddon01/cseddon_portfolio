import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function App() {
  const [pages] = useState([
    { name: 'Home', description: 'About' },
    { name: 'Portfolio', description: 'Portfolio' },
    { name: 'Contact', description: 'Contact' },
    { name: 'Resume', description: 'Resume' },
  ]);
  const [currentPage, setcurrentPage] = useState(pages[0]);
  return (
    <>
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
              : currentPage.name === 'Contact' ?
                (<div className='flex-row space-between'>
                  (<Contact></Contact>)
                  <ContactForm />
                </div>)
                : (<></>)
        }
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

