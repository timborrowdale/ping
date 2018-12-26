import React from 'react';
import ShortId from 'shortid';
import {connect} from 'react-redux';
import PlayerInput from './player_input';
import PlayerDisplay from './player_display';
import states from '../consts/app_states';
import changeState from '../actions/change_state';
import schedulefixturees from '../services/fixture_scheduler';
import setPlayers from '../actions/set_players';
import setFixtures from '../actions/set_fixtures';
import '../../css/player_select.scss';

const mapDispatchToProps = dispatch => ({
  changeState: newState => dispatch(changeState(newState)),
  setPlayers: players => dispatch(setPlayers(players)),
  setFixtures: fixtures => dispatch(setFixtures(fixtures))
})

class PlayerSelect extends React.Component {

  constructor() {
    super();

    this.state = {
      players: []
    }

    this.onPlayerAdd = this._onPlayerAdd.bind(this);
    this.onPlayerRemoved = this._onPlayerRemoved.bind(this);
    this.onStart = this._onStart.bind(this);
  }

  render() {    
    let playerListView = this.state.players.map(player => 
      (<PlayerDisplay player={player} key={`player-display-${player.id}`} onPlayerRemoved={this.onPlayerRemoved} />)
    );
    return (
    <div className="player_select">
      <h2>Players</h2>
      <ol type="A">
        {playerListView}
      </ol>
      {this.state.players.length < this.props.maxPlayers ? <PlayerInput onPlayerAdd={this.onPlayerAdd} /> : null}
      {this.state.players.length >= this.props.minPlayers ? <button onClick={this.onStart}>Start</button> : null}
    </div>);
  }

  _onPlayerAdd(playerName) {    
    let newPlayers = this.state.players;
    newPlayers.push({
      id: ShortId.generate(),
      name: playerName
    });
    this.setState({
      players: newPlayers
    });
  }

  _onPlayerRemoved(playerId) {
    let reducedPlayers = this.state.players.filter(player => player.id !== playerId);
    this.setState({
      players: reducedPlayers
    });
  }

  _onStart() {
    this.props.changeState(states.APP_STATE_PLAYING);
    this.props.setPlayers(this.state.players);
    this.props.setFixtures(schedulefixturees(this.state.players));
  }
}

export default (connect(undefined, mapDispatchToProps)(PlayerSelect));