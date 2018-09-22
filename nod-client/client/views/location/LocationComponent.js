import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';
import LocationButton from './LocationButton';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

class LocationComponent extends React.Component {

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

    Session.set('invite_location', selected._id);
    FlowRouter.go('friends');
  }

  render () {

    if (this.props.dataIsReady) {
      return this.props.data.map((data, i) => {
        return (
          <LocationButton 
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

export default LocationComponent = withTracker(() => {

  const sub = Meteor.subscribe('locations');
  const dataIsReady = sub.ready();
  const data = Locations.find({}, { reactive : true }).fetch();

  return {
    dataIsReady,
    data,
  };

})(LocationComponent);
