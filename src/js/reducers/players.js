export default (state = [], action) => {
  switch(action.type) {
    case "SET_PLAYERS":
      return action.value;
    default: 
      return state;
  }
};