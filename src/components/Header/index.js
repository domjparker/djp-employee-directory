import React from 'react';
import './style.css';

function Header() {
    return(
        <header>
            <row className="mainTitle">
                <h1>Employee Directory</h1>
                <p>Click on the ' <i class="fas fa-sort"></i> ' to sort by last name or use the search box to narrow your results.</p>
            </row>
        </header>
    )
}

export default Header;