import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';
import ActivityButton from './ActivityButton';

class ActivityComponent extends React.Component {

  render () {

    if (this.props.dataIsReady) {
      return this.props.data.map((data, i) => {
        return (<ActivityButton key={i} data={data} i={i} />);
      });
    }

    return (<div></div>);

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
