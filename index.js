var playerImg1 = "Images/3.png";
var playerImg2 = "Images/1.png";
document.querySelector(".img1").setAttribute('src', playerImg1);
document.querySelector(".img2").setAttribute('src', playerImg2);

function rollDice() {

    var randomNumberPlayer1 = Math.floor((Math.random() * 6) + 1);
    var randomNumberPlayer2 = Math.floor((Math.random() * 6) + 1);

    var playerImg1 = "Images/" + randomNumberPlayer1 + ".png";
    var playerImg2 = "Images/" + randomNumberPlayer2 + ".png";

    document.querySelector(".img1").setAttribute('src', playerImg1);
    document.querySelector(".img2").setAttribute('src', playerImg2);

    if (randomNumberPlayer1 > randomNumberPlayer2) {
        document.querySelector('h1').innerHTML = "Player 1 Wins";
    } else if (randomNumberPlayer1 < randomNumberPlayer2) {
        document.querySelector('h1').innerHTML = "Player 2 Wins";
    } else {
        document.querySelector('h1').innerHTML = "Roll Again";
    }
}


