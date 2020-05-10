import React, { useState, useEffect } from 'react';
import { Card, OverlayTrigger } from 'react-bootstrap';

import '../style/card_style.css';

const CatsCard = (props) => {

  const [ picture, setPicture ] = useState('')
  const [ fact, setFact ] = useState('')

  useEffect(() => {
    fetch(`https://cataas.com/cat?s=${props.index}`, { cache: 'reload' })
      .then(response => response)
      .then(data => setPicture(data))
  }, []);
  
  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts/random', { cache: 'no-cache' })
      .then(response => response.json())
      .then(data => setFact(data.text))
  }, []);

  return (
    <Card style={{ width: '20rem' }} className={`div${props.index}`}>
      {picture.url === undefined ? (
        <img src="./spinner.gif" alt="Loading" className='spinner'  />
      ) : (
        <Card.Img src={picture.url} alt='Random cat picture' className='photo'/>
      )}
      <Card.Body className='card-body'>
        <Card.Text className='text'>{fact}</Card.Text>
        { (fact !== '' && fact.length > 101) && (
          <>
            <OverlayTrigger
              delay={{ show: 100, hide: 100 }}
              placement='bottom'
              overlay={
                <div className='overlay-text'>
                  {fact}
                </div>
              }
            >
              <Card.Link href='#' className='button'>Read More</Card.Link>
            </OverlayTrigger>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default CatsCard;



