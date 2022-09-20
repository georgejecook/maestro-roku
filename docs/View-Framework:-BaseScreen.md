### Overview

Extends `BaseView` and adds additional awareness for selections, loading state, if the user is reloading, and contains utility and application level functions. Application functions proxy main application activity such as playing a video, or showing a screen.

#### BaseScreen fields

 - `content` the content that this screen loaded
 - `selection` selection object for the currently selected content
 - `isLoading`
 - `isUserChangePending`
 - `NavController` - reference to the `NavController` this screen belongs to - this is the navController that will be used for `push`, `pop`, and `resetNavController`

#### BaseScreen functions

 - `getTopScreen` - can be used to ask this screen what it considers its top view. This is useful if the screen in turn composes other screens (e.g. via nested NavControllers)
 - `push` - pushes passed in screen to the navController
 - `pop` - pops the current navController screen
 - `resetNavController` - resets the navController - passing in a screen or index, will reset to that screen, or back to that index
 - other utility functions implemented for your app

#### BaseScreen abstract functions

BaseScreen provides the same lifecycle methods as `BaseView`; but also provides

 - `getTopScreen ` - template method used by `getTopScreen`
 - `baseScreenOnShow` - special hook used to overcome needing more `onShow` overrides (SceneGraph has a limit to super method calls)
 - `onUserChange` - called when the user changes, so the view can update itself with the latest data
