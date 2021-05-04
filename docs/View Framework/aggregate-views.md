---
priority: 3
title: Aggregate Views
---
### BaseAggregateView

A special BaseScreen subclass, which manages showing, or hiding views. The `currentView` property informs which view is currently active (i.e. the selected tab, or current view on top of a NavController)

Only one screen is ever visible at a time. A screen's lifecycle methods for focus and visibility will all be managed and can be relied upon for ascertaining the proper state of the screen.


### TabController

BaseAggregateView subclass which allows you to switch various views. The tabController will display a screen which corresponds to the currently selected item. The screen is created lazily, unless it was specified using `addExistingView`

#### TabController fields

 - `menuItems` array of items, which are used to create child screens. The menuItem must have an id, which matches the view passed in with `addExistingView`, or have it's screenType set to the valid type of a `BaseScreen` subclass
 - `currentItem` _readOnly_ the currently selected menuItem

#### TabController functions

 - `addExistingView` - will register the passed in view to be displayed when a menu item with the same id is set as the `currentItem`
 - `getViewForMenuItemContent`
 - `changeCurrentItem` - will set the `currentItem`


### NavController

NavController controls a stack of views stacked one up on the other. When a BaseScreen is added to a NavController it's `navController` field is set to the navController. In addition the lifecycle methods `onAddedToAggregateView` and `onRemovedFromAggregateView` are invoked in accordance with `pop`, `push` and `reset`

#### NavController fields

 - `numberOfViews` _readonly_ number of Views on the stack
 - `isLastViewPopped` _readonly_ true, if the last view is popped, can be observed
 - `isAutoFocusEnabled` if true then pushed views receive focus

### NavController functions

 - `push` - pushes the passed in view onto the stack, and initializes it
 - `pop` - pops current view from the stack
 - `reset` - resets the stack
 - `resetToIndex` - resets the stack to the desired index