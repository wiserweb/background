Package.describe({
  name: 'wiserweb:background',
  summary: 'Allows Cordova apps to continue running in the background',
  version: '1.0.1',
  git: 'https://github.com/wiserweb/background'
});

Cordova.depends({
  'cordova-plugin-background-mode':'https://github.com/cvuser0/cordova-plugin-background-mode.git#67e6f1ed8a280b2035e99aefbe03d3eb7ceacb8d'
});

Package.onUse(function(api) {
  api.use([
    'reactive-var'
  ], 'client');

  api.versionsFrom('METEOR@1.0');

  api.addFiles('background-cordova.js', ['web.cordova']);
  api.export('BackgroundMode', 'client');
});
