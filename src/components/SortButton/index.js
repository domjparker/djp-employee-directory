import React from 'react'
import './style.css'

function SortButton(props) {
    return (
        <button id="sortBtn" onClick={props.sortFunction} >Sort</button>
    )
}

export default SortButton