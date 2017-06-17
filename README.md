karma-jasmine-precondition
====================

Karma adapter (framework) for jasmine-precondition

It karma adapter for
+ https://github.com/tiagorg/jasmine-precondition

## Installation

Install the plugin from npm:

```sh
$ npm install karma-jasmine-precondition
```

## Usage
karma will autoload all plugins, whose name start with `karma-`, you can import karma-jasmine-precondition plugins manually. Please refer to http://karma-runner.github.io/0.12/config/plugins.htmt for more details. 

```js
// karma.conf.js
module.exports = function(config) {
  config.set({

      frameworks: ['jasmine-precondition', 'jasmine']
      //...
   })
}
```

## Inspiration

Project structure inspired on https://github.com/bessdsv/karma-jasmine-jquery - Thanks https://github.com/bessdsv !