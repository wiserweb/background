# Hybrid Device 

Cross-platform device information

`meteor add hybrid:device`

## Browser

### Device info
* Device.ua 
* Device.browser
  * name
  * version
  * major
* Device.engine
  * name
  * version
* Device.os
  * name
  * version
* Device.device
  * model
  * type
  * vendor
* Device.cpu
  * architecture

### Template Helpers
```
{{#if isInBrowsers 'Chrome,Firefox'}}
	Special Feature
{{/if}}
```

```
{{#if isInOS 'Mac'}}
	Special Feature
{{/if}}
```

```
{{#if isInEngine 'WebKit'}}
	Special Feature
{{/if}}
```

### Meteor Booleans

#### Browsers
* `Meteor.isChrome`
* `Meteor.isFirefox`

#### Operating Systems
* `Meteor.isMac`

#### Browser Enginers
* `Meteor.isWebKit`

======================

## Cordova

### Device info
* Device.cordova
* Device.model
* Device.platform
* Device.uuid
* Device.version

======================

## TODO
* [ ] Finish Booleans
* [ ] Finish Template Helpers# background
# background
