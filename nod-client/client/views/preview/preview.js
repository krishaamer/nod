import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import PreviewActivity from './components/PreviewActivity';
import PreviewLocation from './components/PreviewLocation';
import PreviewWhen from './components/PreviewWhen';
import PreviewFriends from './components/PreviewFriends';

Template.preview.helpers({
  PreviewActivity () {
    return PreviewActivity;
  },
  PreviewLocation () {
    return PreviewLocation;
  },
  PreviewWhen () {
    return PreviewWhen;
  },
  PreviewFriends () {
    return PreviewFriends;
  },
})

Template.preview.events({
	'click .send-invite' () {

		const res = Invites.insert({
			activity: Session.get("invite_activity"),
			when: Session.get("invite_when"),
			location: Session.get("invite_location"),
			friends: Session.get("invite_friends"),
		});

		// Maybe add "Call them to make changes" button?

		if (res) {

			// Send SMS
			const recipient = Session.get("invite_friends_phone");
	  		const domain = Meteor.settings["public"].ROOT_URL;
	  		const share_url = domain + "invite/" + res;

			Meteor.call('send-sms', {
					'recipient': recipient,
					'message': "Hi! Here's Your invite! " + share_url,
				}, (err, res) => {

					if (err) {
						console.log(err);
					}

					if (res) {
						Session.set("invite_share_sms_done", true);
					}
		    });


			Session.set('invite_share_id', res);
    		FlowRouter.go('/invite/' + res);
		}
	},
});
