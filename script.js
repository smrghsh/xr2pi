
var wsURL = "ws://35.238.252.254:8080"
var ws = new WebSocket(wsURL)

leftmessage = function(){
    console.log('left pressed')
    ws.send("left");
}
rightmessage = function(){
    console.log('right pressed')
    ws.send("right");
}
// document.getElementById('left')

var leftButton = document.getElementById('left')
leftButton.onclick = leftmessage
var rightButton = document.getElementById('right')
rightButton.onclick = rightmessage

