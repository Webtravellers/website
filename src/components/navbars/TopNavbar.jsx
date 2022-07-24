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
import translate from "../../assets/imgs/translate-logo.png";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const lngs = {
  tr: { nativeName: "Türkçe" },
  en: { nativeName: "English" },
};

const TopNavbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="topnavbar">
      <Navbar>
        <Container>
          <div className="d-flex align-items-center justify-content-between">
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

            <Nav className="d-flex align-items-center justify-content-between">
              <NavItem>
                <Link to="/users/signup" className="nav-link text-warning">
                {t("top-navbar.sign-up")}
                </Link>
              </NavItem>
              <div>{t("top-navbar.or")}</div>
              <NavItem>
                <Link to="/users/signin" className="nav-link">
                {t("top-navbar.sign-in")}
                </Link>
              </NavItem>
              <UncontrolledDropdown>
                <DropdownMenu className="drop-down--menu">
                  {Object.keys(lngs).map((lng) => (
                    <DropdownItem
                      key={lng}
                      type="submit"
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
        </Container>
      </Navbar>
    </div>
  );
};
export default React.memo(TopNavbar);
