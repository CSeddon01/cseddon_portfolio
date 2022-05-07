import React from 'react';

export default function Navbar() {
    return (
        <>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
            </button>
            <div className='collapse navbar-collapse offset' id='navbarSupportedContent'>
                <ul className='nav navbar-nav m-auto'>
                    <li className='nav-item'>
                        <a className='nav-link active' href='/'>Home<span className='sr-only'></span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='./About'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='./Portfolio'>Portfolio</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='./Resume'>Resume</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='./Contact'>Contact</a>
                    </li>
                    {/* <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                        Dropdown link
                    </a>
                    <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                        <a className='dropdown-item' href='/'>Home</a>
                        <a className='dropdown-item' href='./About'>About</a>
                        <a className='dropdown-item' href='./Portfolio'>Something else here</a>
                    </div>
                </li> */}
                </ul>
            </div>
        </>
    );
}


