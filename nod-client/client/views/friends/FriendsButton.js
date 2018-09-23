import React, { Component } from 'react'

class FriendsButton extends Component {

	constructor (props) {

    	super (props);
    	this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {

		this.props.onChange({
	      _id: this.props.data._id,
	      phone: this.props.data.phone,
        name: this.props.data.name,
	    });
	}

	avatar () {

		return 'https://api.adorable.io/avatars/285/' + this.props.i + '.png';
	}
  
  	render () {
	    return (
	    	<tr key={this.props.i} onClick={this.handleClick}>
          <td>
            	<h2 className="ui image header">
              	<img src={this.avatar()} className="ui avatar image" />
            	</h2>
          </td>
          <td>
          	<div className="ui header">
          		{this.props.data.name}
          	</div>
          </td>
        </tr>
	    );
  	}
}

export default FriendsButton
