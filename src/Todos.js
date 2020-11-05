import React from 'react';
import TodoForm from './TodoForm.js'


class Todos extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  renderTodos = () => {
    return this.state.todos.map(todo => <div> {todo.title} - {todo.content} </div>)
  }

  updateTodoList = ({title, content}) => {
    this.setState({
      todos: 
        [...this.state.todos, {title, content}]
    })
  }

  render() {
    return (

      <div>
        <TodoForm formSubmit={this.updateTodoList} />
        {this.renderTodos()}
      </div>
    );
  }
}

export default Todos;
