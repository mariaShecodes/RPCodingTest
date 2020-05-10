import React, { Component } from 'react';

import '../style/home_style.css';
import CatsCard from './CatsCard'

class Home extends Component {
  state = {
    cards: [
      {id: 0},{id: 1},{id: 2},{id: 3},
    ],
    loadingCard: true 
  }

  reload = () => {
    this.setState({
      ...this.state,
      loadingCard: !this.state.loadingCard,
    });
  }

  render() {
    const { cards } = this.state;
    return (
      <>
        <div className='background-home'>
          <div className='container-home'>
            <h1>Random Cat Stuff</h1>
            <div className='container-cards'>
              {cards.map(elm => (
                <CatsCard index={elm.id} key={Math.random()}/>
              ))
            }
            </div>
            <div className='shuffle-button' onClick={this.reload}>
              <p>Shuffle</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home;