import React from 'react';
import { Container, Row, Col,Card, Input, Button, CardHeader } from 'reactstrap';
import Select from 'react-select'
import axios from "axios";

import {Questions} from "../../Dummydata/Dummydata"
import "./Home.css";
const Home = () => {
    const queries=Questions[0].data
    
    function myfunc()
    {
        
    }
   
    const handleChange=()=>{

    }
    return (
        <React.Fragment>
             <Container>
                 <Row className="query-box">
                    <b>Choose Category:</b>
                    <Select
                    placeholder="Search a category: Love,Carrer,etc"
                    onChange={handleChange}
                    options={options} 
                    
                    />
                 </Row>
             </Container>
        </React.Fragment >
    )
}

export default Home;