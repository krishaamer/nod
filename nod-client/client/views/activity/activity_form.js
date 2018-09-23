import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.activity_form.onRendered(() => {

	$('.ui.activity_form.form').form({
	    fields: {
	      	activity_name: {
	        	identifier: 'activity_name',
	        	rules: [
	        		{
					    type: 'empty',
					    prompt: 'Please enter an activity name',
					},
	        	],
	      	},
	    },
	});
});

Template.activity_form.events({
	'submit .activity_form' (e) {

		e.preventDefault();
		const target = e.target;
		const name = target.activity_name.value;
		const new_activity_id = Activities.insert({
			name: name,
		});

		Session.set('invite_activity_name', name);

		if (new_activity_id) {

			Session.set('invite_activity', new_activity_id);
    		FlowRouter.go('when');
		}
	},
});
