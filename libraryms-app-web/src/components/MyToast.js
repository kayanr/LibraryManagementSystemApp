import React, { Component } from "react";
import { Toast } from "react-bootstrap";

export default class MyToast extends Component {
  render() {
    const toastCss = {
      position: "fixed",
      top: "10px",
      right: "10px",
      zIndex: "1",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    };
    return (
      <div style={this.props.show ? toastCss : null}>
        <Toast
          className={`border text-white ${
            this.props.type === "success"
              ? "border-success bg-success"
              : "border-danger bg-danger"
          }`}
          show={this.props.show}
        >
          <Toast.Header
            className={`text-white  ${
              this.props.type === "success" ? "bg-success" : "bg-danger"
            }`}
            closeButton={false}
          >
            <strong className="mr-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>{this.props.message}</Toast.Body>
        </Toast>
      </div>
    );
  }
}
