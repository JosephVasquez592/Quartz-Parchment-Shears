var win = 3
var loss= 6
var draw= 2

// Prompt, Confirm, Alert
var game = function() {
    var choice = window.prompt("Choose");
    window.confirm("Confirm?");
    window.alert();
    window.prompt("Play Again? " + "Win:"+" Loss:"+ " Draw:");
}

game();
