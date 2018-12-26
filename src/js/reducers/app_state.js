export default (state = {}, action) => {
  switch(action.type) {
    case "CHANGE_STATE":
      return action.value
    default: 
      return state;
  }
};