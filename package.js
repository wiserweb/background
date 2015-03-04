Package.describe({
  name: 'hybrid:background',
  summary: 'Allows Cordova apps to continue running in the background',
  version: '1.0.0',
  git: 'https://github.com/meteorhybrid/background'
});

Cordova.depends({
  'de.appplant.cordova.plugin.background-mode':'0.6.3'
});

Package.onUse(function(api) {
  api.use([
    'reactive-var'
  ], 'client');

  api.versionsFrom('METEOR@1.0');

  api.addFiles('background-cordova.js', ['web.cordova']);
  api.export('BackgroundMode', 'client');
});
