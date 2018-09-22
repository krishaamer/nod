import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';

class InviteComponent extends React.Component {

  constructor (props: Props) {

    super(props);
    this.state = {};
  }

  render() {
    return (<div></div>);
  }
}

export default InviteComponent = withTracker(({ id }) => {

  const sub = Meteor.subscribe('invites');
  const dataIsReady = sub.ready();
  const data = Invites.find({}, { reactive : true }).fetch();

  return {
    dataIsReady,
    data,
  };

})(InviteComponent);
