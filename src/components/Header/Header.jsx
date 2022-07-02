import React,{useRef} from 'react'
import { Container } from 'reactstrap'
import './header.css'

const navLinks = [
    {
        display: 'Home',
        url: '#home'
    },
    {
        display: 'About Me',
        url: '#about'
    },
    {
        display: 'Projects',
        url: '#project'
    },
    {
        display: 'Contact',
        url: '#contact'
    },
]
const Header = () => {
    const menuRef = useRef(null)
    const menuToggle = ()=> menuRef.current.classList.toggle('menu_active')
  return (
    <header className='header'>
        <Container>
            <div className='navigation d-flex align-items-center justify-content-between'>
                <div className='logo'><h5>Portfolio</h5></div>
                
                <div className='nav_menu' ref={menuRef} onClick={menuToggle}>
                    <ul className='nav_list'>
                    <span className='mobile_menu_x'><i class="ri-close-fill"></i></span>
                        {
                            navLinks.map((item,index)=> <li className='nav_item' key={index}>
                                <a href={item.url}>{item.display}</a>
                            </li>)
                        }
                    </ul>
                </div>
                <div className='nav_right d-flex align-items-center gap-4'>
                    <a className='btn' target="_blank" href='https://www.facebook.com/paparaygie18/'><i class="ri-facebook-circle-fill"></i></a>
                    <a className='btn' target="_blank" href='https://github.com/raygie'><i class="ri-github-fill"></i></a>
                    <a className='btn' target="_blank" href='https://www.linkedin.com/in/raygie-ramos/'><i class="ri-linkedin-box-fill"></i></a>
                    <span className='mobile_menu'><i class="ri-menu-3-line" onClick={menuToggle}></i></span>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header