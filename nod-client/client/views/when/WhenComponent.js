import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';
import WhenButton from './WhenButton';
import Loader from '../loader/Loader.js';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

class WhenComponent extends React.Component {

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

    Session.set('invite_when', selected._id);
    FlowRouter.go('location');
  }

  render () {

    if (this.props.dataIsReady) {
      return this.props.data.map((data, i) => {
        return (
          <WhenButton 
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

export default WhenComponent = withTracker(() => {

  const sub = Meteor.subscribe('when');
  const dataIsReady = sub.ready();
  const data = When.find({}, { reactive : true }).fetch();

  return {
    dataIsReady,
    data,
  };

})(WhenComponent);
