import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';

class FriendsComponent extends React.Component {

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

export default FriendsComponent = withTracker(({ id }) => {

  const sub = Meteor.subscribe('activities');
  const dataIsReady = sub.ready();
  const data = Intro.find({}, { reactive : true }).fetch();

  return {
    dataIsReady,
    data,
  };

})(FriendsComponent);
