import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

class PreviewLocation extends Component {

	constructor (props) {

    	super (props);
	}

  	render () {

  		if (this.props.data && this.props.data.name) {
  			return (
		    	<h3>{this.props.data.name}</h3>
		    );
  		}

  		return (<div></div>);

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
