import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {
  getDefaultProps() {
    return {
      todoItems: []
    }
  }

  renderTodos() {
    return this.props.todoItems.map((item)=>{
      return (
        <TodoItem key={item.id}/>
      );
    })
  }

  render() {
    return (
      <div className="todo-list">
        {this.renderTodos()}
      </div>
    );
  }
}

export default TodoList;
