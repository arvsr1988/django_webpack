let actions = {
  addTodo : function(text){
    return {
      type : 'ADD_TODO',
      text : text
    }
  },
  markComplete : function (id){
    return {
      type : "COMPLETE_TODO",
      id : id
    }
  },
  deleteTodo : function(id){
    return {
      type : "DELETE_TODO",
      id : id
    }
  },
  createNewUserId : function(){
    return {
      type : "CREATE_USER_ID",
      id : parseInt(Math.random()*100)
    }
  },
  createNewUserIdIfOdd : function(){
    return (dispatch, getState) => {
      const {user} = getState()
      if(user.id % 2 === 0){
        return;
      }
      dispatch(actions.createNewUserId())
    }
  }
}

export default actions
