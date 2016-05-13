function getId(todos){
  console.log(todos)
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) +1
}

let toDoReducer = function(todos = [], action){
  switch(action.type){
    case 'ADD_TODO' :
      return [{
             text: action.text,
              completed: false,
              id: getId(todos)
            },... todos]
      case "COMPLETE_TODO" :
      console.log("complete reducer")
        return todos.map((todo)=>{
            return todo.id === action.id ? Object.assign({}, todo, { completed : !todo.completed}) : todo
          })
        break;
      case "DELETE_TODO" :
        return todos.filter((todo) => {return action.id !== todo.id})
        break;
    default :
        return todos;
        break;
  }
}

export default toDoReducer
