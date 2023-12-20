var ran1 = Math.floor(Math.random() * 6)+1;
var ran2 = Math.floor(Math.random() * 6)+1;

var img1 = "./images/dice" + ran1 + ".png"
var img2 = "./images/dice" + ran2 + ".png"


if (ran1 > ran2){
    document.querySelector("h1").textContent = "🚩Player 1 Win";
}else if(ran1 < ran2){
    document.querySelector("h1").textContent = "Player 2 Win🚩";
}
else{
    document.querySelector("h1").textContent = "🥱Both are tie🥱";
}

document.querySelector("img.img1").setAttribute("src",img1)
document.querySelector("img.img2").setAttribute("src",img2)