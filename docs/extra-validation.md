---
priority: 1040
title: Extra validation
---

## @strict mode
Brighterscript has many diagnostics for writing code, and a wip type system which will greatly improve feedback for coding errors due to mistyped/incorrect variable names/mismatched method invocations.

This feature is in progress and will be merged with brighterscript sometime 2021Q2

In the interim, you can use the `@strict` annotation on your classes, to enforce the following validations:

 - all `m.member` references must be an actual member of m or it's parents
 - any `something.member` reference must be a class function that is in scope
 - the params in a method invocation must match the min and max extremes of any matching function in scope

The `@strict` annotation is applied to all subclasses once used. It is already on `BaseCell`, `BaseObservable`, `NodeClass`, and `BaseClass`, so all of their subclasses have strict mode enabled
