import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

class Loader extends React.Component {

  render() {
    return (
    	<div className="ui grid">
			<div className="sixteen wide column">
				<div className="ui basic segment elementToFadeInAndOut">
					<div className="loaderContainer">
						<p>
							<i className="large notched circle loading icon"></i>
						</p>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Loader