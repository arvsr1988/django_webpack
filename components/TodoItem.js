import React, {Component} from 'react'
//
class TodoItem extends Component {

  constructor(props, context){
    super(props,context);
    this.state = {
    }
  }

  handleComplete(){
    console.log(this)
    this.props.actions.markComplete(this.props.todo.id)
  }

  handleDelete(){
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render(){
    console.log(this.props.todo)
    return (
       <li>
        {this.props.todo.text}
        <button onClick={this.handleComplete.bind(this)}>Mark Complete</button>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
       </li>

    )
  }
}

export default TodoItem
