import React, { Component } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faList,
  faEdit,
  faSave,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import MyToast from "./MyToast";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
    this.state.show = false;
    this.bookChange = this.bookChange.bind(this);
    this.submitBook = this.submitBook.bind(this);
  }
  initialState = { id: "", title: "", author: "", isbn: "", rating: "" };

  componentDidMount() {
    const bookId = +this.props.match.params.id;
    if (bookId) {
      this.findBookById(bookId);
    }
  }

  findBookById = (bookId) => {
    axios
      .get("http://localhost:8080/book/" + bookId)
      .then((response) => {
        if (response.data != null) {
          this.setState({
            id: response.data.id,
            title: response.data.title,
            author: response.data.author,
            isbn: response.data.isbn,
            rating: response.data.rating,
          });
        }
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  };

  resetBook = () => {
    this.setState(() => this.initialState);
  };

  //Submit book
  submitBook = (event) => {
    /*  alert(
      "Title: " +
        this.state.title +
        ", author: " +
        this.state.author +
        ", isbn: " +
        this.state.isbn +
        ", rating: " +
        this.state.rating
    ); */
    event.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn,
      rating: this.state.rating,
    };

    axios.post("http://localhost:8080/book", book).then((response) => {
      if (response.data != null) {
        this.setState({ show: true, method: "post" });
        setTimeout(() => this.setState({ show: false }), 3000);
      } else {
        this.setState({ show: false });
      }
    });

    this.setState(this.initialState);
  };

  bookChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  bookList = () => {
    return this.props.history.push("/list");
  };

  //update book using PUT
  updateBook = (event) => {
    event.preventDefault();

    const book = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn,
      rating: this.state.rating,
    };

    axios.put("http://localhost:8080/book", book).then((response) => {
      if (response.data != null) {
        this.setState({ show: true, method: "put" });
        setTimeout(() => this.setState({ show: false }), 3000);
        setTimeout(() => this.bookList(), 3000);
      } else {
        this.setState({ show: false });
      }
    });

    this.setState(this.initialState);
  };

  render() {
    const { title, author, isbn, rating } = this.state;
    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message={
              this.state.method === "put"
                ? "Book was updated successfully."
                : "Book was saved successfully."
            }
            type={"success"}
          />
        </div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} />
            {this.state.id ? "Update Book" : "Add New Book"}
          </Card.Header>
          <Form
            onReset={this.resetBook}
            onSubmit={this.state.id ? this.updateBook : this.submitBook}
            id="bookFormId"
          >
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="title"
                    value={title}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Book Title"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAuthor">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="author"
                    value={author}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Book Author"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridIsbn">
                  <Form.Label>Isbn</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="isbn"
                    value={isbn}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Book ISBN"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridRating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="test"
                    name="rating"
                    value={rating}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Book Rating"
                  />
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave} />{" "}
                {this.state.id ? "Update" : "Save"}
                {""}
              </Button>{" "}
              <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} />
                Reset
              </Button>{" "}
              <Button
                size="sm"
                variant="info"
                type="button"
                onClick={this.bookList.bind()}
              >
                <FontAwesomeIcon icon={faList} />
                Book List
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}
