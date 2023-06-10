## Overview

The View framework allows us to generate Roku screens and components, which have a known lifecycle. If you've done much Roku dev, you know how little of a framework exists for reasoning about a view's lifecycle events, such as being shown, getting focus, keys, etc. The Base view classes allow us to simply override abstract functions to seamlessly get lifecycle hooks for:

- instantiation and destruction
- adding to and removal from container views
- showing and hiding
- key presses
- focusing of views, or their children

In addition the view framework contains many base classes that can be used

## Mixins

Maestro makes use of many different mixin classes, which handle different aspects of view management (e.g. utils, focus, key handling), and then bundles these together in base classes (views and screens).

Aggregate views for tab (i.e. iOS style TabController navigation) and stack (i.e. iOS style NavController navigation) are provided


## Fragments and json support

in Maestro framework, we predominantly build our views and screens from json. Why?

- It's generally quicker to work with than the xml
- Easy to export from figma
- Easy to import form apis/CMS
- Easy to write inline
- Gives better performance control, as one can defer view instantion.


Maestro has several methods for building views in this manner, all available on BaseView. These methods allow for view creation, and automatically creating field pointers to the created views, and can even automatically bind views.

An example of creating a fragment.


```
 @it("creates a view fragment, with children, with bindings, and works multiple times")
    function _()
      json = {
        "_type": "Rectangle"
        "id": "v1"
        "height": "${json.height}"
        "_children": [
          {
            "_type": "mv_Label"
            "id": "v2"
            "text": "${json.item1.a}"
          }
          {
            "_type": "mv_Label"
            "id": "v3"
            "text": "${json.item2.subItem.b}"
            "_children": [
              {
                "_type": "mv_Label"
                "id": "v4"
                "text": "${json.others[1]}"
              }
            ]
          }
        ]
      }

      data = {
        json: {
          "height": 200.0
          item1: {
            "a": "first"
          }
          item2: {
            subItem: {
              "b": "second"
            }
          }
          others: [
            "third", "fourth"
          ]
        }
      }
      view = mv.createFragment(json, invalid, data)

      m.assertSubType(view, "Rectangle")
      m.assertEqual(view.id, "v1")
      m.assertEqual(view.height, 200.0)

      child1 = view.getChild(0)

      m.assertSubType(child1, "mv_Label")
      m.assertEqual(child1.id, "v2")
      m.assertEqual(child1.text, "first")

      child2 = view.getChild(1)

      m.assertSubType(child2, "mv_Label")
      m.assertEqual(child2.id, "v3")
      m.assertEqual(child2.text, "second")

      child2_1 = child2.getChild(0)

      m.assertSubType(child2_1, "mv_Label")
      m.assertEqual(child2_1.id, "v4")
      m.assertEqual(child2_1.text, "fourth")

      view = mv.createFragment(json, invalid, data)

      m.assertSubType(view, "Rectangle")
      m.assertEqual(view.id, "v1")
      m.assertEqual(view.height, 200.0)

      child1 = view.getChild(0)

      m.assertSubType(child1, "mv_Label")
      m.assertEqual(child1.id, "v2")
      m.assertEqual(child1.text, "first")

      child2 = view.getChild(1)

      m.assertSubType(child2, "mv_Label")
      m.assertEqual(child2.id, "v3")
      m.assertEqual(child2.text, "second")

      child2_1 = child2.getChild(0)

      m.assertSubType(child2_1, "mv_Label")
      m.assertEqual(child2_1.id, "v4")
      m.assertEqual(child2_1.text, "fourth")
    end function
```