# Sample app

If you want a quick look at maestro-roku, you can start with the maestro sample app that will get you running in no time:

 - `git clone git@github.com:georgejecook/maestro-roku.git`
 - `npm install`
 - Update `.env` file with your roku ip and password
 - run the run target `Sample App`
 - Launch the app from the main menu

The sample contains examples of:

 - Project and tooling setup
 - Application architecture
 - Switching screens with Tabcontroller
 - Pushing and popping screens with NavController
 - Node generation for models and views
 - MVVM bindings
 - MVC style coding for controls
 - Unit testing



# Installation in a new or existing project

Maestro-roku comprises the following components:

 - [Core framework](##maestro-roku-ropm-module)
 - [bsc plugin](bsc-plugin.html)


## Maestro-roku ropm module

The maestro framework is installed via [ropm](https://github.com/rokucommunity/ropm) package manager for roku. All sources required for the project are included in the ropm module

You can integrate it into an existing project or try out the sample app:

 - add the following to your `package.json`:
```
    "dependencies": {
        "bslib": "npm:@rokucommunity/bslib@^0.1.1",
        "log": "npm:roku-log@^0.4.1",
        "maestro": "npm:maestro-roku@^0.10.0"
    },
    "ropm": {
      "rootDir": "src",
      "packageRootDir": "dist",
      "noprefix": [
        "maestro"
      ]
    },
```

## Notes
 - ropm package manager requires that only ropm modules are included in you `package.json` `dependencies`
 - Maestro ropm module is pre-namespaced, hence the additional `ropm` settings in `package.json`
 - We install `bslib` and `roku-log` as dependencies

