import React, { Component } from 'react'

class ActivityButton extends Component {

	constructor (props) {

    	super (props);
    	this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {

		this.props.onChange({
	      _id: this.props.data._id,
	    });
	}
  
  	render () {
	    return (
	      <button key={this.props.i} onClick={this.handleClick} className='ui orange circular segment m1 button'>
	        <span className="header">{this.props.data.name}</span>
	      </button>
	    );
  	}
}

export default ActivityButton
