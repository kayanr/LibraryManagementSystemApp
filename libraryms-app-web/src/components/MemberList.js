import React, { Component } from "react";
import { Card, Table, ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faList } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import MyToast from "./MyToast";
import { Link } from "react-router-dom";

export default class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      show: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/members")
      .then((response) => response.json())
      .then((data) => this.setState({ members: data }));
  }

  deleteMember = (memberId) => {
    axios.delete("http://localhost:8080/member/" + memberId).then((response) => {
      if (response.status === 200) {
        this.setState({ show: true });
        setTimeout(() => this.setState({ show: false }), 3000);
        this.setState({
          members: this.state.members.filter((member) => member.id !== memberId),
        });
      } else {
        this.setState({ show: false });
      }
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message={"Member was deleted successfully."}
            type={"danger"}
          />
        </div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <FontAwesomeIcon icon={faList} /> {"  "}
            Member List
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Membership Date</th>
                  <th>Membership Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.members.length === 0 ? (
                  <tr align="center">
                    <td colSpan="5">No members found.</td>
                  </tr>
                ) : (
                  this.state.members.map((member) => (
                    <tr key={member.id}>
                      <td>{member.name}</td>
                      <td>{member.email}</td>
                      <td>{member.membershipDate}</td>
                      <td>{member.membershipType}</td>
                      <td>
                        <ButtonGroup>
                          <Link
                            to={"/member/edit/" + member.id}
                            className="btn btn-sm btn-outline-primary"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>{" "}
                          {"  "}
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={this.deleteMember.bind(this, member.id)}
                          >
                            Delete <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
