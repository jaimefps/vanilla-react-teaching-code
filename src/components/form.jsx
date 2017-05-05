import React, {Component} from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			description: '',
			url: '',
		};

		this.handleName = this.handleName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleUrl = this.handleUrl.bind(this);

		this.createCat = this.createCat.bind(this);
	}

	handleName(e) {
		this.setState({
			name: e.target.value
		});
	}
	handleEmail(e) {
		this.setState({
			email: e.target.value
		});
	}
	handleDescription(e) {
		this.setState({
			description: e.target.value
		});
	}
	handleUrl(e) {
		this.setState({
			url: e.target.value
		});
	}
	
	createCat() {
		let newCat = {
			name: this.state.name,
			email: this.state.email,
			description: this.state.description,
			url: this.state.url,
		}
		console.log('createCat fired ', newCat);
		return newCat;
	}

	render() {
		return(
			<div className="form">
				<input placeholder="name" type="text" onChange={this.handleName}/>
				<input placeholder="owner email" type="text" onChange={this.handleEmail}/>
				<input placeholder="description" type="text" onChange={this.handleDescription}/>
				<input placeholder="image url" type="text" onChange={this.handleUrl}/>
				<button onClick={ () => { this.props.postCats( this.createCat() ) } }> Add to DB </button>
			</div>

		)
	}
}