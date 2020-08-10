import React from 'react';
import './style.css';

function Header() {
    return(
        <header>
            <row className="mainTitle">
                <h1>Employee Directory</h1>
                <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
            </row>
        </header>
    )
}

export default Header;