function toTomato(){
	document.getElementById('blue-box').style.backgroundColor="tomato"
}
// blueBox.onclick=toTomato
var blueBox = document.getElementById('blue-box')
blueBox.onclick=function(){
	toTomato()
}
