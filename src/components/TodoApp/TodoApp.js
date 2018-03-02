import React, { Component } from 'react';
import './TodoApp.css';
import TodoList from '../TodoList/TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "Walk the dog" },
        { id: 2, text: "Clean the room" }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to TodoApp</h1>
        </header>

        <TodoList todoItems={this.state.todos}/>
      </div>
    );
  }
}

export default TodoApp;
