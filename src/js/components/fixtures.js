import React from 'react'
import {connect} from 'react-redux';
import Fixture from './fixture';
import '../../css/fixtures.scss';

const mapStateToProps = state => ({
  fixtures: state.fixtures
});

const Fixtures = ({fixtures}) => {
  let fixtureRows = Object.values(fixtures).map(fixture => 
    (<Fixture fixture={fixture} key={`fixture-row-${fixture.id}`} />)
  )
  return (
  <div className="fixtures">
    <h2>Fixtures</h2>
    {fixtureRows}
  </div>
)}

export default connect(mapStateToProps)(Fixtures);