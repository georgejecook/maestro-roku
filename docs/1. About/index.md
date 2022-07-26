---
priority: 0
title: Overview
---

# Maestro provides the following:

 - Familiar view lifecycles (`onShow`, `onHide`, `onFirstShow`, `onGainedFocus`, etc)
 - Simple key handlings (`onKeyPressXXX`, long key presses, key press locking)
 - Focus management that works, without guessing/debugging
 - Familiar aggregate views (`TabController`, `NavController`, `DynamicView`)
 - Pluggable and extensible view transitions
 - Improved task observers (use function pointers, not strings, get values unpacked automatically)
 - Base classes for all common activities (`BaseView`, `BaseScreen`, `NodeClass`, etc)
 - Wrapped utility methods on base class methods, for easy stubbing and mocking
 - IOC mechanism (`mioc.getInstance("foo")`, `mioc.setInstance("foo", bar)`, `@inject("foo")` annotations for class fields)
 - MVVM base classes with xml binding support (`<Button text='{{title}}' selected='{(onSelect())}' />`)
 - Code generation for Node classes, and Tasks, making writing unit testable controls and tasks, easier than ever
 - Animation library (`myFade a = mv.animations.FadeTo(m.button, 1, 0.5)`, `myFade.onFraction( 0.5, function(f)...`, etc)
 - Wrappers for all main roku components to make them easy to style and use in mvvm via a `style` property
 - `StyleManager`, and `FontManager`, for caching style and fonts
 - Node level `Map`, and `Set` implementations, and `collections` library
 - SDP adhering OOAD, class based brighterscript code, throughout
 - Powerful, flexible, performant list component, for creating modern experiences using familiar apis
