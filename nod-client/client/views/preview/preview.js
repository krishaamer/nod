import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import PreviewComponent from './PreviewComponent.js';

Template.preview.helpers({
  PreviewComponent () {
    return PreviewComponent;
  },
})

Template.preview.events({
	'click .send-invite' () {

		const res = Invites.insert({
			activity: Session.get("invite_activity"),
			when: Session.get("invite_when"),
			where: Session.get("invite_where"),
		});

		if (res) {

			Session.set('invite_share_id', res);
    		FlowRouter.go('/invite/' + res);
		}
	},
});
