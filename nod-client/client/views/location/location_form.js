import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.location_form.onRendered(() => {

	$('.ui.location_form.form').form({
	    fields: {
	      	location_name: {
	        	identifier: 'location_name',
	        	rules: [
	        		{
					    type: 'empty',
					    prompt: 'Please enter a location name',
					},
	        	],
	      	},
	    },
	});
});

Template.location_form.events({
	'submit .location_form' (e) {

		e.preventDefault();
		FlowRouter.go('friends');
	},
});
