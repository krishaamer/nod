import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';

class PreviewComponent extends React.Component {

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

export default PreviewComponent = withTracker(({ id }) => {

  const sub = Meteor.subscribe('invites');
  const dataIsReady = sub.ready();
  const data = Invites.find({}, { reactive : true }).fetch();

  return {
    dataIsReady,
    data,
  };

})(PreviewComponent);
