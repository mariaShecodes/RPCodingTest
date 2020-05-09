import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import '../style/card_style.css';

class CatsCard extends Component {
  state = {
    picture_loading: true,
    picture_error: null,
    picture_data: undefined,
    fact_loading: true,
    fact_error: null,
    fact_data: {}
  }

  componentDidMount() {
    this.fetchPicture();
    this.fetchFact();
  }

  fetchPicture = async () => {
    try {
      this.setState({ picture_loading: true, picture_error: null });
      
      const data = await fetch('https://cataas.com/cat', {cache: 'no-cache'})
      console.log('SOy DATA', data.body);
      this.setState({ picture_loading: false, picture_data: data.body });
    } catch (error) {
      console.log(error)
      // this.setState({ picture_loading: false, picture_error: error });
    }
  }

  fetchFact = async () => {
    this.setState({ fact_loading: true, fact_error: null })
    
    try {
      const data = await fetch('https://cat-fact.herokuapp.com/facts/random');
      this.setState({ fact_loading: false, fact_data: data });
    } catch (error) {
      this.setState({ fact_loading: false, fact_error: error });
    }
  }

  render() {
    console.log('DATA IS', this.state.fact_data);
    const { picture_data } = this.state;
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img src={picture_data} className="photo" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default CatsCard;
