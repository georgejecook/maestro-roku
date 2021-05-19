---
priority: 3
title: Aggregate Views
---

# Overview

Sadly, roku SceneGraph has a very limited view architecture. If you come from iOS, Android, or angular, you may be wondering how to know if a view/screen:

- Was first shown
- Shown
- Hidden
- Added to another aggregate container
- Removed from an aggregate container
- Got focus
- Had a child receive focus
- Lost focus

In addition to affording these lifecycle events, maestro also provides familiar *aggregate views*, to allow composing screens together.

## BaseAggregateView

A special BaseScreen subclass, which manages showing, or hiding views. The `currentView` property informs which view is currently active (i.e. the selected tab, or current view on top of a NavController)

Only one screen is ever visible at a time. A screen's lifecycle methods for focus and visibility will all be managed and can be relied upon for ascertaining the proper state of the screen.

## TabController

BaseAggregateView subclass which allows you to switch various views. The tabController will display a screen which corresponds to the currently selected item. The screen is created lazily, unless it was specified using `addExistingView`

### TabController fields

 - `menuItems` array of items, which are used to create child screens. The menuItem must have an id, which matches the view passed in with `addExistingView`, or have it's screenType set to the valid type of a `BaseScreen` subclass
 - `currentItem` _readOnly_ the currently selected menuItem

### TabController functions

 - `addExistingView` - will register the passed in view to be displayed when a menu item with the same id is set as the `currentItem`
 - `getViewForMenuItemContent`
 - `changeCurrentItem` - will set the `currentItem`


## NavController

NavController controls a stack of views stacked one up on the other. When a BaseScreen is added to a NavController it's `navController` field is set to the navController. In addition the lifecycle methods `onAddedToAggregateView` and `onRemovedFromAggregateView` are invoked in accordance with `pop`, `push` and `reset`

### NavController fields

 - `numberOfViews` _readonly_ number of Views on the stack
 - `isLastViewPopped` _readonly_ true, if the last view is popped, can be observed
 - `isAutoFocusEnabled` if true then pushed views receive focus

## NavController functions

 - `push` - pushes the passed in view onto the stack, and initializes it
 - `pop` - pops current view from the stack
 - `reset` - resets the stack
 - `resetToIndex` - resets the stack to the desired index

## DynamicContainer

DynamicContainer is analogue to iOS's container view. It affords the embedding of screens, within screens. This is useful for:

 - Tab switchers
 - Sub views (e.g. placing a *faux* dialog on top of a screen)
 - Embedding a forgot password screen inside of another screen

It has one method `SetNextView`, which will set the current view on the container. Note, you can bind directly to this, in mvvm bindings, as maestro knows how to call node functions.