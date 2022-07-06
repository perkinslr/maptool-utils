[r: broadcast("hello from addon")]
[r: js.createNS("com.lp-programming.maptool.utils")]
[r: js.evalURI("com.lp-programming.maptool.utils", "lib://com.lp-programming.maptool.jsFrame/frame5udf.js")]
[r: js.evalURI("com.lp-programming.maptool.utils", "lib://com.lp-programming.maptool.jsFrame/setServer.js")]
 

[r: broadcast(js.getServer())]