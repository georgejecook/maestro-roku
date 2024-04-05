## Overview

Controlling a sequence of events can be difficult to write, test and maintain. Maestro makes this easy with command sequences, which manage various commands.

Maestro also has a specialized CommandSequence, called LaunchSequence, which is tailored for initializing a maestro framework app

### CommandSequence

The Command sequence is a special node, which acts like a task, so it can be created and observed by using m.createTask("MyCommandSequence")

To make a command sequence, extend the CommandSequence and implement the `createCommands` function, to return an array of commands, e.g.


```
namespace mc.app
  @node("mc_LaunchSequence", "Group")
  class LaunchSequence

    protected override function createCommands()
      return [new mc.SequentialCommand("Launch Sequence Commands", [
          new mc.Command("Init IOC", m.initializeIOC)
          new mc.OptionalSequentialCommand("Maestro Initialization", m.isIncludingView, m.getMaestroInitializationCommands())
          ' new mc.SequentialCommand("Custom Launch", m.getCustomCommands())
          new mc.SequentialCommand("Custom Launch", m.getCustomCommands())
        ]
      )]
    end function

```

For basic commands (e.g. `mc.Command`), you _must_ invoke m.finishCommand(command) on your launch sequence class, to inform maestro that the command is finished.

The CommandSequence will do the rest.

### Specifying Commands

 - Command
   - This is the regular command class. Construct a new command with a name, and function to execute
 - TaskCommand
   - Special command that will execute the task, and finish when the result is returned
 - SequentialCommand
   - Executes the provided array of tasks, in sequence, completing when the last is finished
 - ParallelCommand
   - Executes the provided array of tasks, all at the same time, completing when all are finished
 - OptionalCommand
   - A command which will run or not, based on the boolean flag
 - OptionalSequentialCommand
   - An Sequential command which will run or not, based on the boolean flag
 - OptionalParallelCommand
    - An Parallel command which will run or not, based on the boolean flag
 - CommandProvider
   - A command _factory_ this is useful for when you need to provide a command, later in your sequence execution; but the values for it might not yet be ready. e.g. if you have a command you want to run, after you have loaded some server data, then you can defer the command creation till the moment it is needed.

All commands take an options aa argument, which allows for further command customization. Options are

| Option          | Commands    | Description                                                                                                                                                                               |
|-----------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ignoreFailure   | All         | Will continue if the comand fails                                                                                                                                                         |
| isWaitingResult | TaskCommand | If false, will mark the task as complete straight away. Default is true                                                                                                                   |
| onComplete      | TaskCommand | Handler function that will be called with mc.Result the task provided, allowing for processing of the task. You can return true or false, to change the result.isOk value, of your result |


### Example commands
```
  new mc.SequentialCommand("Commands", [
        new mc.Command("A", m.doMockCommandWork)
        new mc.OptionalSequentialCommand("B", false, [
        mc.Command("B_1", m.doMockCommandWork)
        mc.Command("B_2", m.doMockCommandWork)
        ])
        new mc.Command("C", m.doMockCommandWork)
        new mc.CommandProvider("D", m.getProvidedCommand)
        new mc.Command("E", m.doMockCommandWork)
        new mc.CommandProvider("F", m.getInvalidProvidedCommand)
        new mc.Command("G", m.doMockCommandWork),
        new mc.OptionalSequentialCommand("H", false, [
        mc.Command("H_1", m.doMockCommandWork)
        mc.Command("H_2", m.doMockCommandWork)
        ])
    ]
    )
```


## LaunchSequence

A LaunchSequence has some conventions built into it, that help repeatable initialize an app.To use, simply override the getCustomCommands method, returning an array of commands.

e.g.

```
    protected function getCustomCommands() as roArray
      'override point to provide sequential custom commands
      return [
        new mc.TaskCommand("Load Data", "LoadDataTask")]
    end function
```

### Maestro initialization
To assist with rapid app development, there is a default maestro initialization function which is called for configuring maestro, which can be overridden. To execute your own application launch commands,

```

    protected function getMaestroInitializationCommands() as roArray
      return [
        new mc.Command("Create FontManger", m.createFontManger)
        new mc.Command("Load Styles", m.loadStyles)
        new mc.Command("Setup Maestro", m.setupMaestro)
        new mc.Command("Initialize ComponentPool", m.initializeComponentPool)
        new mc.Command("Prebake Cells", m._prebakeViews)
      ]
    end function
```

### IOC initialization

The LaunchSequence will take a default instantiation of the IOC when it starts up, which can be (and should be) overridden, to return your correct IOC instantiation, e.g.

```

    protected function initializeIOC(command as mc.Command)
      m.log.info("initializing the IOC container")
      mioc.createContainer()

      m.createIOCInstance("mc_delayedTaskManager", "delayedTaskManager")
      m.setInstance("manifest", m.loadManifest())
      m.finishCommand(command)
    end function
```




