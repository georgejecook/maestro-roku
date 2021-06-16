---
priority: 2
title: Bsc plugin
---
## bsc plugin

For the best possible experience, maestro-roku leverages the bsc compiler's wonderful plugin system, allowing maestro-roku to:
 - Add additional diagnostics for:
   - Extra validation and
   - Maestro-roku tags such as `@nodeclass`, `@nodetask`, `@observer`
   - Ensure bindings are correctly wired up for MVVM classes
   - etc.
 - Generate code for:
   - NodeClasses
   - Tasks
   - MVVM bindings
   - IOC injections
   - etc.

Note: The plugin is REQUIRED. You cannot use maestro-roku without this plugin.

### Integrating the plugin
To integrate the bsc plugin:
 - `npm i maestro-roku-bsc-plugin --save-dev`
 - edit your bsconfig.json to add the following:

```
  "plugins": [
    "maestro-roku-bsc-plugin",
  ],
  "maestro": {
    //settings here!
  },

```

### maestro-roku-bsc-plugin settings

|  setting   | Type      | Description |
|  ---  |  ---  | --- |
|logLevel | number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Optional. log level for framework from 0(error) to 4 (verbose)|
|buildTimeImports | dictionary<string, [string]> | Optional. allows a file to swap specify which imports to use at build time, to facilitate dynamic imports e.g. if your build has a certain set of analytics plugins, you might configure that in your build system and update this setting to be `{"IAnalyticsManagers": ["pkg:/source/SuperAnalytics.bs", "pkg:/source/googleAnalytics.bs"]}`, maestro will automatically change all `import "build:IAnalyticsManagers` to the imports described here |
|excludeFilters | string[]; | Optional. list of globs, the files of which, when matched, will not be processed by the plugin|
|addFrameworkFiles | boolean | Defaults to true. Used for internal testing. Do not touch this!|
|stripParamTypes | boolean; | Defaults to true. Removes the types on params at runtime, so that you can code with any types you want in your app and not have roku compiler break when compiling, or hit a crash when passing in an invalid into, e.g. a string. i.e. allows for optional defined types|
|applyStrictToAllClasses | boolean; | Defaults to true. Adds additional strict validation|
|mvvm | dictionary | Optional. Contains options to configure the mvvm behavior |
|    insertXmlBindingsEarly | boolean; | Optional - default false, if set to true, will allow you to see transpiled files in the editor. Performance will tank though - use with care!|
|    createCodeBehindFilesWhenNeeded | boolean; | Defaults to true. Maestro will create code-behinds for your xml files. This means you just need to create an xml file, and a vm, and maestro does the rest|
|    insertCreateVMMethod | boolean; | Default true. Maestro will create your vm for you, in your code-behind file, if present|
|    callCreateVMMethodInInit | boolean; | Default true. Maestro will create your vm and initialize it for you|
|    callCreateNodeVarsInInit | boolean; | Default true. Maestro will create `m.nodeId` fields for all xml components that have id set. Never type `findNode` again :)|
|nodeClasses | dictionary | Optional. Options for node class generation|
|    generateTestUtils | boolean; | Default to false. Set this to true in your test projects, and maestro will create test utils to make it easy for you to debug your node generated classes|
|    buildForIDE | boolean; | Set this to true in your `bsconfig.json` used by the IDE, to keep performance snappy. If this is not set to false on your other builds, then maestro will not generate any code for you and your app will have erratic behavior |

