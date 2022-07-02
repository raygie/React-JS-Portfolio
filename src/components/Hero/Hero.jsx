import React, {useRef, useEffect} from 'react'
import './hero.css'

import {Container,Row,Col} from 'reactstrap'
import {init} from 'ityped'
import heroImg from '../../assets/images/formal2.png'
const Hero = () => {
    const textRef = useRef()
    useEffect(()=>{
        init(textRef.current, {
            backDelay: 2000,
            showCursor: true,
            strings:[
                'Web Developer',
                'UI/UX Designer'
            ]
        })
    }, [])
    
    return (
    <section className='hero_section' id='home'>
        <Container>
            <Row className='row gy-4'>
                <Col lg='6'>
                    <div className='hero_content'>
                        <h4>Welcome to My Personal Website</h4>
                        <h1>Hi, I'm <span>Raygie Ramos</span></h1>
                        <h2 className='hero_effect mb-4'>a <span ref={textRef}></span></h2>
                        <p className='hero_p2 mt-4'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        <div className="hero_btns d-flex align-items-center gap-4 mt-5">
                            <button className='bn works_btn'><a href='#project'>See My Works</a></button>
                            <button className='bn resume'>Get My Resume</button>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='hero_img'>
                        <img src={heroImg} alt="" className='w-100' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero