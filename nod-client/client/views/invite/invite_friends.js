Template.invite_friends.onCreated(() => { 

	console.log(Template.instance());
	
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
