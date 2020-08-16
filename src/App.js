import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Header from './components/Header';
import SearchInput from './components/SearchInput'
import TableHead from "./components/TableHead"
import TableBody from "./components/TableBody"


class App extends Component {

  // 'state' string entered into the searchInput, mastercopy of users list return from api call, user list (copy to be filtered upon search), and sort boolean to change sort direction.
  state = {
    searchInput: "",
    users: [],
    sorted: 1
  };

  // on page load, makeRequest does an API call to get users list.
  componentDidMount = async () => {
    this.makeRequest()
  }

  // on event where client enters search string into searchInput, set state of searchInput to reflect this value.
  // make copy of masterusers to have first and last names be filtered through according to searchInput string - 
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // make request to randomUser api for 200 random users. Await result and set to state of masterusers and users(copy)
  makeRequest = async () => {
    const URL = `https://randomuser.me/api/?results=200&nat=us`;
    try {
      let data = await axios.get(URL);
      let apiUsers = data.data.results;
      this.setState({ users: apiUsers })
    } catch (e) {
      console.log("error:  ", e)
    }
  }
  // sort incoming list into either alphabetical ascending or descending
  sortFunction = () => {
    if (this.state.sorted === 1) {
      const orderedUser = this.state.users.sort((a, b) => { if (a.name.last < b.name.last) return -1 })
      this.setState({ users: orderedUser });
      this.setState({ sorted: -1 })
      return console.log(this.state.sorted)
    }
    else {
      const orderedUser = this.state.users.sort((a, b) => { if (a.name.last > b.name.last) return -1 })
      this.setState({ users: orderedUser })
      this.setState({ sorted: 1})
      return console.log(this.state.sorted)
    }
  }


  // map over users list it and rendering to the tableBody
  renderEmployees = () => {
    return this.state.users.filter(user => {
      return user.name.first.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) > -1
    }).map((user) => (
      <TableBody
        key={user.id.value}
        img={user.picture.medium}
        name={user.name}
        city={user.location.city}
        state={user.location.state}
        num={user.cell}
        email={user.email}
        age={user.dob.age}
        alt={user.name}
      />
    ));
  };

  render() {
    return (
      <>
        <Header />
        <div className="App container">
          <SearchInput
            search={this.state.searchInput}
            handleInputChange={this.handleInputChange}
          />
          <table className="table table-striped">
            <TableHead sortFunction={this.sortFunction} />
            {this.renderEmployees()}
          </table>
        </div>
      </>
    )
  }
}

export default App;