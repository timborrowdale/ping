export default (fixtures) => {
  let playerResults = {};
  let completedFixures = Object.values(fixtures).filter(fixture => fixture.games.every(
      game => game.playerOneScore !== undefined && 
        game.playerTwoScore !== undefined && 
        (game.playerOneScore === 11 || game.playerTwoScore === 11)
    )
  );
  completedFixures.forEach(fixture => {
    let points = fixture.games.reduce(sumReducer, {
      playerOnePoints: 0,
      playerTwoPoints: 0
    });
    addOrUpdatePlayer(playerResults, fixture.playerOne.id, fixture.playerOne.name, points.playerOnePoints, points.playerTwoPoints);
    addOrUpdatePlayer(playerResults, fixture.playerTwo.id, fixture.playerTwo.name, points.playerTwoPoints, points.playerOnePoints);  
  });
  return Object.values(playerResults);
}

function sumReducer(points, game) {
  points.playerOnePoints += game.playerOneScore;
  points.playerTwoPoints += game.playerTwoScore;
  return points;
}

function addOrUpdatePlayer(currentResults, playerId, playerName, pointsFor, pointsAgainst) {
  if(currentResults[playerId] === undefined) {
    currentResults[playerId] = {
      name: playerName,
      pointsFor,
      pointsAgainst
    };
  } else {
    currentResults[playerId].pointsFor += pointsFor;
    currentResults[playerId].pointsAgainst += pointsAgainst;
  }
}