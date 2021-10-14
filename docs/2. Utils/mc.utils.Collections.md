---
priority: 3
title: mc.utils.Collections
---

# Overview

Maestro contains utility functions to aid with working with collections, and node wrappers for certain types of common collections.

## Functions

### mapArray

Takes a raw array, and runs it through the mc.Collections.BaseMapper subclass (i.e. CallFuncMapper, FuncMapper, FieldMapper, your own Mapper), returning the result.

## getSortedArrayByKey

Sorts the given array by key name.

## getItemAtOffset

Ascertains the index of the given item, in the passed in array, and returns whatever item is found offset from that index. By default, will use `id` field to compare objects; but the key can be specified.

## getArrayIndex

Ascertains the index of the given item, in the passed in array. By default, will use `id` field to compare objects; but the key can be specified.

## filterArray

Returns the filtered array using a filterPredicate. The filterPredicate can be either a function (taking one item as the argument), or a mc.Collections.AbstractPredicate subclass (i.e. ValuePredicate, FuncPredicate, CallFuncPredicate, or your own predicate)

## arrayContains

Returns true if the array contains the passed in value. By default, will use `id` field to compare objects; but the key can be specified.

# Wrapped types

Associative arrays and arrays are copied whenever they are assigned to nodes. This can be expensive computationally, and undesirable. Maestro offers a solution to this with the following nodes:

 - mc_Map - a node wrapper for AssociativeArray
 - mc_Array - a node wrapper for Array

## mc_Map

Has the following api
 - clear()
 - remove(key)
 - set(key, value)
 - append({}) - appends a dictionary
 - get(key)
 - hasKey(key)
 - getAA() - returns a raw dictionary copy
 - getValues() - returns an array of this map's values
 - getKeys() - returns an array of this map's keys

### Serialization support

The mc_Map supports maestro serialization, and can therefore be used in the registry's `writeSerializable` and `readSerializable` as well as `mc.utils.Serializable` methods.

### Debugging

You can see the stored values of the collection in RALE by checking the `_debug` value, which will dump the current values to the `__contents` field

## mc_Array

Has the following api
 - clear()
 - remove(item)
 - push(item)
 - append([]) - appends an array
 - get(index)
 - getIndex(item, key = invalid) - gets index of item, the string key can be used to direct the comparison
 - hasItem(index, key = invalid) - returns true if the item is present, the string key can be used to direct the comparison
 - getValues() - returns a raw array copy

### Serialization support

The mc_Array supports maestro serialization, and can therefore be used in the registry's `writeSerializable` and `readSerializable` as well as `mc.utils.Serializable` methods.

### Debugging

You can see the stored values of the collection in RALE by checking the `_debug` value, which will dump the current values to the `__contents` field