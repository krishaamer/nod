import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.when_form.onRendered(() => {

	$('.ui.when_form.form').form({
	    fields: {
	      	when_name: {
	        	identifier: 'when_name',
	        	rules: [
	        		{
					    type: 'empty',
					    prompt: 'Please enter a time limit',
					},
	        	],
	      	},
	    },
	});
});

Template.when_form.events({
	'submit .when_form' (e) {

		e.preventDefault();
		FlowRouter.go('location');
	},
});
