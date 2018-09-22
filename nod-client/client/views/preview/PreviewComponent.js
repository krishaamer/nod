import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';
import PreviewLocation from './PreviewLocation';

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
        <PreviewLocation id={Session.get("invite_location")} />
      </div>
    );
  }
}

export default PreviewComponent
