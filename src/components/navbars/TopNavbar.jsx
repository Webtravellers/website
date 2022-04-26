import React from 'react'
import { Container, Nav, Navbar, NavItem, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
const TopNavbar = () => {
    //ToDo: Tasarımı Değiştir
    return (
        <div className='topnavbar'>
            <Navbar>
                <Container>
                    <Row>
                        <Nav className="navbar-nav-hover align-items-lg-center text-light">
                            <NavItem>
                                <Link to="/dashboard" className='nav-link'>
                                    Admin Dashboard
                                </Link>
                            </NavItem>
                        </Nav>
                    </Row>
                </Container>
            </Navbar>
        </div>
    )
}

export default React.memo(TopNavbar)