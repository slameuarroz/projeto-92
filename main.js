function addUser(){
    var jogador1 = document.getElementById("player1NameInput").value
    var jogador2 = document.getElementById("player2NameInput").value
    localStorage.setItem("jogador1",jogador1);
    localStorage.setItem("jogador2",jogador2);
    window.location="index2.html"
}