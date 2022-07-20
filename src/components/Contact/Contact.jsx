import React from 'react'
import './contact.css'
import {Container,Row,Col, CardGroup} from 'reactstrap'
import {Card} from 'reactstrap'
import {CardBody} from 'reactstrap'

function Contact() {
  return (
    <section className='Contact' id='contact'>
        <div className='heading text-center mb-5'>
            <h1>Contact Me</h1>
            <h5>Any question or remarks? Just write me a message!</h5>
          </div>
        <Container>
            {/* <Row className='row gy-4'>
                        <Col lg='4'>
                            <a className='link' href="mailto: raygieramos18@gmail.com" target='_blank'>
                            <div className='box'>
                                <div className='category d_flex'>
                                    <i class="ri-mail-line"></i>
                                </div>
                                <div className='title'>
                                    <h2>Email</h2>
                                    <div className='proj_buttons'>
                                        <a className='link'>raygieramos18@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            </a>
                        </Col>
                        <Col lg='4'>
                            <a className='link' href="tel: +63-949-710-8341">
                                <div className='box'>
                                    <div className='category d_flex'>
                                        <i class="ri-phone-line"></i>
                                    </div>
                                    <div className='title'>
                                        <h2>Call</h2>
                                        <div className='proj_buttons'>
                                            <a className='link'>09497108341</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col lg='4'>
                            <a className='link' href='http://m.me/paparaygie18' target='_blank'>
                                <div className='box'>
                                    <div className='category d_flex'>
                                        <i class="ri-messenger-line"></i>
                                    </div>
                                    <div className='title'>
                                        <h2>Messenger</h2>
                                        <div className='proj_buttons'>
                                            <a className='link'>Send a message</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
            </Row> */}
            <Row className='row gy-4'>
                <Col lg='12'>
                    <CardGroup>
                        <Card className='card1'>
                            <CardBody className='cardbody1'>
                                <Row className='row'>
                                    <Col lg='12' md='12'>
                                        <Row className='row gy-4 mt-4'>
                                                    <Col lg='12'>
                                                        <a className='link' href="mailto: raygieramos18@gmail.com" target='_blank'>
                                                        <div className='box'>
                                                            <div className='category d_flex'>
                                                                <i class="ri-mail-line"></i>
                                                            </div>
                                                            <div className='title'>
                                                                <h2>Email</h2>
                                                                <div className='proj_buttons'>
                                                                    <a className='link'>raygieramos18@gmail.com</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </a>
                                                    </Col>
                                                    <Col lg='12'>
                                                        <a className='link' href="tel: +63-949-710-8341">
                                                            <div className='box'>
                                                                <div className='category d_flex'>
                                                                    <i class="ri-phone-line"></i>
                                                                </div>
                                                                <div className='title'>
                                                                    <h2>Call</h2>
                                                                    <div className='proj_buttons'>
                                                                        <a className='link'>09497108341</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col lg='12'>
                                                        <a className='link' href='http://m.me/paparaygie18' target='_blank'>
                                                            <div className='box'>
                                                                <div className='category d_flex'>
                                                                    <i class="ri-messenger-line"></i>
                                                                </div>
                                                                <div className='title'>
                                                                    <h2>Messenger</h2>
                                                                    <div className='proj_buttons'>
                                                                        <a className='link'>Send a message</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className='card2'>
                            <CardBody>
                                <Col lg='12' md='12'>
                                    <form action="" className='form mt-5 mb-5'>
                                        <Row className='row gy-4'>
                                            <Col lg='12'>
                                                <input className='form-control' type='text' name='' placeholder='Your Name' required></input>
                                            </Col>
                                            <Col lg='12'>
                                                <input className='form-control' type='text' name='' placeholder='Your Email' required></input>
                                            </Col>
                                            <Col lg='12'>
                                                <input className='form-control' type='text' name='' placeholder='Your Subject' required></input>
                                            </Col>
                                            <Col lg='12'>
                                                <textarea className='form-control' name="" id=""  rows="10" placeholder='Message' required></textarea>
                                                <button className='submit'>Send Message</button>
                                            </Col>
                                        </Row>
                                    </form>
                                </Col>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact