import React, { Component } from 'react';
import {connect} from 'react-redux';
import states from './consts/app_states';
import Rules from './components/rules';
import PlayerSelect from './components/player_select';
import Fixtures from './components/fixtures';
import Results from './components/results';
import changeState from './actions/change_state';
import reset from './actions/reset';
import '../css/app.scss';

const mapStateToProps = state => ({
  app_state: state.app_state
});

const mapDispatchToProps = dispatch => ({
  changeState: newState => dispatch(changeState(newState)),
  reset: () => dispatch(reset())
});

class App extends Component {

  constructor() {
    super();

    this.getAppStateView = this._getAppStateView.bind(this);
    this.onStart = this._onStartClicked.bind(this);
    this.onStartClicked = this._onStartClicked.bind(this);
    this.onReset = this._onReset.bind(this);
  }

  render() {
    return (
      <>
        <h1><span role="img" aria-label="table tennis bat">🏓</span> Ping!</h1>
        <Rules />
        <br />
        {this.getAppStateView()}
        {this.props.app_state === states.APP_STATE_PLAYING ? <Results /> : null}
        {this.props.app_state === states.APP_STATE_PLAYING ? <button onClick={this.onReset}>Reset</button> : null}
        <p>Source: <a href="https://www.github.com/timborrowdale/ping" target="_blank">https://www.github.com/timborrowdale/ping</a>
      </>
    );
  }

  _getAppStateView() {    
    switch(this.props.app_state) 
    {
      default:
      case states.APP_STATE_START: 
        return (<button onClick={this.onStartClicked}>Start</button>);
      case states.APP_STATE_PLAYER_SELECT:
        return <PlayerSelect maxPlayers={6} minPlayers={3} />;
      case states.APP_STATE_PLAYING:
        return <Fixtures />;
    }
  }

  _onStartClicked() {
    this.props.changeState(states.APP_STATE_PLAYER_SELECT);
  }

  _onReset() {
    this.props.reset();
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(App));
