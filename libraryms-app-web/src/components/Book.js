import React, { Component } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", author: "", isbn: "", rating: "" };

    this.bookChange = this.bookChange.bind(this);
    this.submitBook = this.submitBook.bind(this);
  }

  submitBook = (event) => {
    alert(this.state.title);
    event.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn,
      rating: this.state.rating,
    };

    axios.post("http://localhost:8080/books", book).then((response) => {
      if (response.data != null) {
        this.setState({ show: true, method: "post" });
        setTimeout(() => this.setState({ show: false }), 3000);
      } else {
        this.setState({ show: false });
      }
    });

    this.setState(this.initialState);
  };
  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Add Book</Card.Header>
        <Form onSubmit={this.submitBook} id="bookFormId">
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="test"
                  name="title"
                  className={"bg-dark text-white"}
                  placeholder="Enter Book Title"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="test"
                  name="author"
                  className={"bg-dark text-white"}
                  placeholder="Enter Book Author"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Isbn</Form.Label>
                <Form.Control
                  type="test"
                  name="isbn"
                  className={"bg-dark text-white"}
                  placeholder="Enter Book ISBN"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="test"
                  name="rating"
                  className={"bg-dark text-white"}
                  placeholder="Enter Book Rating"
                />
              </Form.Group>
            </Form.Row>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
