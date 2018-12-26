import React from 'react';
import '../../css/player_input.scss';

export default class PlayerInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }

    this.input = React.createRef();
    this.onNameChange = this._onNameChange.bind(this);
    this.onPlayerAdd = this._onPlayerAdd.bind(this);
    this.handleKeyPress = this._handleKeyPress.bind(this);
  }

  render() {
    return (<div className="player_input">
      <input type="text" value={this.state.name} onChange={this.onNameChange} onKeyPress={this.handleKeyPress} autoFocus ref={this.input} />
      <button onClick={this.onPlayerAdd}>+</button>
    </div>);
  }

  _onNameChange(event) {    
    this.setState({
      name: event.target.value
    });
  }

  _handleKeyPress(event) {
    if(event.key === "Enter") {
      this.onPlayerAdd();
    }
  }

  _onPlayerAdd() {    
    this.props.onPlayerAdd(this.state.name)
    this.setState({
      name: ''
    });
    this.input.current.focus();
  }
}