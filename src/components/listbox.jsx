import React, {Component} from 'react';
import ListItem from './listitem.jsx';

export default class ListBox extends React.Component {
	render() {
		return(
			<div>{this.props.allCats.map((cat) => (<ListItem cat={cat} key={Math.random()} />))}</div>
		)
	}
}