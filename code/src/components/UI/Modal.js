import React, { Component } from "react";

import Aux from "./Auxiliary";

export default class Modal extends Component {
	constructor(props) {
		super(props);
		console.log("Modal: ", props);
	}

	render() {
		if (this.props.isOpen === false) {
			return null;
		}

		const modalStyle = {
			background: "#ddd8d8",
			boxShadow:
				"0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.2)",
			color: "#333",
			left: "50%",
			padding: "20px",
			position: "fixed",
			top: "50%",
			transform: "translate(-50%, -50%)",
			maxWidth: "460px",
			maxHeight: "calc(100% - 100px)",
			zIndex: 4
		};

		const backdropStyle = {
			width: "100%",
			height: "100%",
			position: "fixed",
			zIndex: 3,
			left: "0px",
			top: "0px",
			border: "5px solid rgba(0, 0, 0, 0.2)",
			background: "rgba(0, 0, 0, 0.5)"
		};

		return (
			<Aux>
				<div>
					<div
						className="modal"
						style={modalStyle}
						onClick={e => this.close(e)}
					>
						{this.props.children}
					</div>
					<div style={backdropStyle} onClick={e => this.close(e)} />
				</div>
			</Aux>
		);
	}

	close = e => {
		e.preventDefault();
		if (this.props.onClose) {
			this.props.onClose();
		}
	};
}