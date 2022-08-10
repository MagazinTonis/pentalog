import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '28rem' }}>
        <video style={{height:360,width:'100%'}} controls>
        <source src="ink_1.mov"></source>
        </video>
      <Card.Body className='text-center'>
        <Card.Title>Impins cu bara la 45*</Card.Title>
        <Card.Text>
        Majoritatea oamenilor fac acest exercitiu cu banca
        mult prea inclinata, astfel ei nu lucreazà in totalitate
        partea superioarà a pieptului ci mai mult umerii. Dacà
        chiar vrei sà faci zona de sus a pieptului sà iasã in
        evidentà, nu folosi o prizà prea largà, astfel vei reusi
        sà implici mai mult fibre din muschi.
        La impinsul din culcat pe o bancà poti lucra cu cea
        mai mare greutate. Acest exercitiu este de asemenea
        unul mai usor de controlat fatà de impinsul din culcat
        cu gantere grele. in plus este foarte usor de invâtat si
        poti creste repede pieptul in fortà si masà dacà
        folosesti o greutate destul de dificilà, insà este bine
        sà ai pe cineva în spate pentru a te ajuta la ultimele
        repetari.
        </Card.Text>
        <Button variant="primary">Play video</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;