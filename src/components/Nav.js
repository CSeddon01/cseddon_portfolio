import React from 'react';
import logo from '../assets/images/purplelogo.jpg';
import Navbar from './Navbar';

export default function Nav(props) {
    const { pages = [], setCurrentPage, currentPage } = props;
    return (
        <div id='root'>
            <div className='body-wrapper'>
                <div className='sticky-outer-wrapper'>
                    <div className='sticky-inner-wrapper'>
                        <nav 
                            pages={pages}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}>
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


