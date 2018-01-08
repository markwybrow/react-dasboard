import React from "react";
import { formatDate } from "../js/Utils";

import Aux from "./UI/Auxiliary";

const cardDetails = props => {

	const userDetail = props.meta.meta;


	return (
		<Aux>
			<div className="card-modal">
				<span className="closeBtn">&times;</span>
				<section className="side">
					<img
						className="avatar"
						src={userDetail["avatar"]}
						alt={
							"Avatar: " +
							userDetail.firstName +
							" " +
							userDetail.lastName
						}
					/>
					<ul>
						<li>{userDetail.jobTitle} </li>
						<li>{userDetail.age} </li>
						<li>{formatDate(userDetail.dateJoined)} </li>
					</ul>
				</section>
				<div className="card-content">
					<h2 className="heading">
						{" "}
						<span>
							{userDetail.firstName + " " + userDetail.lastName}
						</span>{" "}
					</h2>
					<p> {userDetail.bio} </p>
				</div>
			</div>
		</Aux>
	);
};

export default cardDetails;