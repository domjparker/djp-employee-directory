import React from 'react';
import './App.css';
import Header from './components/Header/index';
import SearchBar from './components/SearchBar/index';
// import EmployeeResults from './components/EmployeeResults/index';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
