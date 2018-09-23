import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.globals.push({
  meta: {
    'charset': {
      charset: 'UTF-8',
    },
    'keywords': {
      name: 'keywords',
      itemprop: 'keywords',
      content: 'social, friends, app, activities',
    },
    'description': {
      name: 'description',
      itemprop: 'description',
      property: 'og:description',
      content: Meteor.settings["public"].SITE_DESC,
    },
    'image': {
      name: 'twitter:image',
      itemprop: 'image',
      property: 'og:image',
      content: Meteor.settings["public"].DEFAULT_SHARE_IMG,
    },
    'google': {
      name: 'google-site-verification',
      content: Meteor.settings["public"].GOOGLE_SITE_VERIFICATION,
    },
    'og:type': {
      'property': 'og:type',
      'content': 'website',
    },
    'og:title': {
      'property': 'og:title',
      'content' () {
        return document.title;
      },
    },
    'og:site_name': {
      'property': 'og:site_name',
      'content': Meteor.settings["public"].SITE_NAME,
    },
    'url': {
      property: 'og:url',
      itemprop: 'url',
      content () {
        return window.location.href;
      }
    },
    'twitter:card': 'summary',
    'twitter:title' () {
      return document.title;
    },
    'twitter:description': Meteor.settings["public"].SITE_DESC,
    'http-equiv': {
      'http-equiv': 'X-UA-Compatible',
      'content': 'IE=edge,chrome=1'
    },
    'robots': 'index, follow',
  },
});

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

FlowRouter.route('/invite/:slug/accept', {
  name: 'inviteForward', 
  title: 'Accept Invite', 
  action () {

    this.render('layout', 'main', {
      content: "invite_item_receiver_accept",
    });
  },
});

FlowRouter.route('/invite/:slug/deny', {
  name: 'inviteForward', 
  title: 'Another time...', 
  action () {

    this.render('layout', 'main', {
      content: "invite_item_receiver_deny",
    });
  },
});

FlowRouter.route('/invite/:slug/forward', {
  name: 'inviteForward', 
  title: 'Forward Invite', 
  action () {

    this.render('layout', 'main', {
      content: "invite_item_receiver_forward",
    });
  },
});

import { FlowRouterMeta, FlowRouterTitle } from 'meteor/ostrio:flow-router-meta';
new FlowRouterMeta(FlowRouter);
new FlowRouterTitle(FlowRouter);
