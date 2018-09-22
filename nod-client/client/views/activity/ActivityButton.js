import React, { Component } from 'react'

class ActivityButton extends Component {
  
  render () {
     return (
      <button key={i} className='ui basic inverted button'>
        <span className="header">{data.name}</span>
      </button>
    );
  }
}

export default ActivityButton