import React from 'react'
import { Container, Nav, Navbar, NavItem, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/scss/imgs/turkey-logo.png"
import icon from "../../assets/scss/imgs/translate-icon.png"
const TopNavbar = () => {
    //ToDo: Tasarımı Değiştir
    return (
        <div className='topnavbar'>
            <Navbar>
                <Container>
                    <Row>
                        <Nav className="navbar-nav-hover align-items-lg-center text-light">
                            <NavItem className="topnav--logoname">
                                <img className="navbar--logo" src={logo} alt="logo"/>
                                Bi'Hatira
                            </NavItem>
                            <NavItem>
                                <Link to="/" className='nav-link'>
                                    Ana sayfa
                                </Link>
                            </NavItem>
                            <NavItem className="topnav--discovery">
                                <Link to="/discovery" className='nav-link text-warning'>
                                    Keşfet
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/memories" className='nav-link'>
                                    Hatıralar
                                </Link>
                            </NavItem>

                            <NavItem className="navbar--rightside">
                                <Link to="/signup" className='nav-link text-warning'>
                                    Hesap Oluştur
                                </Link>
                            </NavItem>
                            <NavItem>
                                Veya
                            </NavItem>
                            <NavItem>
                                <Link to="/signin" className='nav-link'>
                                    Giriş Yap
                                </Link>
                            </NavItem>
                            <NavItem className='nav-link'>
                                <img src={icon} alt='translate-icon' />
                            </NavItem>
                        </Nav>
                    </Row>
                </Container>
            </Navbar>
        </div>
    )
}

export default React.memo(TopNavbar)
