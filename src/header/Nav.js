import React, { Fragment } from "react";
import { menuItems } from "./MenuItems";
import "./Nav.css";
import { Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";

function NavCafe({ showScroll, history }) {
  const handleClick = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
  };

  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="/">Cake & Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center">
            {showScroll &&
              menuItems.map((menu, index) => (
                <Nav.Link
                  key={menu + index}
                  onClick={() => handleClick(menu.element)}
                >
                  {menu.title}
                </Nav.Link>
              ))}

            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* {showLogin && <Login show={showLogin} handleClose={closeLogin} />} */}
    </Fragment>
  );
}

export default NavCafe;
