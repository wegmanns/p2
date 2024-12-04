import React from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import BreakFast from './components/BreakFast/BreakFast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';

class App extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
    .then((response) => {
      this.setState({
        data: response.data
      })
    })
    .catch((error) =>{
      console.error(`Error fetching data: ${error}`);
    })
  }
  render(){
  return (
    
  <div className='App'>
    <header className='App-header'>
      <h1>Menu Options</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/BreakFast">BreakFast</Link></li>
        <li><Link to="/Lunch">Lunch</Link></li>
        <li><Link to="/Dinner">Dinner</Link></li>
      </ul>
    </header>
    <main>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path= "/BreakFast" element= {<BreakFast />} />
        <Route path= "/Lunch" element= {<Lunch />} />
        <Route path= "/Dinner" element= {<Dinner />} />
      </Routes>
    </main>
  </div>
 )
}
  
  }
  export default App;
