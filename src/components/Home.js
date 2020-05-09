import React, { Component } from 'react';

import '../style/home_style.css';
import CatsCard from './CatsCard'

class Home extends Component {

  render() {
    return (
      <>
        <div className="background-home">
          <div className="container-home">
            <h1>Random Cat Stuff</h1>
            <CatsCard />
          </div>
        </div>
      </>
    )
  }
}

export default Home;