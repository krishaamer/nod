import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';
//import ActivityButton from './ActivityButton';

class ActivityComponent extends React.Component {

  activityButton (data, i) {

    return (
      <button key={i} className='ui basic inverted button'>
        <span className="header">{data.name}</span>
      </button>
    );
  }

  render() {

    if (this.props.dataIsReady) {
      return this.props.data.map(this.activityButton);
    }

    return "";

  }
}

export default ActivityComponent = withTracker(() => {

  const sub = Meteor.subscribe('activities');
  const dataIsReady = sub.ready();
  const data = Activities.find({}, { reactive : true }).fetch();

  return {
    dataIsReady,
    data,
  };

})(ActivityComponent);
