Template.invite_item.helpers({
  	send_sms_done () {

		const done = Session.get("invite_share_sms_done");
		if (done) {
			return true;
		}

		return false;
	},
});
