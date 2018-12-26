import React from 'react';
import {connect} from 'react-redux';
import PlayerResult from './player_result';
import calculateResults from '../services/results_calculator';
import '../../css/results.scss';

const mapStateToProps = state => ({
  fixtures: state.fixtures
});

const Results = ({fixtures}) => {
  let playerResults = 
    calculateResults(fixtures)
      .sort(sortByPointsFor);
  
return (
  <div className="results">
    <h2>Results</h2>
    <div className="header">
      <div>Player</div>
      <div>For</div>
      <div>Against</div>
      <div>Difference</div>
    </div>
    {playerResults.map((player, index) => (
      <PlayerResult 
        player={player}
        key={`player-result-${index}`}
      />
    ))}
  </div>
)};

const sortByPointsFor = (playerOne, playerTwo) => {
  if(playerOne.pointsFor > playerTwo.pointsFor) {
    return -1;
  }
  if(playerOne.pointsFor < playerTwo.pointsFor) {
    return 1;
  }
  if(playerOne.pointsAgainst < playerTwo.pointsAgainst) {
    return -1;
  }
  if(playerOne.pointsAgainst > playerTwo.pointsAgainst) {
    return 1;
  }
  return 0;
}

export default connect(mapStateToProps)(Results);