---
priority: 100
title: Config
---

# Additional node class config options

Node classes provide the following additional config options, which you can put in your bsconfig.json's `maestro` settings:

 - `buildForIDE` - If set to true, then generation of all files is deferred until transpile. This should be true for your default `bsconfig.json`, as used by vscode, for performance reasons, it should be false for all other build types
 - `generateTestUtils` - If true, maestro will generate the test utility function `tests_maestro_nodeClassUtils_createNodeClass`, which can be used to create node classes, with specific top and global objects, so that node classes which use these objects in their `new` method can be correctly tested