---
priority: 0
title: Overview
---
# Node classes

## Table of Contents
- [Testing](/docs/3.%20Node%20Classes/testing.md)
- [Config](/docs/3.%20Node%20Classes/config.md)
- [How to write](/docs/3.%20Node%20Classes/how-to-write.md)
- [Implementation](/docs/3.%20Node%20Classes/implemenation.md)
- [Node task](/docs/3.%20Node%20Classes/node-task.md)

---

Maestro exists to save you writing error prone boilerplate code.
For this reason it allows the creation of node classes, which are annotations you can add to a class, which will automatically generate xml and brs code for you, allowing:

 - designating class fields
 - designating class functions
 - assigning observers
 - extending other classes and components
 - creating tasks with just one function

### Why? Why not use MVVM pattern?

_If all you have is a hammer then everything is a nail_. Some tasks and components are not a good fit for MVVM pattern, it makes more sense to use MVC, for a Button, for example. And tasks are more convenient to write as one function.

### Brighterscript nodeclass support

Eventually, nodeclasses will be part of brighterscript. However, maestro gives you this feature today so you can get super productive. Later on when bs support is added, it will be easy to simply remove the annotations and off you go!

### Node classes are test friendly!

Node classes make it easy for you to write unit tests, which run quickly and predictably. All of the logic for your tasks and views/components/screens is a simple class in the source folder, which can be run in rooibos tests, and have it's method stubbed and mocked.

### Node classes give more diagnostics

Due to being classes in nature, the compiler has more information and can give better inline feedback.


