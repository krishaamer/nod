import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.when_form.events({
	'submit .when-form' (e) {

		e.preventDefault();
		FlowRouter.go('location');
	},
});
