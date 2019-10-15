import React, { Component } from 'react'
import CustomSpeedDial from './CustomSpeedDial';

class LoggedInUser extends Component {
  
  render() {
    const {userData} = this.props;
    const loggedInView = (<span>Thanks for singing in {userData ? userData.nickName : 'User'}. Watch this space for amazing content!.</span>);
    return (
      <div>
        {loggedInView}
        <CustomSpeedDial />
      </div>
    )
  }
}

export default LoggedInUser;