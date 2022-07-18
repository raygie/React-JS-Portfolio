import React, { Fragment } from 'react'
import './Portfolio.css'
import image1 from '../../assets/images/petssentials.png'
import image2 from '../../assets/images/labonita.png'
import image3 from '../../assets/images/portfolio.png'
import { Container, Row, Col } from 'reactstrap'
const Portfolio = () => {
  return (
      <section className='Portfolio' id='project'>
          <div className='heading text-center mb-5'>
          <h1>My Portfolio</h1>
            <h5>Visit My Projects and See the Codes</h5>
          </div>
          <Container className='container'>
        <Row className='row gy-4'>
            <Col lg='4' md='4'>
            <div className='box btn_shadow '>
              <div className='img'>
                  <img src={image1} alt='' />
              </div>
              <div className='category d_flex mb-2'>
                  <span>Web Development</span>
              </div>
              <div className='title'>
                  <h2>PHP Appointment Website</h2>
                  <div className='proj_buttons'>
                    <a href="https://github.com/raygie/Capstone" target="_blank"><button className='bn details_btn'> See Details</button></a>
                  </div>
              </div>
            </div>
            </Col>
            <Col lg='4' md='4'>
            <div className='box btn_shadow '>
              <div className='img'>
                  <img src={image2} alt='' />
              </div>
              <div className='category d_flex mb-2'>
                  <span>Web Development</span>
              </div>
              <div className='title'>
                  <h2>PHP Promotional Website</h2>
                  <div className='proj_buttons'>
                    <a href="https://github.com/raygie/La-Bonita-PHP" target="_blank"><button className='bn details_btn'> See Details</button></a>
                  </div>
              </div>
            </div>
            </Col>
            <Col lg='4' md='4'>
            <div className='box btn_shadow '>
              <div className='img'>
                  <img src={image3} alt='' />
              </div>
              <div className='category d_flex mb-2'>
                  <span>Web Development</span>
              </div>
              <div className='title'>
                  <h2>React Js Portfolio Landing Page</h2>
                  <div className='proj_buttons'>
                    <a href="https://github.com/raygie/React-JS-Portfolio" target="_blank"><button className='bn details_btn'> See Details</button></a>
                  </div>
              </div>
            </div>
            </Col>
        </Row>
    </Container>
      </section>
    
       
  )
}

export default Portfolio