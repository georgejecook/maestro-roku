## Loading styles and bundles

A great way of making maestro apps is to use nodeclasses, with json view definitions. It has many benefits:

- easy to extract json from tools like figma/zeplin via plugins
- easy to serve json for your views from a CMS/api
- json views don't require pre-compile steps, and you control when they get instantiated, giving more performance flexibility
- localizations are super easy, simply call `setDefaultLocale(locale)` on your `StyleManager`

### Styles and Style manager

- Styles are stored in the style manager. They are loaded from a json file.
- Styles can reference other styles using `"key": "~other.key" semantics.

e.g.

style.json

```
{
  "fonts": {
    "app": {
      "title": "SystemBold, 40",
      "subtitle": "SystemBold, 20",
    },
    "menu": {
      "normal": "System, 30",
      "focused": "SystemBold, 30"
      }
  }
}
```

### Style references

You can then reference these elements in other json styles.
e.g.

```
MenuButton: {
  normalFontKey: "~fonts.menu.normal",
  focusedFontKey: "~fonts.menu.focused"
}
```

Referencing in this way works for _any_ style that is loaded.

### Loading styles

Styles are loaded into style manager with the `loadJson` method call.
e.g. - in your initialization

```
      styleUrl = "pkg:/meta/Styles.json"
      m.log.info("loading styles from", styleUrl)

      styleManager = mc.createSGNode("mv_StyleManager", invalid, "styleManager")
      m.setInstance("styleManager", styleManager)
      m.global.addFields({ "styleManager": styleManager })

      styleJson = m.loadJson(styleUrl)
      styleManager@.setStyleJson(styleJson)
```

### Creating views from json:

Simply load your style (or any json), and use the maestro view (mv) utility method, as such:

```
    private function createViews()
      style = m.styleManager@.getStyle("screens.SettingsScreen.views")
      m.createViewsFromStyleJson(style, m.top)
    end function
```

Note that creation is done view the `mc.createViewsFromStyleJson` method (which for convenience is in `BaseClass`, `BaseCell` and `BaseViewModel`, to facilitate testing)

#### Rules

- The json must be an `array` of assocarray items, that represent each of your views,
- each musth have a `_type` which conforms to a SG node type, or one of your nodes
- if you use an `id` field, it will automatically set the same named field on your node class
  - if it can't be found, you will be warned

#### observing

- you can wire up observers directly in your view json by adding an `observe` associative array and specifying the field names and function as such:
  `observe: {
  "selected": "onSelected"
  "focused": ["onSelected", "both", true]
  }

In the latter case we are using directives to guide how the observe should be setup (in this case, pass both the node and the value, and only fire it once.). The args in that case are:
`[ handler function name, send mode (both|node|none|value) - default value, fire once (true|false) - default false]

### Updating views from json:

When you update views, you provide an assocarray of views by their id, with the values you wish to change, and call the `mc.updateViewsWithStyleJson` method (which for convenience is in `BaseClass`, `BaseCell` and `BaseViewModel`, to facilitate testing)

```
  m.updateViewsWithStyleJson(m.style.normal)
```

Note, the format for overriding here (an aa), will soon be updated to use the bundle override format described in the next section.

One can make it very trivial to update views, in response to certain states.

e.g. given a Button control:

```
    private function applyState(isFocused as boolean, isDisabled as boolean) as void
      'ensure view is correctly configured
      m.updateViewsWithStyleJson(m.style.normal)

      if isDisabled
        m.updateViewsWithStyleJson(m.style.disabled)
      else if isFocused
        m.updateViewsWithStyleJson(m.style.focused)
      end if
    end function
```

### Loading bundles
Bundles are blobs of json that can represent views or other data. They are loaded on a file by file basis, and have the ability to have language overrides (or any key for that matter).
They are stored in a special folder named NAME.bundle, with specifically named files, e.g:

```

NAME.bundle/
NAME.json - root file locale "en"
NAME.de.json - overrides, in "de" locale
NAME.fr.json - overrides, in "fr" locale

```

Note, the locale keys happen to be language codes here; but they could be anything. Casing is important and the naming must follow this convention. See [source/view/SettingsScreen.spec.bundle](../../src/source/view/SettingsScreen.spec.bundle) for the exact format.

To use a bundle in your app, do the following:
```
private function createViews()
bundle = m.styleManager@.loadBundle("pkg:/source/view/SettingsScreen.bundle")
m.createViewsFromStyleJson(bundle.views, m.top)
end function

```

#### Bundle locales

 - the default locale is `en`
 - use `StyleManager.setDefaultLocale` to set a different locale for bundles
 - the `loadBundle` method takes an optional second parameter to override the locale

#### Notes
 - Once a bundle is loaded, it is cached.
 - Multiple bundles overrides can be held in cache at any time (to support user language switching)
 - the default locale is "en"
 - "en" is considered the root json file in a bundle, and does not have a file extension
 - Bundles can use style references, for _any_ loaded style that is stored in the StyleManager
