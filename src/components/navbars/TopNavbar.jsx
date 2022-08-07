import React, { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import logo from "../../assets/scss/imgs/turkey-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
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
                  <NavLink to="/" className="nav-link">
                    {t("top-navbar.homepage")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/discover" className="nav-link">
                    {t("top-navbar.discover")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/memories" className="nav-link">
                    {t("top-navbar.memories")}
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className="d-flex">
              <Nav className="d-flex align-items-center ">
                {!token ? (
                  <>
                    <NavItem>
                      <NavLink
                        to="/users/signup"
                        className="nav-link "
                      >
                        {t("top-navbar.sign-up")}
                      </NavLink>
                    </NavItem>
                    <div>{t("top-navbar.or")}</div>
                    <NavItem>
                      <NavLink to="/users/signin" className="nav-link">
                        {t("top-navbar.sign-in")}
                      </NavLink>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <UncontrolledDropdown>
                      <DropdownMenu className="drop-down--menu">
                        <DropdownItem
                          onClick={() => navigate(`/bi/${user._id}`)}
                        >
                          {t("top-navbar.my-account")}
                        </DropdownItem>
                        <DropdownItem
                          onClick={handleLogout}
                          className="text-danger"
                        >
                          {t("top-navbar.sign-out")}
                        </DropdownItem>
                      </DropdownMenu>
                      <DropdownToggle className="select-language">
                        <div className="d-flex flex-row">
                          <div>{`${user?.name} ${user?.lastname}`}</div>
                          <i className="fa-solid fa-user icon-topnavbar"></i>
                        </div>
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
                    <i className="fa-solid fa-language language"></i>
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
