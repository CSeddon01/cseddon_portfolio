import React from 'react';
import logo from '../assets/images/logo.png';
import Navbar from './Navbar';

export default function Nav() {

    return (
        <div id='root'>
            <div className='body-wrapper'>
                <div className='sticky-outer-wrapper'>
                    <div className='sticky-inner-wrapper'>
                        <nav className='navbar navbar-expand-lg navbar-light'>
                            <div className='container undefined'>
                                <a className='navbar-brand' href='./'>
                                    <img src={logo} style={{ width: 200, marginTop: -7 }} alt='logo' />
                                </a>
                                <Navbar></Navbar>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}


