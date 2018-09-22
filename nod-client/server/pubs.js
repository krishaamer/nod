Meteor.publish('people', () => {
	return People.find();
});

Meteor.publish('friends', () => {
	return Friends.find();
});

Meteor.publish('activities', () => {
	return Activities.find();
});

Meteor.publish('relationships', () => {
	return Relationships.find();
});

Meteor.publish('invites', () => {
	return Invites.find();
});
