// import React from 'react'
// import { Container, Nav, Navbar, NavItem, Row } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import logo from "../../assets/scss/imgs/turkey-logo.png"
// import icon from "../../assets/scss/imgs/translate-icon.png"
// const TopNavbar = () => {
//     //ToDo: Tasarımı Değiştir
//     return (
//         <div className='topnavbar'>
//             <Navbar>
//                 <Container>
//                     <Row>
//                         <Nav className="navbar-nav-hover align-items-lg-center text-light">
//                             <NavItem className="logoname">
//                                 <img className="navbar--logo" src={logo} alt="logo"/>
//                                 Bi'Hatira
//                             </NavItem>
//                             <NavItem>
//                                 <Link to="/" className='nav-link'>
//                                     Ana sayfa
//                                 </Link>
//                             </NavItem>
//                             <NavItem>
//                                 <Link to="/discover" className='nav-link text-warning'>
//                                     Keşfet
//                                 </Link>
//                             </NavItem>
//                             <NavItem>
//                                 <Link to="/memories" className='nav-link'>
//                                     Hatıralar
//                                 </Link>
//                             </NavItem>

//                             <NavItem className="navbar--rightside">
//                                 <Link to="/signup" className='nav-link text-warning'>
//                                     Hesap Oluştur
//                                 </Link>
//                             </NavItem>
//                             <NavItem>
//                                 Veya
//                             </NavItem>
//                             <NavItem>
//                                 <Link to="/signin" className='nav-link'>
//                                     Giriş Yap
//                                 </Link>
//                             </NavItem>
//                             <NavItem className='nav-link'>
//                                 <img src={icon} alt='translate-icon' />
//                             </NavItem>
//                         </Nav>
//                     </Row>
//                 </Container>
//             </Navbar>
//         </div>
//     )
// }

// export default React.memo(TopNavbar)


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
import logo from "../../assets/scss/imgs/turkey-logo.png"
import translate from "../../assets/imgs/translate-logo.png"
import { IoLanguageOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
    return (
        <div className='topnavbar'>
            <Navbar>
                <Container>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex'>
                            <div className='d-flex flex-column logoname'>
                                <img className="navbar--logo" src={logo} alt="logo"/>
                                Bi'Hatıra
                            </div>
                            <Nav className="navbar-nav-hover align-items-lg-center  text-light">

                                <NavItem>
                                    <Link to="/" className='nav-link'>
                                        Anasayfa
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/discover" className='nav-link text-warning'>
                                        Keşfet
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/memories" className='nav-link'>
                                        Hatıralar
                                    </Link>
                                </NavItem>
                                
                            </Nav>
                        </div>

                        <Nav className='d-flex align-items-center justify-content-between'>
                            <NavItem>
                                <Link to="/sign-up" className='nav-link text-warning'>
                                    Hesap Oluştur
                                </Link>
                            </NavItem>
                            <div>
                                Veya
                            </div>
                            <NavItem>
                                <Link to="/sign-in" className='nav-link'>
                                    Giriş Yap
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown >
                                <DropdownMenu className='drop-down--menu'>
                                    <DropdownItem onClick={"to do lated"}>
                                        Türkçe
                                    </DropdownItem>
                                    <DropdownItem onClick={"to do lated"}>
                                        English
                                    </DropdownItem>
                                </DropdownMenu>
                                <DropdownToggle className='select-language'>
                                    <img src={translate} alt="translate-logo" />
                                </DropdownToggle>

                            </UncontrolledDropdown>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}
export default React.memo(TopNavbar)