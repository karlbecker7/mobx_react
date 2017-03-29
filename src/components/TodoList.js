import React, {Component} from 'react';
import {observer} from 'mobx-react';

class TodoList extends Component{

	filter(e){
		this.props.store.filter = e.target.value;
	}

	createNewTodo(e){
		if(e.which ===13){
			if(e.target.value == "") return;
			this.props.store.createTodo(e.target.value);
			e.target.value = "";
		}

	}

	changeCheck(e, todo){
		todo.isComplete = !todo.isComplete;
	}

	render(){

		const {todos, filter, filteredTodos, createTodo, clearCompletedTodo} = this.props.store;

		const todoLis = filteredTodos.map( todo=>(
				<li key={todo.id}><input type="checkbox" onChange={e=>this.changeCheck(e, todo)} checked={todo.isComplete} value={todo.isComplete}/>{todo.value}</li>
			)			
		);		

		return (
			<div>
				<h1>Todos</h1>

				<input onChange={e=>this.filter(e)}/>
				<input onKeyPress={e=>this.createNewTodo(e)} />				
				<ul>
					{todoLis}
				</ul>

				<a href="#" onClick={clearCompletedTodo}>Clear completed todo</a>
			</div>
		)
	}
}

export default observer(TodoList);