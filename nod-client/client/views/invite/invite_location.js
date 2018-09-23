Template.invite_location.onCreated(() => {

	const self = Template.instance();
	self.autorun(() => {
		self.subscribe('locations');
	});
});

Template.invite_location.helpers({
  data () {

    return Locations.findOne({ _id: Template.instance().data.location });
  },
});
