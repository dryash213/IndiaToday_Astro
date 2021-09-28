import React from 'react';
import { Container, Row, Col,Card, Input, Button, CardHeader } from 'reactstrap';
import Select from 'react-select'
import axios from "axios";
import NavComp from "../Navbar/Navbar";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Example from '../Cards/Card';
import Example1 from '../Cards/Card1';
import {astro,aboutcard} from "../../Dummydata/Dummydata"
import {astroimg} from "../../Dummydata/Dummydata"
import "./Home.css";
import { Nav, NavItem, NavLink } from 'reactstrap';


const Home = () => {
    console.log("image",astroimg)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
       let options=[
           {
               value:'Love',label:'Love'
           },
           {value:'Buisness',label:'Buisness'},
           {value:'Education',label:'Education'},
           {value:'Work',label:'Work'},
           {value:'Self',label:'Self'},
           {value:'Life',label:'Life'},
           {value:'Money',label:'Money'}
       ]
       

    return (
        <React.Fragment>
             <Container>
                 <NavComp/>
             </Container>
             {/* <Container>
            <Row className="container2">
            <Col md="10" >
            Daily Horroscop
            </Col>
            <Col md="2" >
                <Button>See all</Button>
            </Col>
            <Col md="12" className="container2">
            <Carousel responsive={responsive}>
             {astro.map((p,index)=>(
                <Example key={index} idx={p.id} astrouser={p}/>
            ))} 
            </Carousel>
            </Col>
            </Row>
             </Container>
             <br/> */}
             <Container>
             <Row>
             <Carousel responsive={responsive}>
             {astro.map((p,index)=>(
                <Example key={index} idx={p.id} astrouser={p}/>
            ))} 
            </Carousel>
            </Row>
            </Container>
            <Container>
                <Row className="container2">
                <Col md="10" >
                Reports
                </Col>
                <Col md="2" >
                    <Button><NavLink href="/astrotalk">See all</NavLink></Button>
                </Col>
                <Col md="12">
                The study of the movements and relative positions of celestial bodies interpreted as having an influence on human affairs and the natural world.
                </Col>
                </Row>
                <Row >
                <Carousel responsive={responsive}>
                {astroimg.map((p,index)=>(
                    <>
                        <Row>
                        <Col  md="12">
                         <img className="reportimg" src={p.backgroundimage}/>
                         <div className="bottom">
                         <div className="bottom-left">₹{p.price}</div>
                         <div className="bottom-right"><button>Buy now</button></div>
                        </div>
                        </Col>
                            
                        </Row>
                         
                     </>
                ))} 
                </Carousel>
                </Row>
            </Container>
            
           
             <Container className="askcontainer">
                 <Row >
                     <Col md="12">
                     <b>Ask a Question:</b>
                     </Col>
                     <Col md="12">
                     Seek accurate answers to your life problems and guide you
                        towards the right path Whether the problem is related to
                        love, self, life, business, money, education or work, our
                        astrologers will do an in depth study of your birth chart
                        provide personalized responses along with remedies.
                     </Col>
                </Row>
                <br>
                </br>
                <br>
                </br>
                 <Row className="askbar">
                    <Col md="12" className="askhead">
                        <b>Choose Category:</b>
                    </Col>
                    <Col md="12" className="askoption">
                        <Select options={options} />
                    </Col>
                 
                 
                 <Row className="askfooter">
                    <Col md="6">
                        <b>₹99</b>(Including GST)
                    </Col>
                    <Col md="3">
                        <b>Ideas What To Ask</b>
                    </Col>
                    <Col md="3">
                    <Button>Ask a Question</Button>
                    </Col>
                 
                 </Row>
                 </Row>
             </Container> 
             <Container>
            
            <Row className="container2">
            
            <Col md="12" className="container2">
            <Carousel responsive={responsive}>
             {astro.map((p,index)=>(
                <Example key={index} idx={p.id} astrouser={p}/>
            ))} 
            </Carousel>
            </Col>
            </Row>
             </Container>
             <Container>
            <Row className="container2">
            <Col md="12" >
            <b>Hear from our Happy Customers!</b>
            </Col>
            <Col md="12" className="container2">
            <Carousel responsive={responsive}>
             {aboutcard.map((p,index)=>(
                <Example1 key={index} cardobj={p}/>
            ))} 
            </Carousel>
            </Col>
            </Row>
             </Container>
        </React.Fragment >
    )
}

export default Home;