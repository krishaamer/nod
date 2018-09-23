import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
  name: 'activity', 
  title: 'New activity', 
  action () {
    
    this.render('layout', 'main', {
      header: "header",
      content: "activity",
    });

  },
});

FlowRouter.route('/when', {
  name: 'when', 
  title: 'New activity', 
  action () {
    
    this.render('layout', 'main', {
      header: "header",
      content: "when",
    });

  },
});

FlowRouter.route('/location', {
  name: 'location', 
  title: 'New activity', 
  action () {
    
    this.render('layout', 'main', {
      header: "header",
      content: "location",
    });

  },
});

FlowRouter.route('/friends', {
  name: 'friends', 
  title: 'New activity', 
  action () {
    
    this.render('layout', 'main', {
      header: "header",
      content: "friends",
    });

  },
});

FlowRouter.route('/preview', {
  name: 'preview', 
  title: 'Preview', 
  action () {
    
    this.render('layout', 'main', {
      header: "header",
      content: "preview",
    });

  },
});

FlowRouter.route('/invite', {
  name: 'invite', 
  title: 'Invite', 
  action () {
    
    this.render('layout', 'main', {
      content: "invite",
    });

  },
});

FlowRouter.route('/invite/:slug', {
  name: 'inviteSingle', 
  title: 'Your Invite', 
  action () {

    this.render('layout', 'main', {
      content: "invite",
    });
  },
  waitOn (params) {
    return [Meteor.subscribe('invites')];
  },
});

import { FlowRouterMeta, FlowRouterTitle } from 'meteor/ostrio:flow-router-meta';
new FlowRouterMeta(FlowRouter);
new FlowRouterTitle(FlowRouter);
