import React from 'react'
import ReactDOM from 'react-dom'

import Profile from './Profile'

import './topbar.css';

import Logo from '../../static/logo/logo_white.svg';
import Avatar from '../../static/img/image.png'

class TopBar extends React.Component {
    render () {
      return <div className='topbar'>
          <div className='wrapper'>
              <img src={Logo}/>
              <Profile name='Денис Рамусь' role='Администратор' avatar={Avatar}/>
          </div>
      </div>
    }
  }
  
  export default TopBar;