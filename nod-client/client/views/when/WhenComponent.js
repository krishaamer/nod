import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';

class WhenComponent extends React.Component {

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

export default WhenComponent = withTracker(({ id }) => {

  const sub = Meteor.subscribe('intro');
  const dataIsReady = sub.ready();
  const data = Activities.find({}, { reactive : true }).fetch();

  return {
    dataIsReady,
    data,
  };

})(WhenComponent);
