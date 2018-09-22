import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'send-sms' (props) {

    const sms = new Twilio({
      from: Meteor.settings["Twilio"].from,
      sid: Meteor.settings["Twilio"].sid,
      token: Meteor.settings["Twilio"].token,
    });

    sms.sendSMS({
      to: props.recipient,
      body: props.message,
    });

    return true;
  },
});
