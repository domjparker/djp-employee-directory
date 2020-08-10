import React from 'react';
import './style.css';

function TableBody(props) {
    return (
        
            <tbody>
                <tr>
                    <img src={props.img} alt={props.alt}></img>
                    <td>{props.name.first} {props.name.last}</td>
                    <td>{props.city}</td>
                    <td>{props.state}</td>
                    <td>{props.num}</td>
                    <td>{props.email}</td>
                    <td>{props.age}</td>
                </tr>
            </tbody>
        
    )
}

export default TableBody;