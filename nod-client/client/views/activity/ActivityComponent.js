import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';
import ActivityButton from './ActivityButton';
import Loader from '../loader/Loader.js';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

class ActivityComponent extends React.Component {

  constructor (props) {

    super (props);
    this.state = {
      activity: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (selected) {

    this.setState (state => ({
      selected: selected._id,
    }));

    Session.set('invite_activity', selected._id);
    FlowRouter.go('when');
  }

  render () {

    if (this.props.dataIsReady) {
      return this.props.data.map((data, i) => {
        return (
          <ActivityButton 
            key={i} 
            data={data} 
            i={i} 
            onChange={this.handleChange}
          />
        );
      });
    }

    return (<Loader />);

  }
}

export default ActivityComponent = withTracker(() => {

  const sub = Meteor.subscribe('activities');
  const dataIsReady = sub.ready();
  const data = Activities.find({ featured: true }, { reactive: true }).fetch();

  return {
    dataIsReady,
    data,
  };

})(ActivityComponent);
