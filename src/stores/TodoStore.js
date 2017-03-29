import {extendObservable, autorun} from "mobx";

class TodoStore {

	constructor(){
		extendObservable(this, {
				todos : ["buy milk", "buy eggs"],
				filter : "m"
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