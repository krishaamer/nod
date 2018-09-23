import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Loader from '../../loader/Loader.js';

class PreviewWhen extends Component {

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

export default PreviewWhen = withTracker(() => {

	const sub = Meteor.subscribe('when');
	const dataIsReady = sub.ready();
	const data = When.findOne({ _id : Session.get("invite_when") }, { reactive : true });

	return {
	    dataIsReady,
	    data,
	};

})(PreviewWhen);
