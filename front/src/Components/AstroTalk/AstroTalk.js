import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from "axios";
import { Nav, NavItem, NavLink } from 'reactstrap';

import "./AstroTalk.css"

import {astro} from "../../Dummydata/Dummydata"
import SingleContent from "../SingleContent/SingleContent"
const AstroTalk = () => {
    // const count = useState(0);
    console.log(astro)
    const [SearchItem,setSearchItem]=useState("");
    const [count,setCount]=useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const astr=astro;
    
    const handlesubmit = () =>{
        if(count==1)
        {   
            astro.sort(function(a, b) {
                return a.minimumCallDurationCharges*a.minimumCallDuration - b.minimumCallDurationCharges*b.minimumCallDuration;
              });

        }
        else if(count==2)
        {
            astro.sort(function(a, b) {
                return b.minimumCallDurationCharges*b.minimumCallDuration - a.minimumCallDurationCharges*a.minimumCallDuration;
              });
        }
        else if(count==3)
        {
            astro.sort(function(a, b) {
                return a.experience - b.experience;
              });
        }
        else if(count==4)
        {
            astro.sort(function(a, b) {
                return b.experience - a.experience;
              });
        }
        
    } 
    handlesubmit();

    return (
        <React.Fragment>
             <Container>
                 <Button><NavLink href="/">Home</NavLink></Button>
                <Row className="topheadbar">
                    <Col md="12" className="text-center">
                        <div className="head"><b>Talk to Astro</b></div>
                    </Col>

                    <Col  md="8" className="topsearch">
                        <input  
                        type="text"
                        placeholder="Search for Astro."
                        className="searchbar"
                        onChange={(e)=>{
                            setSearchItem(e.target.value);
                        }}
                        >
                        </input>
                    </Col>
                    <Col md="4">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret className="sort-list">
                            Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                            
                            <DropdownItem   onClick={(e)=>{setCount(1)}}>Sort By Increasing Price</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem   onClick={(e)=>{setCount(2)}}>Sort By Decreasing Price</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem   onClick={(e)=>{setCount(3)}}>Sort By High To Low Experiance</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem   onClick={(e)=>{setCount(4)}}>Sort By Low to High Experiance</DropdownItem>
                            
                        </DropdownMenu>
                        </Dropdown>
                    </Col>

                </Row>
            </Container>
            <Container className="Astro-List ">
            <Row>
            {astro.filter((val)=>{
                if(SearchItem=="")
                return val;
                else if(val.firstName.toLowerCase().includes(SearchItem.toLowerCase()))
                return val;
            }).map((p,index)=>(
                <>
                <SingleContent key={index} idx={p.id} astrouser={p}/>
                </>
            ))} 
           </Row>
            </Container>

        </React.Fragment >
    )
}

export default AstroTalk;