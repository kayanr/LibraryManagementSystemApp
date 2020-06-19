import React from "react";
import { Container, Row, Jumbotron, Col } from "react-bootstrap";

class BookList extends React.Component {
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

export default BookList;
