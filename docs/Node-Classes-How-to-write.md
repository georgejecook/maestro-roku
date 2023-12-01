## How to write a node class

To write a node class, simply
 - add the `@node("ComponentName", "BaseComponent")` to your class
 - all public class fields will become component interface fields (i.e declared with `<field id=`)
 - all public class method will become component interface functions (i.e declared with `<func name=`)

## field annotations

The following annotations can be applied to public fields
- `@lazy` - when applied to the node class will defer instantiation of the class - this can garner great performance benefits
- `@observer("callbackfunction")` - will wire up an observe that calls _callbackfunction_, passing the value
- `@observerswaitinitialize` - will wait for the class model to be initialized before wiring up observers, allowing you to avoid timing issues
- `@debounce` - allows multiple fields to fire the same observer. in this case the value is not passed
- `@alwaysNotify` - same as the SG field value


### node class example
Here is an example of a node class control:

```
import "pkg:/source/roku_modules/maestro/view/BaseView.brs"
import "pkg:/source/roku_modules/maestro/core/Utils.brs"

@awaitInitialize
@node("ProgressBar", "Group")
class ProgressBar
  'view components
  private bottomRect
  private topRect

  'public api
  @observer("onProgressChange")
  public progress = 0.0

  @observer("onSizeChange")
  public size = [0, 0]

  @observer("onStyleChange")
  public style as roAssociativeArray

  @observer("onIsHighlightedChange")
  @alwaysNotify
  public isHighlighted = false

  function new()
    m.bottomRect = mc.createSGNode("mv_Rectangle", m.top, "bottomRect")
    m.topRect = mc.createSGNode("mv_Rectangle", m.top, "topRect")
  end function

  function onProgressChange(value) as void
    if m.style = invalid or m.topRect = invalid
      return
    end if
    m.topRect.width = m.top.size[0] * mc.clamp(value, 0.0, 1.0)
  end function

  function onSizeChange(value) as void
    if m.style = invalid or m.topRect = invalid
      return
    end if
    m.bottomRect.size = value
    m.topRect.height = value[1]
    m.onProgressChange(m.progress)
  end function

  function onStyleChange(value)
    m.top.setFields(value)
    m.onIsHighlightedChange(m.isHighlighted)
  end function

  function onIsHighlightedChange(value) as void
    if value
      m.topRect.style = m.style.topRect.focused
      m.bottomRect.style = m.style.bottomRect.focused
    else
      m.topRect.style = m.style.topRect.normal
      m.bottomRect.style = m.style.bottomRect.normal
    end if
  end function
end class
```
