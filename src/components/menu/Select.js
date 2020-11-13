import React from 'react'
import ReactDOM from 'react-dom'

import './select.css';
class Select extends React.Component {
  render () {
    return  <div className='select'>
        <img src={this.props.image}/>
        <div className='name'>{this.props.name}</div>
    </div>
  }
}

export default Select;