import React, { Component } from 'react'
import { connect } from 'react-redux';
import LoggedInUser from './LoggedInUser';

class Home extends Component {

  render() {
    const { user } = this.props;

    return (
      <div>
        {!!user ? 
         <LoggedInUser {...this.props} />: 
        (<span>Please login to view this page</span>)}
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
