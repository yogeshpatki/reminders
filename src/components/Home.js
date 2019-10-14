import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getUserData}  from '../data/userData';


class Home extends Component {

  render() {
    const { user } = this.props;

    return (
      
      <div>
        {!!user ? 
        (<span>Thanks for singing in {getUserData(user.uid)}. Watch this space for amazing content!.</span>) : 
        (<span>Please login to view this page</span>)}
        
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
