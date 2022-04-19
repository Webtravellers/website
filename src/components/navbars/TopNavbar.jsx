import React from 'react'
import {
    Container,
    Nav,
    Navbar,
    NavItem,
    Row,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

import { IoLanguageOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Brand from '../brands/Brand'
const TopNavbar = () => {
    return (
        <div className='topnavbar'>
            <Navbar>
                <Container>
                    <div className='d-flex align-items-center justify-content-between'>
                        <NavbarBrand
                        >
                            <Brand className='mybrand'></Brand>
                        </NavbarBrand>
                        <Nav className="navbar-nav-hover align-items-lg-center  text-light">

                            <NavItem>
                                <Link to="#" className='nav-link'>
                                    Anasayfa
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="#" className='nav-link'>
                                    Öneriler
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="#" className='nav-link'>
                                    Blog
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="#" className='nav-link'>
                                    İletişim
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="#" className='nav-link'>
                                    Hakkımızda
                                </Link>
                            </NavItem>
                        </Nav>
                        <UncontrolledDropdown className='d-flex flex-row-reverse '>
                            <DropdownMenu className='drop-down--menu'>
                                <DropdownItem onClick={"to do lated"}>
                                    Turkish
                                </DropdownItem>
                                <DropdownItem onClick={"to do lated"}>
                                    Turkish
                                </DropdownItem>
                            </DropdownMenu>
                            <DropdownToggle className='select-language'>
                                Select language
                                <IoLanguageOutline className='display-4 text-dark p-1' />
                            </DropdownToggle>

                        </UncontrolledDropdown>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default React.memo(TopNavbar)