import React, { Component } from "react";
import logo from "./library-books.jpg";

export default class Header extends Component {
  render() {
    return (
      <header className="row">
        <div className="col-md-5">
          <img
            src={logo}
            className="logo"
            alt="logo"
            height="100px"
            width="1600px"
          />
        </div>

        <div className="col-md-7 mt-5 subtitle">Library Management System</div>
      </header>
    );
  }
}
