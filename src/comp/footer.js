import React from 'react'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Toni's movement</Card.Title>
          <Card.Text>
          Sunt aici pentru a te ajuta sa iti depasesti limitele
          si sa facem impreuna transformarea mult dorita!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Links</Card.Title>
          <a href="#">Home</a><br></br>
          <a href="#">Exercitii</a>
        </Card.Body>
      </Card>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Legal Stuff</Card.Title>
          <a href="#">Termeni de utilizare</a><br></br>
          <a href="#">Politica privata</a>
        </Card.Body>
      </Card>
    </CardGroup>
    
  );
}

export default GroupExample;