import './App.css';
import Navbar from './Components/Navbar'

import React, { Component } from 'react'
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5} country="in" category="sports" />
      </div>
    )
  }
}


