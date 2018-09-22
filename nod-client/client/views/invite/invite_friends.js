Template.invite_friends.onCreated(() => { 

	const self = Template.instance();
	self.autorun(() => {
		self.subscribe('friends');
	});
});

Template.invite_friends.helpers({
  	data () {

    	return Friends.findOne({ _id: Template.instance().data.friends });
  	},
});
