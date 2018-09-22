import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

class Loader extends React.Component {

  render() {
    return (
    	<div className="ui grid">
			<div className="sixteen wide column">
				<div className="ui basic center aligned centered segment">
					<p>
						<i className="large notched pink circle loading icon"></i>
					</p>
				</div>
			</div>
		</div>
    );
  }
}

export default Loader