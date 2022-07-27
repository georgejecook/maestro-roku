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

I believe that experienced developers from android, ios, c#, web, node, etc, should be able to be productive on a roku app in no more than a week, just as they would on any other platform. So I wrote maestro to make that possible.

## Maestro is built to:

 - Raise velocity
 - Increase productivity
 - Reduce learning
 - Simply cross-skilling
 - Make roku development more fun
 - Produce roku apps that can be maintained by non roku developer
 - Produce roku apps that can be unit tested easily
 - Write code that can be tested and breakpoint debugged, outside of SG views (which are slow as hell, and prone to crashing when breakpoint debugging)


## Maestro is easy to use:

 - Delivered as ropm module for easy installation
 - Has sample app, which is ready to roll for production ready roku apps

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
  - other clients (names pending permission ;) )

# Contributing:

 - Please feel free to raise issues with features/bug reports
 - And feel free to submit prs
 - Or reach out to me on the roku-slack channel

## Table of Contents
* [About](/docs/1.%20About/index.md)
   - [Getting started](/docs/1.%20About/start.md)
   - [Bsc plugin](/docs/1.%20About/bsc-plugin.md)
   - [Justification](/docs/1.%20About/justification.md)
* [Utils](/docs/2.%20Utils/index.md)
   - [mc (maestro core utils)](/docs/2.%20Utils/mc.md)
   - [mc.Tasks](/docs/2.%20Utils/mc.tasks.md)
   - [mc.Serialization](/docs/2.%20Utils/mc.utils.Serialization.md)
   - [mc.Collections](/docs/2.%20Utils/mc.utils.Collections.md)
* [Node Classes](/docs/3.%20Node%20Classes/index.md)
   - [Testing](/docs/3.%20Node%20Classes/testing.md)
   - [Config](/docs/3.%20Node%20Classes/config.md)
   - [How to write](/docs/3.%20Node%20Classes/how-to-write.md)
   - [Implementation](/docs/3.%20Node%20Classes/implemenation.md)
   - [Node task](/docs/3.%20Node%20Classes/node-task.md)
* [View Framework](/docs/4.%20View%20Framework/index.md)
   - [BaseScreen](/docs/4.%20View%20Framework/base-screen.md)
   - [BaseView](/docs/4.%20View%20Framework/base-view.md)
   - [Aggregate Views](/docs/4.%20View%20Framework/aggregate-views.md)
   - [View Transitions](/docs/4.%20View%20Framework/view-transitions.md)
   - [Component lifecycle](/docs/4.%20View%20Framework/component-lifecycle.md)
   - [Mixins](/docs/4.%20View%20Framework/mixins.md)
   - [Styles and Bundles](#styles-and-bundles)
* [MVVM Framework](/docs/5.%20MVVM%20Framework/index.md)
   - [Observables and ViewModels](/docs/5.%20MVVM%20Framework/observables-and-vms.md)
  - [XML binding syntax](/docs/5.%20MVVM%20Framework/xml-bindings.md)
* [IOC Framework](/docs/6.%20IOC%20Framework/index.md)
* [More maestro goodness](/docs/7.%20More%20maestro%20goodness/index.md)
* [List Component](/docs/8.%20List%20Component/index.md)
   - [Sample](/docs/8.%20List%20Component/sample.md)
  - [Getting started](/docs/8.%20List%20Component/getting-started.md)
  - [Callbacks](/docs/8.%20List%20Component/callbacks.md)
  - [CustomCells](/docs/8.%20List%20Component/custom-cells.md)
* [Debugging](/docs/9.%20Debugging/index.md)
