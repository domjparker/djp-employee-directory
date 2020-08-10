import React, { Component } from 'react';
import axios from "axios";
import './App.css';
// import EmployeeCard from "./components/EmployeeCard"
import TableHead from "./components/TableHead"
import TableBody from "./components/TableBody"
import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import TableHead from './components/TableHead';
// import TableBody from './components/TableBody';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <SearchBar />
//     </div>
//   );
// }

// export default App;


class App extends Component {

  state = {
    search: "",
    users: []
  };


  componentDidMount() {
    this.makeRequest()
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  makeRequest = async () => {
    const URL = `https://randomuser.me/api/?results=100&nat=us`;
    let data;
    try {
      data = await axios.get(URL);
      let {
        data: { results },
      } = data;
      this.setState({ users: results })

    } catch (e) {
      console.log("error:  ", e)
    }



  }

  renderEmployees = () => {
    return this.state.users.map((user) => (
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
        <input id="numInput" name="numInput" value={this.state.numInput} type="number" min="0" onChange={this.handleInputChange} />
        <table className="table table-striped">
          <TableHead />
          {this.renderEmployees()}
        </table>
      </div>
      </>
    )
  }
}

export default App;