import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

class PreviewLocation extends Component {

	constructor (props) {

    	super (props);
	}

  	render () {

	    return ("plap");
  	}
}

export default PreviewLocation = withTracker(() => {

	if (this.props && this.props.id) {

		const sub = Meteor.subscribe('locations');
		const dataIsReady = sub.ready();
		const data = Locations.find({}, { reactive : true }).fetch();

		return {
		    dataIsReady,
		    data,
		};
	}

	return {};

})(PreviewLocation);
