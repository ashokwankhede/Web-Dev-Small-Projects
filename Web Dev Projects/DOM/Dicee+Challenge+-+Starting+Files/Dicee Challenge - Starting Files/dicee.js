
var srcArray = {
    1:"./images/dice1.png",
    2:"./images/dice2.png",
    3:"./images/dice3.png",
    4:"./images/dice4.png",
    5:"./images/dice5.png",
    6:"./images/dice6.png"
};
console.log('Heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')

function diceeOnload(){
    var n1 = Math.floor(Math.random()*6)+1;
    var n2 = Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").src = srcArray[n1];
    document.querySelector(".img2").src = srcArray[n2];
    if (n1===n2){
        document.querySelector('h1').innerHTML = 'Match Draw!!!';
    }
    else if (n1 > n2){
        document.querySelector('h1').innerHTML = 'Player 1 wins!';
    } else {
        document.querySelector('h1').innerHTML = 'Player 2 wins!';

    }

}