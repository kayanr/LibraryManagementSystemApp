import React from "react";
import { Container, Row, Jumbotron, Col, Navbar } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Navbar fixed="botton" bg="primary" variant="dark">
        <Container>
          <Col lg={12} className="text-center text-muted">
            <div>Capstone Project June 2020</div>
          </Col>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
