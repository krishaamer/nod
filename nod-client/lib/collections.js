Activities = new Mongo.Collection('activities');
Activities.allow({
  insert() { 
  	return true;
  },
});

When = new Mongo.Collection('when');
When.allow({
  insert() { 
  	return true;
  },
});

Locations = new Mongo.Collection('locations');
Locations.allow({
  insert() { 
  	return true;
  },
});

People = new Mongo.Collection('people');
Friends = new Mongo.Collection('friends');
Relationships = new Mongo.Collection('relationships');

Invites = new Mongo.Collection('invites');
Invites.allow({
  insert() { 
  	return true;
  },
});
