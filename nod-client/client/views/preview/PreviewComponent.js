import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';
import PreviewActivity from './components/PreviewActivity';
import PreviewLocation from './components/PreviewLocation';
import PreviewWhen from './components/PreviewWhen';
import PreviewFriends from './components/PreviewFriends';

class PreviewComponent extends React.Component {

  constructor (props: Props) {

    super(props);
    this.state = {};
  }

  render() {

    console.log(this.props);

    const invite = {
      activity: Session.get("invite_activity"),
      when: Session.get("invite_when"),
      location: Session.get("invite_location"),
      friends: Session.get("invite_friends"),
    };

    return (
      <div className="ui center aligned basic segment">
        <h1>Invite!</h1>
        <PreviewActivity />
        <PreviewLocation />
        <PreviewWhen />
        <PreviewFriends />
      </div>
    );
  }
}

export default PreviewComponent
