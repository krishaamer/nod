import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';
import FriendsButton from './FriendsButton';
import Loader from '../loader/Loader.js';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

class FriendsComponent extends React.Component {

  constructor (props) {

    super (props);
    this.state = {
      friends: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (selected) {

    this.setState (state => ({
      selected: selected._id,
    }));

    Session.set('invite_friends', selected._id);
    Session.set('invite_friends_name', selected.name);
    Session.set('invite_friends_phone', selected.phone);
    FlowRouter.go('preview');
  }

  render () {

    if (this.props.dataIsReady) {
      return this.props.data.map((data, i) => {
        return (
          <FriendsButton 
            key={i} 
            data={data} 
            i={i} 
            onChange={this.handleChange}
          />
        );
      });
    }

    return (
      <tr>
        <td>
          <Loader />
        </td>
      </tr>
    );

  }
}

export default FriendsComponent = withTracker(() => {

  const sub = Meteor.subscribe('friends');
  const dataIsReady = sub.ready();
  const data = Friends.find({}, { reactive : true }).fetch();

  return {
    dataIsReady,
    data,
  };

})(FriendsComponent);
