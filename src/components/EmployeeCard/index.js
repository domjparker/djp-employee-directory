import React from 'react';


function EmployeeCard(props) {
    return (
      <div className="row mt-3">
          <img className="col-2" src={props.img} alt={props.alt}/>
    <p className="col-3">{props.name.first} {props.name.last}</p>
    <p className="col-2">{props.num}</p>
    <p className="col-5">{props.email}</p>
      </div>
    );
  }

export default EmployeeCard;