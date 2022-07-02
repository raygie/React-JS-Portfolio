import React from 'react'
import './contact.css'
import {Container,Row,Col} from 'reactstrap'

function Contact() {
  return (
    <section className='Contact' id='contact'>
        <div className='heading text-center mb-5'>
            <h4>Get in Touch</h4>
            <h1>Contact Me</h1>
          </div>
        <Container>
            <Row className='row gy-4'>
                <Col lg='6' md='6'>
                    <Row className='row gy-4'>
                        <Col lg='12'>
                            <div className='box'>
                                <div className='category d_flex'>
                                    <i class="ri-mail-line"></i>
                                </div>
                                <div className='title'>
                                    <h2>Email</h2>
                                    <div className='proj_buttons'>
                                        <a className='link' href="mailto: raygieramos18@gmail.com" target="_blank">raygieramos18@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='12'>
                            <div className='box'>
                                <div className='category d_flex'>
                                    <i class="ri-phone-line"></i>
                                </div>
                                <div className='title'>
                                    <h2>Call</h2>
                                    <div className='proj_buttons'>
                                        <a className='link' href="tel: +63-949-710-8341">09497108341</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='12'>
                            <div className='box'>
                                <div className='category d_flex'>
                                    <i class="ri-messenger-line"></i>
                                </div>
                                <div className='title'>
                                    <h2>Messenger</h2>
                                    <div className='proj_buttons'>
                                        <a className='link' href="http://m.me/paparaygie18" target="_blank">Send a message</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg='6' md='6'>
                    <form action="">
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
            </Row>
        </Container>
    </section>
  )
}

export default Contact