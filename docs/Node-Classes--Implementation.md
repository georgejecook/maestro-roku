## Implementation details

To keep code as testable as possible, yet conform as closely as possible to the _brighterscript_ nodeclass language feature propositions maestro does the following:
  - Maintains the original classes in the code (so they can be unit tested)
  - Replaces all `m.fieldName` references to `m.top.fieldName` references for public fields, so developers can code in a class-centric way, without having to worry about node-var space, vs class var space vs m var space
  - Assigns all default values for public fields to `m.top` in the node's `init` method
  - Instantiates the class inside the node, according to the `@lazy` annotation (i.e. either instantiation can be deferred for performance wins)
  - Appends the node class into the node's m
    - This better conforms with the proposed _brighterscript_ implementation
    - Allows seamless and direct access to the node's m and top

