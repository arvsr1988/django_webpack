import React, {Component} from 'react'
import reducer from '../redux/reducers/reducer'

class TodoInput extends Component {

  constructor(props, context){
    super(props,context);
    this.state = {
      inputText : ""
    }
  }

  handleChange(event){
    this.setState({
      inputText : event.target.value
    });
    console.log(this.state)
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("sss button clicked")
    this.props.addTodo(this.state.inputText);
  }

  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Type todo"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <input type="submit"></input>
      </form>
    </div>
    )
  }
}

export default TodoInput
