# Overview

NodeTasks allow you to write a task by simply creating a class, and implementing an `execute` function. This saves developers having to worry about roku node implementation details.

## Implementation
 - Create a bs class
 - Add a `@task` annotation, which takes 2 args:
    1. Generated task name
    2. Extended task name
 - The execute method will receive one param, an associative array (args), which contains the args, as set on the task by the task invoker.
 - It is recommended that the execute method returns an associative array with _at least_ : `{isOK:boolean, data:any}`


# Example

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
