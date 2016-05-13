import React, {Component} from 'react'
import TodoItem from './TodoItem'

class UserInfo extends Component {

  constructor(props, context){
    super(props,context);
    this.state = {
    }
  }

  handleNewId(){
    console.log("handle new id clicked")
    this.props.actions.createNewUserId()
  }
  handleNewIdIfOdd(){
    console.log("handle new id clicked")
    this.props.actions.createNewUserIdIfOdd()
  }

  handleNewIdAsync(){
    console.log("handle id create async")
    this.props.actions.createNewUserIdAsync()
  }

  render(){
    return (
      <div>
      <div> user name : {this.props.user.name}</div>
      <div> id : {this.props.user.id}</div>
      <button onClick={this.handleNewId.bind(this)}>Create new id</button>
      <button onClick={this.handleNewIdIfOdd.bind(this)}>Create new id if odd</button>
      </div>
    )
  }
}

export default UserInfo
