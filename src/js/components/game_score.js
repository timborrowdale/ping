import React from 'react';
import {connect} from 'react-redux';
import updateScore from '../actions/update_score';

const mapStateToProps = (state, componentProps) => ({
  game: state.fixtures[componentProps.fixtureId].games[componentProps.gameIndex]
});

const mapDispatchToProps = (dispatch) => ({
  updateScore: (game) => dispatch(updateScore(game))
})

class GameScore extends React.Component {

  constructor() {
    super();

    this.onPlayerOneScoreChange = this._onPlayerOneScoreChange.bind(this);
    this.onPlayerTwoScoreChange = this._onPlayerTwoScoreChange.bind(this);
  }

  render() {
    return (
      <div className="game_score">
        <p>Game {this.props.gameIndex + 1}</p>
        <div>
          <input type="number" maxLength={2} min={0} max={11} value={emptyIfUndefined(this.props.game.playerOneScore)} onChange={this.onPlayerOneScoreChange} />
          <input type="number" maxLength={2} min={0} max={11} value={emptyIfUndefined(this.props.game.playerTwoScore)} onChange={this.onPlayerTwoScoreChange} />
        </div>
      </div>
    );
  }

  _onPlayerOneScoreChange(event) {
    this.props.updateScore({
      fixtureId: this.props.fixtureId,
      gameIndex: this.props.gameIndex,
      playerOneScore: numberOrDefault(event.target.value),
      playerTwoScore: this.props.game.playerTwoScore
    });
  }

  _onPlayerTwoScoreChange(event) {
    this.props.updateScore({
      fixtureId: this.props.fixtureId,
      gameIndex: this.props.gameIndex,
      playerOneScore: this.props.game.playerOneScore,
      playerTwoScore: numberOrDefault(event.target.value)
    });
  }

}

function numberOrDefault(value) {
  return parseInt(value) || 0;
}

function emptyIfUndefined(value) {
  return value === undefined ? '' : value;
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScore)