import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';

class ActivityComponent extends React.Component {

  constructor (props: Props) {

    super(props);
    this.state = {};
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  render() {
    return (
      <div>Plap</div>
    );
  }
}

export default ActivityComponent = withTracker(({ id }) => {

  const sub = Meteor.subscribe('activities');
  const dataIsReady = sub.ready();
  const data = Activities.find({ isPreview: true }, { reactive : true }).fetch();

  return {
    dataIsReady,
    data,
  };

})(ActivityComponent);
