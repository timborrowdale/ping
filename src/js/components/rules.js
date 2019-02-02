import React from 'react';
import '../../css/rules.scss';

export default class Rules extends React.Component {
  
  constructor() {
    super();

    this.state = {
      rulesExpanded: false
    }

    this.toggleRulesExpansion = this._toggleRulesExpansion.bind(this);
  }
  
  render() {
    return (<div className="rules" onClick={this.toggleRulesExpansion}>
        <h2>Rules</h2>
        {this.state.rulesExpanded ? (
          <ul>
            <li>Place game scores in the same order as listed - e.g. in A vs B put A's score in the first column and B's score in the second.</li>
            <li>Play the full number of games in each fixture.</li>
            <li>No deuces, first to 11 wins the game.</li>
          </ul>
         ) : null}
    </div>);
  }

  _toggleRulesExpansion() {
    this.setState({
      rulesExpanded: !this.state.rulesExpanded
    });
  }
}
