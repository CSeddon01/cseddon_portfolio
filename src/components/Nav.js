import React, { Component } from 'react';
import logo from '../assets/images/logo.png';



class Nav extends Component {
    render() {

        return (
            <div id='root'>
                <div className='body-wrapper'>
                    <div className='sticky-outer-wrapper'>
                        <div className='sticky-inner-wrapper'>
                            <nav className='navbar navbar-expand-lg navbar-light menu_two'>
                                <div className='container undefined'>
                                    <a className='navbar-brand logo_h' href='./'>
                                        <img src={logo} alt='logo' />
                                    </a>
                                    <a href='./' className='btn get-btn get-btn-two d-lg-none d-md-block login'>Login</a>
                                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expand='false' aria-label='Toggle navigation'>
                                        <span className='icon-bar'></span>
                                        <span className='icon-bar'></span>
                                        <span className='icon-bar'></span>
                                    </button>
                                    <div className='collapse navbar-collapse offset' id='navbarSupportedContent'>
                                        <ul className='nav navbar-nav m-auto'>
                                            <li className='nav-item'>
                                                <a className='nav-link active'>Home</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link active'>About</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link active'>Portfolio</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link active'>Resume</a>
                                            </li>
                                            <li className='nav-item'>
                                                <a className='nav-link active'>Contact</a>
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

export default Nav;