---
priority: 2
title: Getting Started
---

(Full docs coming soon); but it's pretty much like this:

1. make some content:

```
    function setListContent()
    m.cellSettings = ml.listMixin.createCellSettings("ml_SimpleCell", [480, 320], 30)
    m.rowSettings = ml.listMixin.createRowSettings(m.cellSettings, invalid, 30)
    m.focusSettings = ml.listMixin.createFocusSettings(.5, .1)
    listSettings = ml.listMixin.createListSettings()
    m.list.content = ml.listMixin.createListContent(m.createData(), m.focusSettings, m.rowSettings, listSettings)
    end function

  private function createData()
    content = []
    for i = 0 to m.numberOfRows - 1
      row = createObject("roSGNode", "ml_RowContent")
      row.title = "some title"
      row.appendChildren(m.makeItems(m.defaultCellType, 20))
    end for
  end function
```
2. Respond to delegate events on your list

```
  ml.delegateMixin.setListDelegate(m.list)
```

```
'++ list delegate
  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  private function onCellWillGainFocus(rowIndex as integer, itemIndex as integer, direction as integer)
    ' ? "+SCREEN onCellWillGainFocus : R: "; rowIndex ; " I: " ; itemIndex; " D:" ; direction
  end function

  private function onCellDidGainFocus(rowIndex as integer, itemIndex as integer, direction as integer)
    ' ? "+SCREEN onCellDidGainFocus : R: "; rowIndex ; " I: " ; itemIndex; " D:" ; direction
  end function


  private function onCellDidLoseFocus(rowIndex as integer, itemIndex as integer, direction as integer)
    ' ? "+SCREEN onCellDidLoseFocus : R: "; rowIndex ; " I: " ; itemIndex; " D:" ; direction
  end function

  private function onRowDidGainFocus(rowIndex as integer, direction as integer)
    ' ? "+SCREEN onRowDidGainFocus : R: "; rowIndex ; " D:" ; direction
    row = m.list@.getRowRenderer(rowIndex)
  end function
```
