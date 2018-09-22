import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
  name: 'activity', 
  title: 'Activity', 
  action () {
    
    this.render('layout', 'main', {
      content: "activity",
    });

  },
});

FlowRouter.route('/when', {
  name: 'when', 
  title: 'When', 
  action () {
    
    this.render('layout', 'main', {
      content: "when",
    });

  },
});

FlowRouter.route('/location', {
  name: 'location', 
  title: 'Location', 
  action () {
    
    this.render('layout', 'main', {
      content: "location",
    });

  },
});

FlowRouter.route('/friends', {
  name: 'friends', 
  title: 'Friends', 
  action () {
    
    this.render('layout', 'main', {
      content: "friends",
    });

  },
});

FlowRouter.route('/preview', {
  name: 'preview', 
  title: 'Preview', 
  action () {
    
    this.render('layout', 'main', {
      content: "preview",
    });

  },
});

FlowRouter.route('/invitation', {
  name: 'invitation', 
  title: 'Invitation', 
  action () {
    
    this.render('layout', 'main', {
      content: "invitation",
    });

  },
});

import { FlowRouterMeta, FlowRouterTitle } from 'meteor/ostrio:flow-router-meta';
new FlowRouterMeta(FlowRouter);
new FlowRouterTitle(FlowRouter);