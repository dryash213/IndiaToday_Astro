import React from 'react';
import { Container, Row, Col,Card, Input, Button, CardHeader } from 'reactstrap';
import axios from "axios";
const SingleContent = ({astrouser}) => {
    console.log("astro",astrouser)
    return (
        <React.Fragment>
             <Card>
                 <CardHeader>
                     <div>{astrouser.firstName} {astrouser.lastName}</div>
                 </CardHeader>
             </Card>
        </React.Fragment >
    )
}

export default SingleContent;