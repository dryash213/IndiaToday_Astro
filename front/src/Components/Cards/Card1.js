import React, { useState } from 'react';
import {
  Card, CardImg, CardText,Row,Col, CardBody,
  CardTitle, CardSubtitle,Button, CardFooter
} from 'reactstrap';
import './Card.css'


const Example1 = (props) => {
    console.log(props)
  return (
    <>
    <Card className = "cardContainer">
      <div><img className="cardimg2" src="static\download.png" alt="Card image cap" /></div>
      <CardBody>
        <CardText>
          <Row>
            <Col md="12">
            {props.cardobj.cardtext}
            </Col>
          </Row>
        </CardText>
        
            <Row className="text-center">
                <Col md="12">
                <img className="cardimg3" src="static\download.png" alt="Card image cap" />
                </Col>
                <Col md="12">
                {props.cardobj.name}
                </Col>
                <Col md="12" className="fw-300">
                {props.cardobj.place},India
                </Col>
                </Row>
      </CardBody>
    </Card>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </>
  
  );
}

export default Example1;