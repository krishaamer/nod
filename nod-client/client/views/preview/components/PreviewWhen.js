import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

class PreviewWhen extends Component {

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

export default PreviewWhen = withTracker(() => {

	const sub = Meteor.subscribe('when');
	const dataIsReady = sub.ready();
	const data = When.findOne({ _id : Session.get("invite_when") }, { reactive : true });

	return {
	    dataIsReady,
	    data,
	};

})(PreviewWhen);
