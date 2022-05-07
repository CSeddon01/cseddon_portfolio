import React from 'react';
// import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


export default class App extends React.Component {
  

render() {
 
  return (
    <body>
    <div>
      {/* <Router> */}
        <div>
          <Nav></Nav>
          <About></About>
        </div>
      {/* </Router> */}

      
    </div>
    </body>
  );
}
}

