Template.invite_item.onRendered(() => {

	console.log(Session.get("invite_friends_phone"));
});

Template.invite_item.helpers({
  	send_sms_done () {

		const done = Session.get("invite_share_sms_done");
		if (done) {
			return true;
		}

		return false;
	},
	is_sending_flow () {

		if (Session.get("invite_friends_phone")) {

			return true;
		}

		return false;
	},
});
