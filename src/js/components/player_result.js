import React from 'react';
import '../../css/player_result.scss';

export default ({player}) => {
  
  return (
  <div className="player_result">
    <div className="player_name">{player.name}</div>
    <div>{player.pointsFor.toString()}</div>
    <div>{player.pointsAgainst.toString()}</div>
    <div>{(player.pointsFor - player.pointsAgainst).toString()}</div>
  </div>)
}

