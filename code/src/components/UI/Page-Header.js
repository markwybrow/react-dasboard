import React, { Component } from 'react';


export default class PageHeader extends Component {

    render() {
        return (
			<section className="pageHeader">
				<h2>{this.props.pageName}</h2>
			</section>
        );
    }
}