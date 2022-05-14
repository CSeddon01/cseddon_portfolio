import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

// navigation bar side of Navbar.  This displays the page name in the tab too. 
export default function Navbar(props) {
    const { pages = [], setcurrentPage, currentPage } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <nav>
            <ul className='nav mx-auto px-2'>
                {pages.map((page) => (
                    <li
                        className={`mx-4 ${currentPage.name === page.name && 'navActive'
                            }`}
                        key={page.name}
                    >
                        <span
                            onClick={() => {
                                setcurrentPage(page);
                            }}
                        >
                            {page.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}


