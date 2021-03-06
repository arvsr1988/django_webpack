import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import actions from '../redux/actions'
import {bindActionCreators} from 'redux'
import UserInfo from './UserInfo'

class App extends Component {

  render() {
    return (
        <div className="app">
          <h1>App Component</h1>
          <UserInfo user={this.props.user} actions={this.props.actions}/>
          <TodoInput addTodo={this.props.actions.addTodo} />
          <TodoList actions={this.props.actions} todos={this.props.todos}/>
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
