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
  	is_sending_flow () {

		if (Session.get("invite_friends_phone")) {
			return true;
		}

		return false;
	},
});
