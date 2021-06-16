---
priority: 10
title: Mixins
---
# mixins
Maestro mixes in some behavior into BaseView as, as follows:

## FocusMixin

The FocusMixin leverages the `FocusManager` node, to allow you to get accurate callbacks. If you use the `FocusMixin` methods for setting focus, you will be able to more easily debug your applications and have more confidence in the focus state of your app, as everything is encapsulated in a well tested mechanism, with accurate events to allow you to make correct assumptions about your app's state

## Using the FocusMixin/FocusManager

You must initialize the focusManger, by using the `initializeFocusManager`
  method, e.g. `initializeFocusManager(m.global)`. You will typically do this in an app controller.

ALWAYS use the `setFocus` method provided by the `FocusMixin`, so you have a predictable behavior when managing focus.

### FocusMixin methods

- call `mv.setFocus(node)` and never use `node.setFocus(true)` again! :)
- call `mv.setFocusLocked(node, "reason")` to lock focus
- call `mv.setFocusLocked(invalid, "reason")` to unlock focus



### FocusMixin callbacks
  You can override the following methods:

 - `onGainedFocus` called when your control gets the focus
   - the `isSelfFocused` boolean parameter indicates if this control has the focus, or one of it's children has the focus.
 - `onLostFocus` called when a control loses focus.

### If you extend BaseView

  - simply override the methods `onGainedFocus` and `onLostFocus`, they will be called at the appropriate times.

### If you do not extend BaseView
If you do not extend BaseScreen, and want focus callbacks, then:

 - import the FocusMixin into your control
 - initialize your control with `focusMixinInit()`
 - ensure your control has the fields `isFocused` and `isChildFocused`
 i.e.

 ```
     <!-- focus support -->
    <field id="isFocused"  type="boolean" value="false" alwaysNotify="false"/>
    <field id="isChildFocused"  type="boolean" value="false" alwaysNotify="false"/>
 ```

 - override the methods `onGainedFocus` and `onLostFocus`

## KeyMixin

The key mixin provides:

 - simple override-able functions to handle key-presses
 - ability to lock key-presses
 - ability to filter key-presses
 - long press support



### more key docs TBD