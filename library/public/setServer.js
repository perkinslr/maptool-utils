console.log("running set server")
try {
    let serverInfo = JSON.parse(""+MTScript.evalMacro(`[r: getInfo("server")]`))
    let isServer = serverInfo['personal server'] || serverInfo['hosting server']
    let playerName = MTScript.evalMacro(`[r: getPlayerName()]`)

    let serverName;

    function getServer() {
	if (isServer) {
	    serverName = playerName
	    return serverName
	}
	return serverName
	
    }

    function setServer(name) {
	serverName = name
    }

    function sendServer(args) {
	if (isServer) {
	    let link = "macro://SetServer@lib:com.lp-programming.maptool.jsFrame/none/Impersonated?"+playerName
	    MTScript.setVariable("link", link)
	    MTScript.setVariable("player", args)
	    MTScript.evalMacro(`[r: execLink(link, "1", player)]`)

	}
    }

    MTScript.registerMacro("getServer", getServer)
    MTScript.registerMacro("setServer", setServer)
    MTScript.registerMacro("sendServer", sendServer)

    if (!isServer) {
	console.log("Polling for server")
	let link = "macro://GetServer@lib:com.lp-programming.maptool.jsFrame/none/Impersonated?" + playerName
	MTScript.setVariable("link", link)
	MTScript.evalMacro(`[r: execLink(link, "1", "not-self")]`)
    }

}
catch (e) {
    MapTool.chat.broadcast("error loading addon: "+e)
    console.log(e)
}
