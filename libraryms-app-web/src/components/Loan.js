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

export default class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.initialState,
      show: false,
      books: [],
      members: [],
    };
    this.loanChange = this.loanChange.bind(this);
    this.submitLoan = this.submitLoan.bind(this);
  }

  initialState = {
    id: "",
    bookId: "",
    memberId: "",
    checkoutDate: "",
    dueDate: "",
    returnDate: "",
  };

  componentDidMount() {
    // Fetch books and members to populate the dropdowns
    axios
      .get("http://localhost:8080/books")
      .then((response) => this.setState({ books: response.data }));

    axios
      .get("http://localhost:8080/members")
      .then((response) => this.setState({ members: response.data }));

    // If editing, load the existing loan
    const loanId = +this.props.match.params.id;
    if (loanId) {
      this.findLoanById(loanId);
    }
  }

  findLoanById = (loanId) => {
    axios
      .get("http://localhost:8080/loan/" + loanId)
      .then((response) => {
        if (response.data != null) {
          this.setState({
            id: response.data.id,
            bookId: response.data.book.id,
            memberId: response.data.member.id,
            checkoutDate: response.data.checkoutDate,
            dueDate: response.data.dueDate,
            returnDate: response.data.returnDate || "",
          });
        }
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  };

  resetLoan = () => {
    this.setState(this.initialState);
  };

  loanChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loanList = () => {
    return this.props.history.push("/loan/list");
  };

  submitLoan = (event) => {
    event.preventDefault();

    const loan = {
      bookId: this.state.bookId,
      memberId: this.state.memberId,
      checkoutDate: this.state.checkoutDate,
      dueDate: this.state.dueDate,
      returnDate: this.state.returnDate || null,
    };

    axios.post("http://localhost:8080/loan", loan).then((response) => {
      if (response.data != null) {
        this.setState({ show: true, method: "post" });
        setTimeout(() => this.setState({ show: false }), 3000);
        this.setState(this.initialState);
      } else {
        this.setState({ show: false });
      }
    });
  };

  updateLoan = (event) => {
    event.preventDefault();

    const loan = {
      bookId: this.state.bookId,
      memberId: this.state.memberId,
      checkoutDate: this.state.checkoutDate,
      dueDate: this.state.dueDate,
      returnDate: this.state.returnDate || null,
    };

    axios
      .put("http://localhost:8080/loan/" + this.state.id, loan)
      .then((response) => {
        if (response.data != null) {
          this.setState({ show: true, method: "put" });
          setTimeout(() => this.setState({ show: false }), 3000);
          setTimeout(() => this.loanList(), 3000);
        } else {
          this.setState({ show: false });
        }
      });
  };

  render() {
    const { bookId, memberId, checkoutDate, dueDate, returnDate } = this.state;
    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message={
              this.state.method === "put"
                ? "Loan was updated successfully."
                : "Loan was saved successfully."
            }
            type={"success"}
          />
        </div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} />{" "}
            {this.state.id ? "Update Loan" : "Add New Loan"}
          </Card.Header>
          <Form
            onReset={this.resetLoan}
            onSubmit={this.state.id ? this.updateLoan : this.submitLoan}
            id="loanFormId"
          >
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridBook">
                  <Form.Label>Book</Form.Label>
                  <Form.Control
                    required
                    as="select"
                    name="bookId"
                    value={bookId}
                    onChange={this.loanChange}
                    className={"bg-dark text-white"}
                  >
                    <option value="">-- Select a Book --</option>
                    {this.state.books.map((book) => (
                      <option key={book.id} value={book.id}>
                        {book.title}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMember">
                  <Form.Label>Member</Form.Label>
                  <Form.Control
                    required
                    as="select"
                    name="memberId"
                    value={memberId}
                    onChange={this.loanChange}
                    className={"bg-dark text-white"}
                  >
                    <option value="">-- Select a Member --</option>
                    {this.state.members.map((member) => (
                      <option key={member.id} value={member.id}>
                        {member.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCheckoutDate">
                  <Form.Label>Checkout Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="checkoutDate"
                    value={checkoutDate}
                    onChange={this.loanChange}
                    className={"bg-dark text-white"}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridDueDate">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="dueDate"
                    value={dueDate}
                    onChange={this.loanChange}
                    className={"bg-dark text-white"}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridReturnDate">
                  <Form.Label>Return Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="returnDate"
                    value={returnDate}
                    onChange={this.loanChange}
                    className={"bg-dark text-white"}
                  />
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave} />{" "}
                {this.state.id ? "Update" : "Save"}
              </Button>{" "}
              <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} /> Reset
              </Button>{" "}
              <Button
                size="sm"
                variant="info"
                type="button"
                onClick={this.loanList.bind(this)}
              >
                <FontAwesomeIcon icon={faList} /> Loan List
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}
