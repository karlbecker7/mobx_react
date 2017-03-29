import React, {Component} from 'react';
import {observer} from 'mobx-react';

class TodoList extends Component{

	filter(e){
		this.props.store.filter = e.target.value;
	}

	render(){

		const {todos, filter, filteredTodos} = this.props.store;

		const todoLis = filteredTodos.map( todo=>(
				<li key={todo}>{todo}</li>
			)			
		);		

		return (
			<div>
				<h1>Todos</h1>

				<input onChange={e=>this.filter(e)}/>
				<div>{filter}</div>
				<ul>
					{todoLis}
				</ul>
			</div>
		)
	}
}

export default observer(TodoList);