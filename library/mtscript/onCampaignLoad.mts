[r: broadcast("hello from addon")]
[r: js.createNS("com.lp-programming.maptool.frame5")]
[r: js.evalURI("com.lp-programming.maptool.frame5", "lib://com.lp-programming.maptool.jsFrame/frame5udf.js")]
[r: js.createNS("com.lp-programming.maptool.setServer")]
[r: js.evalURI("com.lp-programming.maptool.setServer", "lib://com.lp-programming.maptool.jsFrame/setServer.js")]
 

[r: broadcast(js.getServer())]