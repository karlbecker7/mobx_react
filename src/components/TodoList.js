import React, {Component} from 'react';
import {observer} from 'mobx-react';

class TodoList extends Component{
	render(){
		return (
			<h1>Mobx {this.props.store.filter}</h1>
		)
	}
}

export default observer(TodoList);