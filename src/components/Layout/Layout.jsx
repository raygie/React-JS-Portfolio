import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <Fragment>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </Fragment>
  )
}

export default Layout