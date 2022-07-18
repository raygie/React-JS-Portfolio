import React from 'react'
import './about.css'
import aboutImg from '../../assets/images/IMG_1510.JPG'
import { Container, Row, Col } from 'reactstrap'

function About() {
  return (
    <section className='About' id='about'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='about_img'>
                        <img src={aboutImg} alt=""  />
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className='heading mb-5'>
                        <h5>Get to Know</h5>
                        <h1>About Me</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About