import React from 'react';
import { Container, Row, Col,Card, Input, Button, CardHeader } from 'reactstrap';
import {
     CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter
  } from 'reactstrap';
import axios from "axios";
import './SC.css'
const SingleContent = (props) => {
    console.log("astro",props)
    let price = props.astrouser.minimumCallDuration*props.astrouser.minimumCallDurationCharges;
    return (
        <React.Fragment>
             <Card className = "cardContainer3 text-center">
             
             <Col md="12">
                        <img className="cardimg3  " src="static\aaasdadasda.jfif" alt="Card image cap" />
            </Col>
            <Row>
                    <Col md="12">
                        <b>
                    {props.astrouser.firstName}
                    </b>
                    </Col>
                </Row>
            <CardBody>

            <CardText className ="cardSkills">{props.astrouser.skills.map((p,index)=>(
                <>
                {p},
                </>
            ))}</CardText>
            <CardText className ="cardSkills">{props.astrouser.languages.map((p,index)=>(
                <>
                {p},
                </>
            ))}</CardText>
            
                
                    <Row className="text-center">
                    
                        <Col md="12">
                        ₹{price}/min
                        </Col>
                        
                    </Row>
                    <button className="asddsa" >Talk on call</button>
            </CardBody>
            </Card>
        </React.Fragment >
    )
}

export default SingleContent;