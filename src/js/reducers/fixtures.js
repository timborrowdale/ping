export default (state = {}, action) => {
  switch(action.type) {
    case "SET_FIXTURES":
      return action.value;
    case "UPDATE_SCORE":
      return {
        ...state,
        [action.value.fixtureId]: {
          ...state[action.value.fixtureId],
          games: Object.values({
            ...state[action.value.fixtureId].games,
            [action.value.gameIndex]: {
              playerOneScore: action.value.playerOneScore,
              playerTwoScore: action.value.playerTwoScore
            }
          })
        }
      };
    default: 
      return state;
  }
};