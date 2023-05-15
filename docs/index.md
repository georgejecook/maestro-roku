---
priority: 0
title: Maestro-roku
---

## A development platform for building roku channels in brighterscript.


[![build](https://img.shields.io/github/workflow/status/georgejecook/maestro-roku/build.svg?logo=github)](https://github.com/georgejecook/maestro-roku/actions?query=workflow%3Abuild)
[![GitHub](https://img.shields.io/github/release/georgejecook/maestro-roku.svg?style=flat-square)](https://github.com/georgejecook/maestro-roku/releases)
[![NPM Version](https://badge.fury.io/js/maestro-roku.svg?style=flat)](https://npmjs.org/package/maestro-roku)


## Why maestro?

### Maestro Makes roku development easier, especially for experienced software engineers from other platforms:

Experienced developers from android, ios, c#, web, node, etc, will be able to be productive on a maestro roku app in no more than a week, just as they would on any other platform.

## Maestro is built to:

 - Raise velocity
 - Increase productivity
 - Reduce learning
 - Simply cross-skilling
 - Make roku development more fun
 - Produce roku apps that can be maintained by non roku developer
 - Produce roku apps that can be unit tested easily
 - Write code that can be tested and breakpoint debugged, outside of SG views (which are slow as hell, and prone to crashing when breakpoint debugging)


## Maestro is easy to use and powerful:

 - Delivered as ropm module for easy installation
 - Has sample app, which is ready to roll for production ready roku apps
 - Has a transpiler plugin which adds additional language comfort

## Maestro is aligned with community best practices and tools

 - Uses ropm
 - Written in [brighterscript](https://github.com/rokucommunity/brighterscript)
 - Uses brighterscript plugins for compile time and IDE diagnostics
 - No need for complex build scripts or bespoke build processes (like bash/gulp etc); maestro apps can run simply by executing `bsc`  (brighterscript compiler)


## Maestro is performant

 - Runs great on all roku devices
 - Maestro apps launch quick and are snappy

## Maestro is installed on millions of devices

Been in production for > 2 years at:

  - applicaster, and their various clients
  - smithsonian
  - corco
  - NBA

# Contributing:

 - Please feel free to raise issues with features/bug reports
 - And feel free to submit prs
 - Or reach out to me on the roku-slack channel

## Table of Contents
* [About](/docs/About.md)
   - [Getting started](/docs/About-Getting-started.md)
   - [Bsc plugin](/docs/About-Bsc-plugin.md)
   - [Justification](/docs/About-Justification.md)
* [Utils](/docs/Utils.md)
   - [mc (maestro core utils)](/docs/Utils-mc-maestro-core-utils.md)
   - [mc.Tasks](/docs/Utils-mc.tasks-maestro-core-tasks.md)
   - [mc.Serialization](/docs/Utils-mc.utils.Serialization.md)
   - [mc.Collections](/docs/Utils-mc.utils.Collections.md)
* [Node Classes](/docs/Node-Classes.md)
   - [Testing](/docs/Node-Classes-Testing.md)
   - [Config](/docs/Node-Classes-Config.md)
   - [How to write](/docs/Node-Classes-How-to-write.md)
   - [Implementation](/docs/Node-Classes-Implementation.md)
   - [Node task](/docs/Node-Classes-Node-task.md)
* [View Framework](/docs/View-Framework.md)
   - [BaseScreen](/docs/View-Framework-BaseScreen.md)
   - [BaseView](/docs/View-Framework-BaseView.md)
   - [Aggregate Views](/docs/View-Framework-Aggregate-Views.md)
   - [View Transitions](/docs/View-Framework-View-Transitions.md)
   - [Component lifecycle](/docs/View-Framework-Component-lifecycle.md)
   - [Mixins](/docs/View-Framework-Mixins.md)
   - [Styles and Bundles](/docs/View-Framework-Styles-and-Bundles.md)
* [MVVM Framework](/docs/MVVM-Framework.md)
   - [Observables and ViewModels](/docs/MVVM-Framework-Observables-and-ViewModels.md)
  - [XML binding syntax](/docs/MVVM-Framework-XML-binding-syntax.md)
* [IOC Framework](/docs/IOC-Framework.md)
* [More maestro goodness](/docs/More-maestro-goodness.md)
* [List Component](/docs/List-Component.md)
   - [Sample](/docs/List-Component-Sample.md)
  - [Getting started](/docs/About-Getting-started.md)
  - [Callbacks](/docs/List-Component-Callbacks.md)
  - [CustomCells](/docs/List-Component-CustomCells.md)
* [Command Sequences and controlling application launch] (/docs/command-and-launch.md)
* [Debugging](/docs/Debugging.md)
* [API documentation](/docs/API-Docs.md)
