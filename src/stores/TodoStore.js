import {extendObservable, autorun, computed} from "mobx";

class TodoStore {

	constructor(){
		extendObservable(this, {
				todos : ["buy milk", "buy eggs"],
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

}

const todoStore = window.store =new TodoStore();

export default todoStore;

autorun(
	()=>{
		console.log(todoStore.filter);
	}
)