Meteor.startup(() => {

	Session.set('my_name', "Sandra");
	Session.set('invite_activity', false);
	Session.set('invite_activity_name', "");
	Session.set('invite_when', false);
	Session.set('invite_location', false);
	Session.set('invite_friends', false);
	Session.set('invite_friends_name', "");
	Session.set('invite_friends_phone', false);
	Session.set("invite_share_sms_done", false);
});
