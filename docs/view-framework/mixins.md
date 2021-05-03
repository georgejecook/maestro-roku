---
priority: 0
title: Overview
---
## View framework

The View framework allows us to generate Roku screens and components, which have a known lifecycle. If you've done much Roku dev, you know how little of a framework exists for reasoning about a view's lifecycle events, such as being shown, getting focus, keys, etc. The Base view classes allow us to simply override abstract functions to seamlessly get lifecycle hooks for:

 - instantiation and destruction
 - adding to and removal from container views
 - showing and hiding
 - key presses
 - focusing of views, or their children

In addition the view framework contains many base classes that can be used

## Mixins

Maestro makes use of many different mixin classes, which handle different aspects of view management (e.g. utils, focus, key handling), and then bundles these together in base classes (views and screens).

Aggregate views for tab (i.e. iOS style TabController navigation) and stack (i.e. iOS style NavController navigation) are provided