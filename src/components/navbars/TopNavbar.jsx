import React from "react";
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
  DropdownItem,
} from "reactstrap";
import logo from "../../assets/scss/imgs/turkey-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";

const lngs = {
  tr: { nativeName: "Türkçe" },
  en: { nativeName: "English" },
};

const TopNavbar = () => {
  const { t, i18n } = useTranslation();
  const { user, token } = useSelector((state) => state.auth);
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="topnavbar">
      <Navbar>
        <Container>
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex">
              <div className="d-flex flex-column logoname">
                <img className="navbar--logo" src={logo} alt="logo" />
                Bi'Hatıra
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center  text-light">
                <NavItem>
                  <Link to="/" className="nav-link">
                    {t("top-navbar.homepage")}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/discover" className="nav-link text-warning">
                    {t("top-navbar.discover")}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/memories" className="nav-link">
                    {t("top-navbar.memories")}
                  </Link>
                </NavItem>
              </Nav>
            </div>
            <div className="d-flex">
              <Nav className="d-flex align-items-center ">
                {!token ? (
                  <>
                    <NavItem>
                      <Link
                        to="/users/signup"
                        className="nav-link text-warning"
                      >
                        {t("top-navbar.sign-up")}
                      </Link>
                    </NavItem>
                    <div>{t("top-navbar.or")}</div>
                    <NavItem>
                      <Link to="/users/signin" className="nav-link">
                        {t("top-navbar.sign-in")}
                      </Link>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <UncontrolledDropdown>
                      <DropdownMenu className="drop-down--menu">
                        <DropdownItem
                          onClick={() => navigate(`/bi/${user.username}`)}
                        >
                          Hesabım
                        </DropdownItem>
                        <DropdownItem
                          onClick={handleLogout}
                          className="text-danger"
                        >
                          Çıkış Yap
                        </DropdownItem>
                      </DropdownMenu>
                      <DropdownToggle className="select-language">
                        <i class="fa-solid fa-user"></i>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  </>
                )}
                <UncontrolledDropdown>
                  <DropdownMenu className="drop-down--menu">
                    {Object.keys(lngs).map((lng) => (
                      <DropdownItem
                        key={lng}
                        type="submit"
                        style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }}
                        onClick={() => {
                          i18n.changeLanguage(lng);
                        }}
                      >
                        {lngs[lng].nativeName}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                  <DropdownToggle className="select-language">
                    <i class="fa-solid fa-language language"></i>
                  </DropdownToggle>
                </UncontrolledDropdown>
              </Nav>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
export default React.memo(TopNavbar);
