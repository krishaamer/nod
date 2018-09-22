import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

class PreviewActivity extends Component {

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

export default PreviewActivity = withTracker(() => {

	const sub = Meteor.subscribe('activities');
	const dataIsReady = sub.ready();
	const data = Activities.findOne({ _id : Session.get("invite_activity") }, { reactive : true });

	return {
	    dataIsReady,
	    data,
	};

})(PreviewActivity);
