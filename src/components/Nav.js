import React, { Component } from 'react';
import logo from '../assets/images/logo.png';


export default class Nav extends Component {
    render() {

        return (
            <div id='root'>
                <div className='body-wrapper'>
                    <div className='sticky-outer-wrapper'>
                        <div className='sticky-inner-wrapper'>
                            <nav className='navbar navbar-expand-lg navbar-light'>
                                
                                <div className='container undefined'>
                                    <a className='navbar-brand' href='./'>
                                        <img src={logo} alt='logo' />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                                        <ul className='nav navbar-nav'>
                                            <li className='nav-item active'>
                                                <a className='nav-link' href='#'>Home<span className="sr-only"></span></a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link' href='#'>About</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link' href='#'>Portfolio</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link' href='#'>Resume</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link' href='#'>Contact</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Dropdown link
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

