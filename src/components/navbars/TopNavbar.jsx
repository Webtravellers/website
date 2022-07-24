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
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useAuth from '../../hooks/useAuth'

const TopNavbar = () => {
    const { user, token } = useSelector(state => state.auth)
    const { handleLogout } = useAuth()
    const navigate = useNavigate()
    return (
        <div className='topnavbar'>
            <Navbar>
                <Container>
                    <div className='d-flex align-items-center justify-content-between w-100'>
                        <div className='d-flex'>
                            <div className='d-flex flex-column logoname'>
                                <img className="navbar--logo" src={logo} alt="logo" />
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

                        <Nav className='d-flex align-items-center '>
                            {!token ? (
                                <>
                                    <NavItem>
                                        <Link to="/users/signup" className='nav-link text-warning'>
                                            Hesap Oluştur
                                        </Link>
                                    </NavItem>
                                    <div>
                                        Veya
                                    </div>
                                    <NavItem>
                                        <Link to="/users/signin" className='nav-link'>

                                            Giriş Yap
                                        </Link>
                                    </NavItem>
                                </>
                            ) : (
                                <>
                                    <UncontrolledDropdown >
                                        <DropdownMenu className='drop-down--menu'>
                                            <DropdownItem onClick={() => navigate(`/bi/${user.username}`)}>
                                                Hesabım
                                            </DropdownItem>
                                            <DropdownItem onClick={handleLogout} className="text-danger">
                                                Çıkış Yap
                                            </DropdownItem>
                                        </DropdownMenu>
                                        <DropdownToggle className='select-language'>
                                            <i class="fa-solid fa-user"></i>
                                        </DropdownToggle>
                                    </UncontrolledDropdown>
                                </>
                            )}
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
                                    <i class="fa-solid fa-language language"></i>
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