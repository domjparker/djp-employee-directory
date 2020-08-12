import React from 'react';
import './style.css';

function SearchInput(props) {
    return (
      <form className="search">
        <div className="form-group sm-2">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="searchInput"
            list="names"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
          />
          <datalist id="names"></datalist>
        </div>
      </form>
    );
  }

export default SearchInput;


{/* <input id="search" name="search" value={this.state.search} type="text" onChange={this.handleInputChange} /> */}