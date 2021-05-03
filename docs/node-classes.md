---
priority: 1050
title: Node classes
---
# Node classes

Maestro exists to save you writing error prone boilerplate code.
For this reason it allows the creation of node classes, which are annotations you can add to a class, which will automatically generate xml and brs code for you, allowing:

 - desginating class fields
 - designating class functions
 - assigning observers
 - extending other classes and components
 - creating tasks with just one function

## Why? Why not use MVVM pattern?

_If all you have is a hammer then everything is a nail_. Some tasks and components are not a good fit for MVVM pattern, it makes more sense to use MVC, for a Button, for example. And tasks are more convenient to write as one function.

## Brighterscript nodeclass support

Eventually, nodeclasses will be part of brighterscript. However, maestro gives you this feature today so you can get super productive. Later on when bs support is added, it will be easy to simply remove the annotations and off you go!

## Node classes are test friendly!

Node classes make it easy for you to write unit tests, which run quickly and predictably. All of the logic for your tasks and views/components/screens is a simple class in the source folder, which can be run in rooibos tests, and have it's method stubbed and mocked.

## Node classes give more diagnostics

Due to being classes in nature, the compiler has more information and can give better inline feedback.

### How to write a node class

To write a node class, simply
 - add the `@node("ComponentName", "BaseComponent")` to your class
 - all public class fields will become component interface fields (i.e delcared with `<field id=`)
 - all public class method will become component interface functins (i.e delcared with `<func name=`)

### Additional annotations

In addition you can apply the following extra annotations
- `@lazy` - when applied to the node class will defer instantiation of the class - this can garner great performance benefits
- `@observer("callbackfunction")` - will wire up an observe that calls _callbackfunction_, passing the value
- `@observerswaitinitialize` - will wait for the class model to be initialized before wiring up observers, allowing you to avoid timing issues
- `@debounce` - allows multiple fields to fire the same observer. in this case the value is not passed
- `@alwaysNotify` - same as the SG field value


#### node class example
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
  public style as mc.types.AssocArray

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

#### node task example

- Simple use the `@task` annotation
- implement the `execute(args)` method
- return an aa with `{isOK: boolean, data: data, message: "if an error occurred"}`

```
import "pkg:/source/core/Request.bs"
import "pkg:/source/roku_modules/log/LogMixin.brs"
import "pkg:/source/core/Utils.bs"
import "pkg:/source/core/Registry.bs"
import "pkg:/source/core/AssetBundle.bs"

namespace mc
  @strict
  @task("mc_AssetBundleTask", "Task")
  class AssetBundleTask
    private log
    private baseBundleUrl
    private bundleId
    private registry
    private request

    private url = ""

    function new()
      m.log = new log.Logger("ImageRequestTask")
    end function

    private function execute(args)
      m.bundleId = args.bundleId
      m.baseBundleUrl = args.baseBundleUrl

      m.registry = new mc.Registry()
      m.request = m.makeRequest()
      ...
      return {
        isOK: true
        data: data
      }

```
