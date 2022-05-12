import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

export default function Navbar(props) {
    const { pages = [], setcurrentPage, currentPage } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <nav>
            <ul className='nav navbar-nav m-auto'>
                {pages.map((page) => (
                    <li
                        className={`mx-1 ${currentPage.name === page.name && 'navActive'
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


