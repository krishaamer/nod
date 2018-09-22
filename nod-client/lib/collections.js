Activities = new Mongo.Collection('activities');
When = new Mongo.Collection('when');
Locations = new Mongo.Collection('locations');
People = new Mongo.Collection('people');
Friends = new Mongo.Collection('friends');
Relationships = new Mongo.Collection('relationships');
Invites = new Mongo.Collection('invites');

Invites.allow({
  insert() { 
  	return true;
  },
});
