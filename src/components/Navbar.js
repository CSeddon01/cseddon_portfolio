import React from 'react';

export default function Navbar(props) {
    const { pages = [], setCurrentPage, currentPage } = props;

    return (
        <nav>
                <ul className='nav navbar-nav m-auto'>
                    {pages.map((page) => (
                  <li
                  className={`mx-1 ${
                    currentPage.name === pages.name && "navActive"
                  }`}
                  key={pages.name}
                >
                  <span
                    onClick={() => {
                      setCurrentPage(page);
                    }}
                  >
                  </span>
                </li>   
                ))}
                </ul>
        </nav>
    );
}


