import {extendObservable, autorun, computed} from "mobx";

class Todo{
	constructor(value){
		extendObservable(this,{
			value:value,
			isComplete:false,
			id:Date.now()
		})
	}
}

class TodoStore {

	constructor(){
		extendObservable(this, {
				todos : [],
				filter : "",
				filteredTodos : computed(()=>{
					var matchFilter = new RegExp(this.filter, "i");
					return this.todos.filter(
						todo=>{return matchFilter.test(todo);}
					)
				})
			}
		);
	}

	createTodo(v){
		this.todos.push( new Todo(v) );
	}

	clearCompletedTodo=()=>{
		
		const completedTodos = this.todos.filter( todo=>!todo.isComplete );
		this.todos.replace(completedTodos);
	}

}

const todoStore = window.store =new TodoStore();

export default todoStore;

autorun(
	()=>{
		console.log(todoStore.filter);
	}
)