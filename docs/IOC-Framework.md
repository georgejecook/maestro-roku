# Overview

Maestro has a build in IOC framework.

It is simple, and tailored specifically to roku memory management and performance, as well as easy debugging using RALE tool.

## Using maestro IOC

### Create your IOC container

Early on in your application, create your container and set instances as follows:

```
function initializeIOC()
  m.log.info("initializing the IOD container")
  'note this is done in the boostrap sequence in my apps
  mioc.createContainer()

  fontManager = createObject("roSGNode", "mv_FontManager")
  mioc.setInstance("fontManager", fontManager)

  styleManager = createObject("roSGNode", "mv_StyleManager")
  mioc.setInstance("styleManager", styleManager)
end function

```

### Get instances

To retrieve an instance, use `mioc.getInstance("instance_name")`

### Get paths

To retrieve an instance, use `mioc.getInstance("instance_name", "path.to.some.data")` , which will return the data on instance_name.path.to.some.data

### Set instances

You can override instances at any point with `mioc.setInstance`

### Use @inject annotation

You can inject ioc instances directly into your class fields, e.g.

```
class ButtonView extends mv.BaseView

@inject("styleManager")
private styleManager

@inject("user", "credentials.isLoggedIn")
private isLoggedIn
```

### Unit testing

Maestro is all about testability, for this reason all the main base classes (e.g. `NodeClass`, `BaseView`, `BaseViewModel`, etc) have wrappers for `mioc.setInstance` and `mioc.getInstance` making them very easy to stub in a unit test. e.g.

*extract from LoginScreenVM.spec.bs*

```

  private function onRefreshComplete(result)
    m.log.method("onRefreshComplete", result)
    m.isLoading = false
    m.isMainGroupVisible = true

    if m.getInstance("user").isLoggedIn
      m.dismiss("success")
    else
      m.signalAppLaunchDialog(false)
      m.isRefreshing = false
    end if

  end function
```


*extract from LoginScreenVM.bs*

```
    '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @describe("onRefreshComplete")
    '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    @it("dismisses on successful refresh")
    function _()
      user = { "id": "user", isLoggedIn: true }
      m.expectOnce(m.vm, "getInstance", ["user"], user)
      m.expectOnce(m.vm, "dismiss", ["success"])

      m.vm.isLoading = true
      m.vm.isRefreshing = true

      m.vm.onRefreshComplete({})

    end function
```