# Overview
Similar to iOS transitions, maestro *aggregate views* (i.e `TabController`, `NavController`, `DynamicController`), allow developers to have direct control over how views transition to one another.

The mechanism for this is the `BaseTransition` class, which is extended by NodeClasses, to easily create transitions.

## Use

To use a transition, simply set the `transition` property of a `BaseAggregateView` to an instance of a transition. The next time the view's change, maestro will use that object to manage the transition.

## Built in transitions
There are 2 out-of-the-box transitions one can use:

 - SimpleTransition - replaces the previous view with the new view. All `BaseAggregateView` sub classes use this by default
 - FadeTransition - Fades between 2 views, using a given color as the cross fade, with the following properties:
   - `duration`  - controls the duration of the cross fade
   - `size` - controls the size of the fade rectangle
   - `color` - controls the color of the fade rectangle


## Order of events

For child views (i.e. those being managed by the transition), the order of events is:

 - `initialize` - invoked on `targetView`, if not already initialized
 - `onAddedToAggregateView` - invoked on `targetView`
 - `onFirstShow` - invoked on `targetView`
 - `onShow` - invoked on `targetView`
 - `onHide` - invoked on `sourceView` (the old view)
 - `onGainedFocus` - invoked on `targetView` if the owners `isAutoFocusEnabled` is set to true, and it currently has focus
 - `onLostFocus` - invoked on `sourceView` if it had focus and lost it
 - `onRemovedFromAggregateView` - invoked on `sourceView` (the old view)


## Custom transitions

The `BaseTransition` manages the showing and hiding of aggregate container views. It has the following properties:
    - `progress` - the current transition progress from 0 to 1
    - `source` - the source view (currently shown in the aggregate view)
    - `target` - the new view to show
    - `owner` - the aggregate view (e.g. `TabController` / `DynamicContainer`)

One is intended to override the `begin` function, which will:
 -  Manage the animation of the transition
 -  Manage the hiding of the current view
 -  Manage the showing of the new view
 -  Manage any other chrome, etc
 -  Call `m.finish`, when the animation is finished, so that the `BaseTransition` can ensure all the necessary hooks are invoked


### To create a custom transition

1. Create a new *NodeClass* that extends `mv.transitions.BaseTransition`
2. Add fields as necessary
3. Call super on the constructor with your transition name (this set's the loggers name)
4. Override `begin` method
5. Call `m.finish`, when the transition is finished


### Example

```
import "pkg:/source/view/NodeClass.bs"
import "pkg:/source/view/Animation.bs"
import "pkg:/source/core/Utils.bs"
import "pkg:/source/view/transitions/BaseTransition.bs"

namespace mv.transitions
  ' /**
  '  * @module BaseTransition
  '  * @description BaseTransition component. extend this to create other transitions
  '  */
  @node("mv_FadeTransition", "Group")
  class FadeTransition extends mv.transitions.BaseTransition

    public color as string

    public size = [1920, 1080]

    public duration = 2

    private fadeRectangle
    private blackFadeAnim


    function new()
      super("mv_FadeTransition")
    end function

    protected override function begin()
      if m.fadeRectangle = invalid
        m.fadeRectangle = mc.createSGNode("mv_Rectangle", m.owner, "fadeRectangle")
        m.blackFadeAnim = mv.animations.utils.fadeTo(m.fadeRectangle, duration, 1, false)
        m.blackFadeAnim.setKeys([0, 0.5, 1.0], [0.0, 1.0, 0.0])
      end if

      m.blackFadeAnim.onFraction(0.5, function(f)
        if m.source <> invalid and not m.source.isSameNode(m.target)
          m.source.visible = false
          m.owner.removeChild(m.source)
        end if
        m.owner.appendChild(view)
        if m.owner.isShown
          view.visible = true
        end if

      end function, m)

      m.blackFadeAnim.onFraction(1, function(f)
        m.finish()
      end function, m)

      m.fadeRectangle.size = m.top.size
      m.fadeRectangle.color = m.top.color

      m.blackFadeAnim.start()
    end function

  end class
end namespace
```

