import React from 'react';
import GameScore from './game_score'

export default ({fixture}) => {

  let games = fixture.games.map((game,i) => 
    (<GameScore game={game} fixtureId={fixture.id} gameIndex={i} key={`fixture-${fixture.id}-game-score-${i}`} />)  
  );
  
  return (
    <div className="fixture">
      <div className="fixtureTitle">
        <h3>{fixture.playerOne.name} vs {fixture.playerTwo.name}</h3>
        <p>Umpire: {fixture.umpire.name}</p>
      </div>
      <div className="games">
        {games}
      </div>
    </div>
  );
}