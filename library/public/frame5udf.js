let FrameProperties = []
let frameCounter = 0

function makeFrame5(name, location, rest) {
	FrameProperties.push([name, rest])
	frameCounter++
	MTScript.evalMacro(`[r: html.frame5("${name}", "${location}", "${rest}")]`)
	console.log("waiting for "+frameCounter+" frames")
	
}

function getFrameProperties() {
	console.log("waiting for "+(frameCounter-1)+" frames")
	if (!(--frameCounter)) {
		while (FrameProperties.length) {
			let fp = FrameProperties.shift()
			MTScript.setVariable("frameName", fp[0])
			MTScript.setVariable("frameData", fp[1])
			MTScript.evalMacro(`[r: runJsFunction(frameName, "frame", "setUserData", "window", json.append("[]", frameData))]`)
		}
	}
}

function resetFrameStack() {
    frameCounter = 0
    FrameProperties.splice(0, FrameProperties.length)
    return "Resetting frame stack"
}

MTScript.registerMacro("makeFrame5", makeFrame5)
MTScript.registerMacro("getFrameProperties", getFrameProperties)
MTScript.registerMacro("resetFrameStack", resetFrameStack)
