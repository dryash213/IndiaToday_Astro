import React, { useState } from 'react';
import {
  Card, CardImg, CardText,Row,Col, CardBody,
  CardTitle, CardSubtitle,Button
} from 'reactstrap';
import './Card.css'


const Example = (props) => {
    console.log(props)
    let price = props.astrouser.minimumCallDuration*props.astrouser.minimumCallDurationCharges;
  return (
    <>
    <Card className = "cardContainer">
      <CardImg top width="100%" src="static\asas.jfif" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{props.astrouser.firstName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{props.astrouser.aboutMe}</CardSubtitle>
        <CardText className ="cardSkills">{props.astrouser.skills.map((p,index)=>(
                <>
                <div>{p}</div>
                </>
            ))}</CardText>
        <CardText>
          <Row>
            <Col md="3">
            <b>
              ₹{price}
            </b>
            /min
            </Col>
            <Col>
              <Button className="cardButton" color="warning">Talk Now</Button>
            </Col>
          </Row>
          </CardText>
        
      </CardBody>
    </Card>
  </>
  );
}

export default Example;