import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.invite.onCreated(() => { 
	
	const self = Template.instance();
	self.autorun(() => {
		self.subscribe('invites', FlowRouter.getParam('slug'));
	});
});

Template.invite.helpers({
  invite () {

    return Invites.findOne({ _id: FlowRouter.getParam('slug') });
  },
});
