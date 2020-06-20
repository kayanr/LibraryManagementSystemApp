import React, { Component } from "react";
import { Card, Table, ButtonGroup, Button } from "react-bootstrap";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) => this.setState({ books: data }));
  }

  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Book List</Card.Header>
        <Card.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN Number</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.length === 0 ? (
                <tr align="center">
                  <td colSpan="6">{this.state.books.length}</td>
                </tr>
              ) : (
                this.state.books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title} </td>
                    <td>{book.author} </td>
                    <td>{book.isbn} </td>
                    <td>{book.rating} </td>
                    <td>
                      <ButtonGroup>
                        <Button>Update</Button>
                        <Button>Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}
