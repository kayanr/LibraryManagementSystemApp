import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import { Container, Row, Jumbotron, Col } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  const marginTop = { marginTop: "20px" };
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}></Col>
          <Welcome />
        </Row>
      </Container>
      <p>Library Management System</p>
    </div>
  );
}

export default App;
