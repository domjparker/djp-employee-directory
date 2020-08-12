import React from 'react';
import './style.css';
import SortButton from '../SortButton'

function TableHead(props) {
    return (
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name<SortButton sortFunction = {props.sortFunction}/></th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
    )
}

export default TableHead;