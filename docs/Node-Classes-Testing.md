# Testing recommendations

Nodeclass generated code injects the top and global vars into the class, and appends them to m. Because of this, there will be scenarios where your unit tests will also need to inject a top and m.

In nearly all cases, you can use a mock m and top node. However, sometimes you may want to use a real node. In that case, it is recommended that you use the _generated_ node to inject. This is a rare testing scenario however, likely only for nodeclasses, like certain views (i.e. controls/inputs/etc), which generate their children in the nodeclass's `new` method, as opposed `initialize`, which is easier to stub.

## Creating node classes for unit tests

The following examples assume you are using rooibos 4.3.0 or later

### General case

In most cases you can simply do something like this:

```
namespace tests
  @suite("Control tests")
  class ControlTests extends tests.BaseTestSuite

    private control
    protected override function beforeEach()
      super.beforeEach()
      nodeTop = new rooibos.utils.MockNode("top")
      nodeTop.styleKey = "TextInput"

      ' bs:disable-next-line
      m.control = m.createNodeClass(myOrg.controls.Control, true, nodeTop, m.global)
    end function
```

### Testing `new` function

In the case where you need to test the new function, you can put something like this in your `myOrg.tests.BaseTestSuite`

```
    protected function createNodeClass(clazz, useClassAsTop = true, nodeTop = new rooibos.utils.MockNode("top"), nodeGlobal = new rooibos.utils.MockNode("top"))
      instance = tests_maestro_nodeClassUtils_createNodeClass(clazz, nodeTop, nodeGlobal)
      if instance <> invalid and useClassAsTop
        'note - we use the clazz itself as TOP, so that we don't have to write tests that do
        'thing.top.value, thing.top.value2, etc all over the place
        instance.append(nodeTop)
        instance.top = instance
      end if
      return instance
    end function
```

Then, in your tests (which extend `myOrg.tests.BaseTestSuite`), you will have a test like this:

```
    '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @describe("constructor")
    '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    @it("creates necessary views")
    function _()
      'note how this test uses a real node to ensure child creation
      m.control = m.createNodeClass(myOrg.controls.Control, false, createObject("roSGNode", "myOrg_Control"), m.global)
      m.assertSubType(m.control.backgroundPoster, "mv_Poster")
      m.assertSubType(m.control.label, "mv_Label")
    end function
```
