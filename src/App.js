import React, { Component } from 'react';

import {TodoList} from './components';
import TodoStore from './stores/TodoStore';

class App extends Component {
  render() {
    return (
      <TodoList store={TodoStore} />
    );
  }
}

export default App;
