---
priority: 1
title: mc.tasks (maestro task utils)
---

# Overview

To save on boilerplate code, and improve navigatability in the ide, maestro provides wrappers that allow for easy creation of observers, which take function pointers, instead of strings, and will automatically call back with the node, value, node and value, or nothing, depending the `sendMode`

### Delaying execution

- `waitAFrame(callback, duration = 0.01, sendMode = "none", scope = invalid)` - returns a wait timer, and will invoke callback when the timer completes
- `cancelWaitTimer(timer)` - cancel a previously set wait timer

## Tasks

- `createTask(taskType, fields, callback = invalid, isRunning = true, sendMode = "value", scope = invalid, fieldName = "output")` - create a task, set the fields, run and wire up the callback
- `cancelTask(task)` - cancel a task created with `createTask`

## Observers

- `observeNodeField(node, fieldName, callback, sendMode = "value", once = false, scope = invalid)` - observes the field, and wires up the callback
- `unobserveNodeField(node, fieldName, callback, scope = invalid)` - unobserve an observed field
- `cleanNodeObserver(node, fieldName)` - clean node observes
- `cleanScope()` - clean the entire scope (used internally)

## Value Observing

Many times we want to observe a specific value on an observer, to achieve this we use the `ValueObserver` utility class. This class allows us to execute code, when a certain value comparator condition is met. A value comparator can be:

 - `=` value is the same
 - `>` value is greater
 - `>=` value is greater or equal
 - `<` value is less
 - `<=` value is less or equal
 - `<>` value is not equal

The ValueObserver takes a constructor of:
 - target - node to observe
 - fieldName
 - scope - the m of whatever functions will be called on

To add observers, invoke `onValue`, with the target value, callback function and comparator:

e.g.

````
    function onFraction(fraction, func, scope)
      if m.fractionValueObserver = invalid
        m.fractionValueObserver = new mc.tasks.ValueObserver(m.interpolator, "fraction", scope)
      end if
      m.fractionValueObserver.onValue(fraction, func, ">=")
    end function
````

## Delayed tasks

As a convenience, you can create a `DelayedTaskManager` which makes it trivial to do things like schedule a refresh token task.

Use the functions

- `scheduleDelayedTask(nodeType, id, delay, fields, resultField = "output")` - schedule a task to execute after delay seconds
- `cancelDelayedTaskWithId(id)` - cancel a previously scheduled task

###

Example use:

In your ioc setup:
```
      delayedTaskManager = m.createSGNode("mc_delayedTaskManager", invalid, "delayedTaskManager")
      m.setInstance("delayedTaskManager", delayedTaskManager)
```

Then, when scheduling refreshing an auth token, with an `AuthTask`, something like:

```
    @inject("delayedTaskManager")
    private delayedTaskManager as mc.types.node

    protected function setRefreshTimer()
      delayedTaskManager@.scheduleDelayedTask("AuthTask", "refreshTask", 300, { "command": "refresh" })
    end function
```
