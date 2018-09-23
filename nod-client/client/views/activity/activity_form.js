import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.activity_form.events({
	'submit .activity-form' (e) {

		e.preventDefault();
		const target = e.target;
		const name = target.activity_name.value;
		const new_activity_id = Activities.insert({
			name: name,
		});

		if (new_activity_id) {

			Session.set('invite_activity', new_activity_id);
    		FlowRouter.go('when');
		}
	},
});
