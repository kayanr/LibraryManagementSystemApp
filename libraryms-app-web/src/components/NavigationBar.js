import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
            width="25"
            height="25"
            alt="brand"
          />
          Books
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Add Books</Nav.Link>
          <Nav.Link href="#">Book Listing</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
