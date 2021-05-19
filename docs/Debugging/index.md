---
priority: 1000
title: Overview
---
# Overview

## General debugging tips

### Use RALE

  - Any view subclass, node class, and many other maestro views have a `__debug` flag, which when checked will _dump m, and vm onto the node_. This makes it easy to debug:
    - Properties that are not visible on the node (e.g. in m)
    - The current state of the vm
    - Bindings and observables that are set up
  - The mioc container is stored on the `MaineScene` in the `__mioc` field

### Debugging generated code

  - Generated code is stored in `maestro/components/generated`
  - If you want to delve into the generated code for whatever reason, bare in mind that, it is easy to simply open your build folder in vscode, then check the file, bearing in mind:
    - Maestro generates brs and xml files for NodeClasses and Tasks
    - Maestro generates a codebehind file (.brs) for an xml file, with a vm, if there was no codebehind
    - Maestro injects code into codebehind files (generated, or not), to wire up bindings
    - Maestro injects code into non-vm codebhind file, to create variables for all nodes with ids
    - Maestro removes any xml values from nodes that contained binding information

