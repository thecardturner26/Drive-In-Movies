import React from 'react';
import Hero from '../components/Hero';
import Col from 'react-bootstrap/Col';
// import Thumbnail from 'react-bootstrap/Thumbnail';
import Image from 'react-bootstrap/Image';
// import Grid from 'react-bootstrap/Grid';
import Row from 'react-bootstrap/Row';



function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            {/* <Grid> */}
                <Row style={{alignContent: "center"}}>
                    <Col xs={6} md={3}>
                        
                        <Image src="https://i.imgur.com/zMeKFos.jpg" style={{width: '11em', height: "18em", borderRadius: '10%'}}/>
                    </Col>
                    <Col xs={6} md={3}>
                        
                        <Image src="https://i.imgur.com/2Pw7YNC.jpg" style={{width: '11em', height: "18em", borderRadius: '10%'}}/>
                    </Col>
                    <Col xs={6} md={3}>
                       
                        <Image src="https://i.imgur.com/RufgRwl.jpg" style={{width: '11em', height: "18em", borderRadius: '10%'}}/>
                    </Col>
                    <Col xs={6} md={3}>
                       
                        <Image src="https://i.imgur.com/XHNV73z.jpg" style={{width: '11em', height: "18em", borderRadius: '10%'}}/>
                    </Col>
                </Row>
            {/* </Grid>; */}
        </div>
    );

}

export default AboutPage;