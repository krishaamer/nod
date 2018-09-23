import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.header.helpers({
	title () {

		return FlowRouter.current().route.options.title;
	},
});
