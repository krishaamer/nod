import React, { Component } from 'react'

class ActivityButton extends Component {
  
  render () {

    return (
      <button key={this.props.i} className='ui pink circular segment m1 button'>
        <span className="header">{this.props.data.name}</span>
      </button>
    );
  }
}

export default ActivityButton
