---
priority: 2
title: XML binding syntax
---
# XML binding syntax

## Overview

Writing bindings and observers is cumbersome, and requires us to mix view and business logic, with boilerplate code.

Maestro allows us to follow MVVM pattern, which in turn means less time spent guessing how things end up in our view : We can see in the xml exactly where field values come from, and what field values will end up doing to our view models.

Here is an example of some bindings in Maestro:

![vm bindings](vm.png "Typical bindings")

In each of the following examples we can see how we use special binding expressions inside the values of our fields.

When maestro-cli encounters these values it will automatically wire up the code (via the helpers in the previous section) to create the binding.

### Indicating binding mode

The bracket type indicates the binding mode:

 - `nodeAttribute='{{field}}'` - sets node.nodeAttribute to vm.field when vm.field changes
 - `nodeAttribute='{(field)}'` - bound vm field: sets vm.field to node.nodeAttribute, when node.nodeAttribute changes
 - `nodeAttribute='{(callback())}'` - event: calls vm.callback(), when node.nodeAttribute changes
 - `nodeAttribute='{(callback(value))}'` - event with value: calls vm.callback(value), when node.nodeAttribute changes
 - `nodeAttribute='{(callback(node))}'` - event with node: calls vm.callback(node), when node.nodeAttribute changes
 - `nodeAttribute='{(callback(value,node))}'` - event with value and node: calls vm.callback(value,node), when node.nodeAttribute changes
 - `nodeAttribute='{[field|callback(value)]}'` - twoWay binding: sets node.attributeField to vm.field when vm.field changes and calls the callback when node.node.attribute changes

# Binding targets
Bindings can be set on any attribute of any node *that has an id* and on any field in the components interface

### Binding arguments

a binding is as follows:

`{{name:arg1,arg2, ...}`

 - `name`, the name of the field on the observable. If this is _oneWayTarget_ binding, then you can provide a function name, and even function `()` brackets
 - `args` are as follows, and all are optional:
   - `eager` - will set the bound value when the vm bindings are configured
   - `lazy` - will not set the bound value when the vm bindings are configured (default)
   - `transform=functionName` - where _functionName_ of a function *which must be in scope* which transform ths bound field. See `mx.transform_invertBoolean` for a sample implementation. This is good for allowing us to do view specific transformations without needing multiple vm fields,
   - `once` - will destroy the binding as soon as a value is set (e.g. fire and forget)
