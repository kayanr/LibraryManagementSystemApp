import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import { Container, Row, Jumbotron, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const marginTop = { marginTop: "20px" };
  return (
    <Router>
      <Header />
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/add" exact component={Book} />
              <Route path="/edit/:id" exact component={Book} />
              <Route path="/list" exact component={BookList} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <p>Library Management System</p>

      <Footer />
    </Router>
  );
}

export default App;
