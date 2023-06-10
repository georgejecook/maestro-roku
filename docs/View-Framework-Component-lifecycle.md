## Overview

To make development easier, and remove boilerplate, a lifecycle is provided, so that all views and screens can override a few methods to get accurate access to their perceived state on screen. the lifecycle methods are invoked as follows:

 - `initialize` - invoked once, when `_initializeView` is called for the view, or the view is created by a TabController, or added to a NavController
 - `onFirstShow` - invoked once, when the view first becomes visible
 - `onShow` - can be invoked multiple times
 - `onHide` - can be invoked multiple times
 - `onGainedFocus` - called whenever the view or one of it's children gains focus
 - `onLostFocus` - called whenever the view loses focus
 - `onAddedToAggregateView(aggregateView)` - this view was added to an aggregate view
 - `onRemovedFromAggregateView(aggregateView)` - this view was removed to an aggregate view
