import React, { Component } from "react";
import { formatDate } from "../js/Utils";

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<h1>{this.props.data.companyName}</h1>
				<div className="motto">{this.props.data.companyMotto}</div>
				<div className="established">
					Since (Company Est {formatDate(this.props.data.companyEst)})
				</div>
			</header>
		);
	}
}