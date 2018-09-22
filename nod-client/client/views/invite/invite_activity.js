Template.invite_activity.onCreated(() => { 
	
	const self = Template.instance();
	self.autorun(() => {
		self.subscribe('activities');
	});
});

Template.invite_activity.helpers({
  data () {

    return Activities.findOne({ _id: Template.instance().data.activity });
  },
});
