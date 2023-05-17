### Overview

This is the base view responsible for mixing in functions for focus management, key handling and providing the main framework. It light enough for use as a component; but not recommended for use in RowLists, Grids and other aggregate views which are expected to have a large amount of view items.

This view is intended to be extended by Components, which in turn are aggregates of views; but not whole screens.

#### BaseView fields

 - `isInitialized` - indicates if `initialize` has yet been called
 - `isShown`, true if the view is on screen
 - `name`, useful for logging
 - `state`, contains the state of the current view `none|initialized|destroyed`

#### BaseView methods

 - `initialize` - must be called to start the view machinery

#### BaseView abstract methods

You can override these methods to safely drive your application behavior

- `applyStyle(styles, localizations, assets)` - will be called when the view is initialized, so it can apply required styles, etc
- `initialize(args)` - called when the view has been initialized
- `onFirstShow` - called the first time a view is shown
- `onShow` - called when a view is shown
  - Note that a view cannot be shown if it is not initialized. This method will be called immediately for a visible view, when `initialize` is invoked
- `onHide` - called when a view is hidden

In addition you can override the methods in KeyMixin:

 -  `isAnyKeyPressLocked()` - returns true if any key press is locked - the default implementation returns the value of `m.isKeyPressLocked`
 -  `isCapturingAnyKeyPress(key)`, return true if the key `key` is captured

Override the following, to return true, if the applicable key is captured

 -  `onKeyPressDown()`
 -  `onKeyPressUp()`
 -  `onKeyPressLeft()`
 -  `onKeyPressRight()`
 -  `onKeyPressBack()`
 -  `onKeyPressOption()`
 -  `onKeyPressOK()`

Also, `BaseView` allows entry points for overriding abstract methods from `FocusMixin`

 - `onGainedFocus(isSelfFocused)`
 - `onLostFocus()`
