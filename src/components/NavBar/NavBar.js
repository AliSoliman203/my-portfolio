import { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import './style-NavBar.css'
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import { BrowserRouter as Router } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect( () => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? 'scrolled' : ''} >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt='Logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')} >Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')} >Skills</Nav.Link>
                            <Nav.Link href="#projects"  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')} >Projects</Nav.Link>
                        </Nav>
                        <span className="nav-span">
                            <div className="icons">
                                <a href="http://linkedin.com/in/ali-soliman-ba41a9261" target='_blank'><img src={navIcon1} alt='' /></a>
                                <a href="#"><img src={navIcon2} alt='' /></a>
                                <a href="#"><img src={navIcon3} alt='' /></a>
                            </div>
                            <HashLink to='#connect'>
                                <button><span>Let's Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}