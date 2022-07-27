---
priority: 1040
title: Overview
---

# Overview

Here are more maestro goodies that are not yet fully documented; but you may wish to know about:

## @strict mode
Brighterscript has many diagnostics for writing code, and a wip type system which will greatly improve feedback for coding errors due to mistyped/incorrect variable names/mismatched method invocations. This feature is in progress and will be merged with brighterscript sometime 2021Q3

In the interim, you can use the `@strict` annotation on your classes, to enforce the following validations:

 - all `m.member` references must be an actual member of m or it's parents
 - any `something.member` reference must be a class function that is in scope
 - the params in a method invocation must match the min and max extremes of any matching function in scope

The `@strict` annotation is applied to all subclasses once used. It is already on `BaseCell`, `BaseObservable`, `NodeClass`, and `BaseClass`, so all of their subclasses have strict mode enabled


## Build time imports

Maestro supports a special import type of `build:key` e.g. `import "build:IAnalyticsManagers`

This allows a file to swap specify which imports to use at build time, to facilitate dynamic imports.

e.g. if your build has a certain set of analytics plugins, you might configure that in your build system and update the `bsconfig.json`, `maestro.buildTimeImports` setting to be:

```
{
  maestro:{
    buildTimeimports: {
      "IAnalyticsManagers": ["pkg:/source/SuperAnalytics.bs", "pkg:/source/googleAnalytics.bs"]
    }
  }
}
```

Maestro will automatically change all `import "build:IAnalyticsManagers` in any of your files to be:

```
import "pkg:/source/SuperAnalytics.bs"
import "pkg:/source/googleAnalytics.bs"
```