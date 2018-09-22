Template.invite_when.onCreated(() => { 
	
	const self = Template.instance();
	self.autorun(() => {
		self.subscribe('when');
	});
});

Template.invite_when.helpers({
  data () {

    return When.findOne({ _id: Template.instance().data.when });
  },
});
