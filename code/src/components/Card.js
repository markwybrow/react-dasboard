import React, { Component } from "react";
import Modal from "./UI/Modal";
import CardDetails from "./CardDetails";
import Aux from "./UI/Auxiliary";
import { truncate } from "../js/Utils";


export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };
  }
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });

  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <Aux>
        <div className="card" onClick={() => this.toggleModal(this)}>
          <div className="avatar">
            <img
              src={this.props.meta.avatar}
              alt={
                "Avatar: " +
                this.props.meta.firstName +
                " " +
                this.props.meta.lastName
              }
            />
          </div>
          <div className="card-content">
            <h2 className="heading">
              {this.props.meta.firstName + " " + this.props.meta.lastName}
            </h2>
            <p> {this.props.meta.jobTitle} </p>
          </div>
          <p className="small"> {truncate(this.props.meta.bio)} </p>
        </div>

        <Modal
          isOpen={this.state.isModalOpen}
          onClose={() => this.closeModal()}
        >
          <CardDetails meta={this.props} />
        </Modal>
      </Aux>
    );
  }
}