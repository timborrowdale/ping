import ShortId from 'shortid';

export default (players) => {
  switch (players.length) {
    case 3:
      return threeASide(players);
    case 4:
      return fourASide(players);
    case 5:
      return fiveASide(players);
    case 6:
      return sixASide(players);
    default:
      throw new Error(`Cannot schedule fixtures for ${players.length} players`);
  }
}

function threeASide(players) {
  let fixtures = {}
  addFixture(fixtures, players[0], players[1], players[2], 3);
  addFixture(fixtures, players[1], players[2], players[0], 3);
  addFixture(fixtures, players[0], players[2], players[1], 3);
  addFixture(fixtures, players[0], players[1], players[2], 3);
  addFixture(fixtures, players[1], players[2], players[0], 3);
  addFixture(fixtures, players[0], players[2], players[1], 3);
  return fixtures;
}

function fourASide(players) {
  let fixtures = {}
  addFixture(fixtures, players[0], players[1], players[3], 4);
  addFixture(fixtures, players[2], players[3], players[0], 4);
  addFixture(fixtures, players[0], players[3], players[2], 4);
  addFixture(fixtures, players[1], players[2], players[3], 4);
  addFixture(fixtures, players[0], players[2], players[1], 4);
  addFixture(fixtures, players[1], players[3], players[2], 4);
  return fixtures;
}

function fiveASide(players) {
  let fixtures = {}
  addFixture(fixtures, players[0], players[1], players[2], 3);
  addFixture(fixtures, players[2], players[3], players[4], 3);
  addFixture(fixtures, players[0], players[4], players[1], 3);
  addFixture(fixtures, players[1], players[2], players[3], 3);
  addFixture(fixtures, players[3], players[4], players[0], 3);
  addFixture(fixtures, players[0], players[2], players[4], 3);
  addFixture(fixtures, players[1], players[4], players[3], 3);
  addFixture(fixtures, players[0], players[3], players[2], 3);
  addFixture(fixtures, players[2], players[4], players[1], 3);
  addFixture(fixtures, players[1], players[3], players[0], 3);
  return fixtures;
}

function sixASide(players) {
  let fixtures = {}
  addFixture(fixtures, players[0], players[1], players[2], 2);
  addFixture(fixtures, players[2], players[3], players[4], 2);
  addFixture(fixtures, players[4], players[5], players[0], 2);
  addFixture(fixtures, players[0], players[2], players[1], 2);
  addFixture(fixtures, players[1], players[5], players[3], 2);
  addFixture(fixtures, players[3], players[4], players[5], 2);
  addFixture(fixtures, players[0], players[3], players[2], 2);
  addFixture(fixtures, players[1], players[4], players[0], 2);
  addFixture(fixtures, players[2], players[5], players[4], 2);
  addFixture(fixtures, players[0], players[4], players[3], 2);
  addFixture(fixtures, players[1], players[2], players[5], 2);
  addFixture(fixtures, players[3], players[5], players[1], 2);
  addFixture(fixtures, players[0], players[5], players[2], 2);
  addFixture(fixtures, players[1], players[3], players[4], 2);
  addFixture(fixtures, players[2], players[4], players[0], 2);
  return fixtures;
}

function addFixture(fixtures, playerOne, playerTwo, umpire, numberOfGames) {
  let games = [];
  let id = ShortId.generate();
  for (var i = 0; i < numberOfGames; i++) {
    games.push({
      playerOneScore: undefined,
      playerTwoScore: undefined
    })
  }
  fixtures[id] = {
    id: id,
    playerOne,
    playerTwo,
    umpire,
    games
  }
}