Meteor.startup(() => {

	Session.set('invite_activity', {});
	Session.set('invite_when', {});
	Session.set('invite_location', {});
	Session.set('invite_friends', {});
	Session.set('invite_friends_phone', {});
	Session.set("invite_share_sms_done", false);
});
