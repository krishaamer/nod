import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Loader from '../../loader/Loader.js';

class PreviewFriends extends Component {

	constructor (props) {

    	super (props);
	}

  	render () {

  		if (this.props.data && this.props.data.name) {
  			return (
		    	<h3>{this.props.data.name}</h3>
		    );
  		}

  		return (<Loader />);
  	}
}

export default PreviewFriends = withTracker(() => {

	const sub = Meteor.subscribe('friends');
	const dataIsReady = sub.ready();
	const data = Friends.findOne({ _id : Session.get("invite_friends") }, { reactive : true });

	return {
	    dataIsReady,
	    data,
	};

})(PreviewFriends);
