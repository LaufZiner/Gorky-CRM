import React from 'react'
import ReactDOM from 'react-dom'

import './profile.css';

class Profile extends React.Component {
    render () {
      return <div className='profile'>
          <div className='group-name-role'>
            <div className='name'>{this.props.name}</div>
            <div className='role'>{this.props.role}</div>
          </div>
          <img src={this.props.avatar}/>
      </div>
    }
  }
  
  export default Profile;