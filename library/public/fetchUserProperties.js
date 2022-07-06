window.UserData = new Promise((resolve)=>{
	window.setUserData = resolve
})

fetch("macro:fetchUserData@lib:com.lp-programming.maptool.utils", {method: "POST"})
