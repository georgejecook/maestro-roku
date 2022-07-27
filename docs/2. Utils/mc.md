---
priority: 0
title: mc (maestro core utils)
---

## Checking types

- `isUndefined(value)`
- `isInvalid(value)`
- `isArray(value)`
- `isAACompatible(value)`
- `isString(value)`
- `isBoolean(value)`
- `isFunction(value)`
- `isInteger(value)`
- `isNumber(value)`
- `isFloat(value)`
- `isPoint(value)`

## Equality

- `isPointEqual(value, otherValue)`

## Debugging

- `dv(view)` - for debugging. Returns a view's type and id

## Function invocation

- `callAAFunc(target, funcName, p1 = "#M_NONE#", p2 = "#M_NONE#", p3 = "#M_NONE#")` - invokes the aa function funcName on target
- `apply(func, args = [], target = invalid), func)` - similar to js apply

## Object utilities

- `getPath(content, field, default = invalid, disableIndexing = false)` - safely gets the value from an object, at the given path
- `setPath(content, field, value = invalid)` - safely sets a value on object, at the given path
- `removeDuplicateKeys(aa = invalid, otherAA = invalid)`
- `setOrAddNodeField(node, field, value = invalid)`
- `setNodeAAValue(node, field, key, value = invalid)`
- `setNodeArrayValue(node, field, index, value = invalid)`
- `setOrAddNodeFields(node, fields)`
- `getChildAtDepth(node, depth)`
- `createSGNode(nodeType, parent = invalid, id = invalid, args = invalid, isCallingInitialize = true)` - create an `roSGNode` subclass of nodeType. Will automatically call initialize, and set the args
- `createNode(nodeType)` - create any type of roku node
- `getFunctionName(value)`

## Conversions

- `strToBool(s)`
- `strToInt(s)`
- `strToLong(value)`

## General

- `getIndexOfItem(parent, item)`
- `toggleObserver(target, field, callbackName = invalid)`
- `clamp(number, low, high, wrap = false)`

## Access utils
- `getMField(fieldName)` - get a field on the top node's m - useful for vm classes
- `getGlobal()` - get global on the top node's m - useful for vm classes
- `getTop()` - get top on this node - useful for vm classes
- `getScene()` - get scene on this node - useful for vm classes
