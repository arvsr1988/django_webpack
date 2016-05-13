
let userReducer = function(user = {}, action){
  switch(action.type){
    case "CREATE_USER_ID" :
      return {name : user.name, id : action.id}
      break;
    default :
        return user;
        break;
  }
}

export default userReducer
