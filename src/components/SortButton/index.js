import React from 'react'
import './style.css'

function SortButton(props) {
    return (
        <button id="sortBtn" onClick={props.sortFunction} ><i class="fas fa-sort"></i></button>
    )
}

export default SortButton