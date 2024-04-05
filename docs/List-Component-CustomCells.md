## Creating custom cells

Creating custom cells with maestro list is very easy:

1. Create a _node class_ that `ml_BaseCell`

2. Override the following functions
| Function          | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `createViews`     | Implement to create your views by instantiating, them in code, or from json |
| `onContentChange` | Implement to configure your cell with the passed in `content`               |

1. (optional) Implement any of the delegate callback functions, to further tailor your cell's behavior.

*Note about content updates*

For efficiency, maestro list does not automatically call `onContentChange` for changes on the content's _fields_ - it is only called when the content itself is changed.
If you need to redraw when a subfield of the content changes, then you should observe the values you require to trigger your updates, directly.

### Example, simple custom cell

```
import "pkg:/source/ml/cells/BaseCell.bs"

@node("SimpleCell", "ml_BaseCell")
class SimpleCell extends ml.BaseCell

  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  '++ Views
  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  private poster
  private rectangle
  private label

  private posterSize = [307.0, 100.0]

  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  '++ Overridden Methods
  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  protected override function createViews() as void
    bundle = m.styleManager@.loadBundle("pkg:/source/cells/SimpleCell.bundle")
    m.createViewsFromStyleJson(bundle.views)
  end function

  protected override function onContentChange(content as roSGnode)
    m.label.text = content.title
    m.poster.uri = content.HDGRIDPOSTERURL
    m.label.visible = true
  end function

```

### Example, simple custom cell, with callbacks


```
import "pkg:/source/ml/cells/BaseCell.bs"

@node("SimpleCell", "ml_BaseCell")
class SimpleCell extends ml.BaseCell

  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  '++ Views
  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  private poster as roSGnode
  private rectangle as roSGnode
  private label as roSGnode

  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  '++ Private Fields
  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  private styles as roAssociativeArray

  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  '++ Overridden Methods
  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  protected override function createViews() as void
    bundle = m.styleManager@.loadBundle("pkg:/source/cells/SimpleCell.bundle")
    m.styles = bundle.styles
    m.createViewsFromStyleJson(bundle.views)
  end function

  protected override function onContentChange(content as roSGnode)
    m.label.text = content.title
    m.poster.uri = content.HDGRIDPOSTERURL
    m.label.visible = true
  end function

  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  '++ Private Methods
  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  private function toggleHighlighted(highlighted)
    if highlighted
      m.updateViewsWithStyleJson(m.styles.normal)
    else
      m.updateViewsWithStyleJson(m.styles.highlighted)
    end if
  end function

  private function setScale(fraction as float, isGaining as boolean) as void
    if isGaining
      m.scale = (fraction + 0.3)
    else
      m.scale = (1 - fraction) + 0.3
    end if
    m.scale = m.scale * 0.8
    m.poster.width = m.posterSize[0] * m.scale
    m.poster.height = m.posterSize[1] * m.scale

    if isGaining
      m.poster.opacity = 0.3 + fraction
    else
      m.poster.opacity = 0.3 + (1 - fraction)
    end if
  end function


  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  '++ Delegate Methods
  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  private function onScrollingChange(isScrolling as boolean, isLong as boolean)
    m.label.visible = not isScrolling
  end function

  private function onScrollingUpdate(startIndex as integer, currentIndex as integer)
    textVisible = abs(startIndex - currentIndex) < 4
    m.label.visible = textVisible
  end function

  private function onWillExit(direction as integer)
  end function

  private function onWillEnter(direction as integer)
    m.toggleHighlighted(false)
  end function

  private function onDidExit(direction as integer)
    m.toggleHighlighted(true)
  end function

  private function onWillLoseFocus(direction as integer)
    m.toggleHighlighted(false)
  end function

  private function onDidGainFocus(direction as integer)
    m.setScale(1, true)
    m.toggleHighlighted(true)
  end function

  private function onDidLoseFocus(direction as integer)
    m.setScale(1, false)
    m.toggleHighlighted(false)
  end function

  private function onGainingFocus(direction as integer, fraction as float)
    m.setScale(fraction, true)
  end function

  private function onLosingFocus(direction as integer, fraction as float)
    m.setScale(fraction, false)
  end function
end class
```