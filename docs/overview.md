---
priority: 4
title: Overview
---
# Maestro components

Maestro-roku comprises the following components:

 - [Core framework](##maestro-roku-ropm-module)
 - [bsc plugin](##bsc-plugin)
 - [Optional list component](##maestro-list-ropm-module)


## Maestro-roku ropm module

The maestro framework is installed via [ropm](https://github.com/rokucommunity/ropm) package manager for roku.

### Installation

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

#### Notes
 - ropm package manager requires that only ropm modules are included in you `package.json` `depedencies`
 - Maestro ropm module is pre-namespaced, hence the additional `ropm` settings in `package.json`
 - We install `bslib` and `roku-log` as dependencies

 ##