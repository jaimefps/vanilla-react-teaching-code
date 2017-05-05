import React from 'react';

export default class ListItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div style={{ border: "1px solid black" }}>
				<div>{this.props.cat.name}</div>
				<div>{this.props.cat.email}</div>
				<div>{this.props.cat.description}</div>
				<img src={this.props.cat.url} />
			</div>
		)
	}
}