import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';
import ActivityButton from './ActivityButton';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

class ActivityComponent extends React.Component {

  constructor (props) {

    super (props);
    this.state = {
      activity: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (activity) {

    this.setState (state => ({
      activity: activity._id,
    }));

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
