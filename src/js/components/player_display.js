import React from 'react';
import '../../css/player_display.scss'

export default ({player, onPlayerRemoved}) => (
  <>
    <li className="player_display">
      <div>
        <span>{player.name}</span>
        <button onClick={() => onPlayerRemoved(player.id)}>&ndash;</button>
      </div>
    </li>
  </>
);