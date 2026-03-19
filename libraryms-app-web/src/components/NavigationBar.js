import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Link to={""} className="navbar-brand">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
            width="25"
            height="25"
            alt="brand"
          />
        </Link>
        <Nav className="mr-auto">
          <Link to={"add"} className="nav-link">
            Add Book
          </Link>
          <Link to={"list"} className="nav-link">
            Book Listing
          </Link>
          <Link to={"loan/add"} className="nav-link">
            Add Loan
          </Link>
          <Link to={"loan/list"} className="nav-link">
            Loan Listing
          </Link>
          <Link to={"member/add"} className="nav-link">
            Add Member
          </Link>
          <Link to={"member/list"} className="nav-link">
            Member Listing
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
