Template.invite_item_receiver.helpers({
  	inviter_name () {

		return "Sandra";
	},
	url_accept () {

		return "/invite/" + Template.instance().data._id + "/accept";
	},
	url_deny () {

		return "/invite/" + Template.instance().data._id + "/deny";
	},
	url_forward () {

		return "/invite/" + Template.instance().data._id + "/forward";
	},
});
