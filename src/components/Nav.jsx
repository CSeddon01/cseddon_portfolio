import React from 'react';
import logo from '../assets/images/CS_logo_blue.png';
import Navbar from './Navbar';

export default function Nav(props) {

    //logo side of the Navbar
    const { pages = [], setcurrentPage, currentPage } = props;
    return (
        <div className='body-wrapper'>
            <div className='sticky-outer-wrapper'>
                <div className='sticky-inner-wrapper'>
                    <div className='container undefined'>
                        <a className='navbar-brand' href='./'>
                            <img src={logo} style={{ width: 200, marginTop: -7 }} alt='logo' />
                        </a>
                        <Navbar pages={pages} setcurrentPage={setcurrentPage} currentPage={currentPage}></Navbar>
                    </div>
                </div>
            </div>
        </div>
    )
}


