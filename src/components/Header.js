import React, { Component} from 'react';
import bgpic from '../../public/assets/images/bluebg.jpg';
import logo from '../../public/assets/images/CS_logo_blue.png';

class Header extends Component {
    render() {
       return (
           <header>
               <bgpic type="images" bg={true} />
               <ul id="nav" className="nav">
                   <li>
                       <a className="About"></a>
                   </li>
                   <li>
                       <a className="Portfolio"></a>
                   </li>
                   <li>
                       <a className="Resume"></a>
                   </li>
                   <li>
                       <a className="Contact"></a>
                   </li>
               </ul>
           </header>
       )
    }
}

export default Header;