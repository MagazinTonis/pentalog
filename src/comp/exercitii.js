import React from 'react'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <>
    <CardGroup>
      <Card>
        <a href='piept.ex.js'><Card.Img variant="top" src="img/umeri.png" /></a>
      </Card>
      <Card>
        <Card.Img variant="top" src="img/spate.png" />
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
      </Card>
    </CardGroup>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="img/picioare.png" />
      </Card>
      <Card>
        <Card.Img variant="top" src="img/piept 1.png" />
      </Card>
    </CardGroup>
    </>
  );
}

export default GroupExample;