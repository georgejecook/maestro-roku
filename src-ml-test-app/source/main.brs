function Main(args as dynamic)
  initScreen()
end function

function initScreen() as void
  ' This will be where you setup your typical Roku app
  ' It will not be launched when running unit tests
  screen = CreateObject("roSGScreen")
  m.activeTransfers = {}
  m.byteArrays = []  ' Array to store byte arrays
  m.port = CreateObject("roMessagePort")
  screen.setMessagePort(m.port)

  rootScene = screen.CreateScene("MainScene")
  rootScene.id = "MainScene"

  screen.show()

  ' List of subjects to choose from
  subjects = ["technology", "science", "movies", "news", "gaming", "books", "music", "sports", "art", "programming"]

  ' Number of requests to make, can be adjusted as needed
  numRequests = 5

  ' Create a list to store pending URL requests with their delays
  m.pendingRequests = []

  ' Create URL transfers for each request with a random delay
  for i = 0 to numRequests - 1
    subject = subjects[int(rnd(0) * subjects.count())]
    url = "https://www.reddit.com/r/" + subject + "/.json"
    randomDelay = int(rnd(0) * 5000) + 5000  ' Random delay between 5000 and 10000 milliseconds
    addPendingRequest(url, randomDelay)
  end for

  ' Do any other stuff here that _must_ be done in main
  ' I'm not a fan of that though; but just showing how it would work
  rootScene.callFunc("begin", m.args)

  ' Initialize timer for crude timing mechanism
  timer = CreateObject("roTimespan")
  timer.Mark()

  while true
    msg = wait(16, m.port) ' 60 fps
    if msg <> invalid
      msgType = type(msg)
      if msgType = "roSGScreenEvent"
        if msg.isScreenClosed()
          return
        end if
      else if msgType = "roUrlEvent"
        id = msg.GetSourceIdentity().toStr()
        ? "GOT A URL EVENT"
        print "I have status " msg.getResponseCode() " from " id
        if msg.getResponseCode() = 200
          ? "LOADED"
          response = msg.getString()
          storeResponseInByteArray(response)
        else
          print "Failed to load: "; msg.getResponseCode()
        end if
        url = m.activeTransfers[id].getUrl()
        m.activeTransfers.delete(id)
        randomDelay = int(rnd(0) * 5000) + 5000  ' Random delay between 5000 and 10000 milliseconds
        addPendingRequest(url, randomDelay)
        ? "active transfers left " m.activeTransfers.count()
      end if
    end if

    ' Check pending requests and process if their delay has expired
    checkPendingRequests(timer)
  end while
end function

' Function to add a pending URL request with delay
function addPendingRequest(url as string, delay as integer) as void
  pendingRequest = { "url": url, "delay": delay, "startTime": CreateObject("roTimespan").TotalMilliseconds() }
  m.pendingRequests.push(pendingRequest)
end function

' Function to check pending requests and initiate URL transfer if delay has expired
function checkPendingRequests(timer as object) as void
  currentTime = timer.TotalMilliseconds()
  for i = m.pendingRequests.count() - 1 to 0 step -1
    request = m.pendingRequests[i]
    elapsedTime = currentTime - request.startTime
    if elapsedTime >= request.delay
      createUrlTransfer(request.url, m.port)
      m.pendingRequests.delete(i)
    end if
  end for
end function

' Function to create and set up a URL transfer
function createUrlTransfer(url as string, port as object) as void
  urlTransfer = CreateObject("roUrlTransfer")
  ? "LOADING URL" url
  urlTransfer.setCertificatesFile("common:/certs/ca-bundle.crt")
  urlTransfer.initClientCertificates()
  urlTransfer.setMessagePort(port)
  urlTransfer.setUrl(url)
  urlTransfer.asyncGetToString()
  m.activeTransfers[urlTransfer.getIdentity().toStr()] = urlTransfer
end function

' Function to store response in a byte array and add to the array of byte arrays
function storeResponseInByteArray(response as string) as void
  ? " STORING IN BYTE ARRAY"
  byteArray = CreateObject("roByteArray")
  byteArray.FromAsciiString(response)
  m.byteArrays.push(byteArray)
  ? " FINISHED STORING IN BYTE ARRAY"
end function
