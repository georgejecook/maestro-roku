function Main(args as dynamic)
  initScreen()
end function


function initScreen() as void
  'this will be where you setup your typical roku app
  'it will not be launched when running unit tests
  screen = CreateObject("roSGScreen")
  m.port = CreateObject("roMessagePort")
  screen.setMessagePort(m.port)
  rootScene = screen.CreateScene("MainScene")
  rootScene.id = "MainScene"

  screen.show()

  'do any other stuff here that _must_ be done in main
  'I'm not a fan of that though; but just showing how it would work
  rootScene.callFunc("begin", m.args)

  while true
    msg = wait(0, m.port)
    msgType = type(msg)

    if msgType = "roSGScreenEvent"
      if msg.isScreenClosed()
        return
      end if
    end if
  end while
end function
