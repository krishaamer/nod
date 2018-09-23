import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Loader from '../../loader/Loader.js';

class PreviewLocation extends Component {

	constructor (props) {

    	super (props);
	}

  	render () {

  		if (this.props.data && this.props.data.name) {
  			return this.props.data.name;
  		}

  		return (<Loader />);
  	}
}

export default PreviewLocation = withTracker(() => {

	const sub = Meteor.subscribe('locations');
	const dataIsReady = sub.ready();
	const data = Locations.findOne({ _id : Session.get("invite_location") }, { reactive : true });

	return {
	    dataIsReady,
	    data,
	};

})(PreviewLocation);
