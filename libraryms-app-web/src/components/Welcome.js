import React, { Component } from "react";
import { Container, Row, Jumbotron, Col } from "react-bootstrap";

export default class Welcome extends Component {
  render() {
    return (
      <Jumbotron className="bg-dark text-white">
        <h1>Welcome to the Library Management System</h1>
        <blockquote className="blockquote mb-O">
          <p>“Reading can take you places you have never been before.”</p>
          <footer className="blockquote-footer"> Dr. Seuss</footer>
        </blockquote>
      </Jumbotron>
    );
  }
}
