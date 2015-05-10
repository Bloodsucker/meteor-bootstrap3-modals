Package.describe({
  name: 'bloodsucker:bootstrap-modal',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['underscore', 'jquery', 'templating'], 'client')
  api.addFiles('client/bootstrap-modal.html', 'client');
  api.addFiles('client/bootstrap-modal.js', 'client');

  api.export('BModals', 'client');
});
