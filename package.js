Package.describe({
  name: 'bloodsucker:bootstrap3-modals',
  version: '0.0.1',
  summary: 'Modals, from bootstrap 3, properly integrated within Meteor platform.',
  git: 'https://github.com/Bloodsucker/meteor-bootstrap3-modals.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['underscore', 'jquery', 'templating'], 'client')
  api.addFiles('client/bootstrap-modal.html', 'client');
  api.addFiles('client/bootstrap-modal.js', 'client');

  api.export('BModals', 'client');
});
