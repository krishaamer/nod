Meteor.startup(() => {

	Session.set('invite_activity', {});
	Session.set('invite_when', {});
	Session.set('invite_location', {});
	Session.set('invite_friends', {});
});
