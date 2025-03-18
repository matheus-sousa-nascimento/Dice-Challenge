var img1 = Math.floor((Math.random() * 6) + 1);

var img2 = Math.floor((Math.random() * 6) + 1);


if(img1 === img2){
    document.querySelector("h1").innerHTML = "Draw! ";
}else if( img1 < img2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

var image1 = "images/dice"+img1+".png";

document.querySelector(".img1").setAttribute("src", image1);

var image2 = "images/dice"+img2+".png";

document.querySelector(".img2").setAttribute("src", image2);



// // Dado 1
// if (img1 === 1 ){
//     document.querySelector(".img1").setAttribute("src","./images/dice1.png");
// }

// if (img1 === 2 ){
//     document.querySelector(".img1").setAttribute("src","./images/dice2.png");
// }

// if (img1 === 3 ){
//     document.querySelector(".img1").setAttribute("src","./images/dice3.png");
// }

// if (img1 === 4 ){
//     document.querySelector(".img1").setAttribute("src","./images/dice4.png");
// }

// if (img1 === 5 ){
//     document.querySelector(".img1").setAttribute("src","./images/dice5.png");
// }

// if (img1 === 6 ){
//     document.querySelector(".img1").setAttribute("src","./images/dice6.png");
// }

// // Dado 2
// if (img2 === 1 ){
//     document.querySelector(".img2").setAttribute("src","./images/dice1.png");
// }

// if (img2 === 2 ){
//     document.querySelector(".img2").setAttribute("src","./images/dice2.png");
// }

// if (img2 === 3 ){
//     document.querySelector(".img2").setAttribute("src","./images/dice3.png");
// }

// if (img2 === 4 ){
//     document.querySelector(".img2").setAttribute("src","./images/dice4.png");
// }

// if (img2 === 5 ){
//     document.querySelector(".img2").setAttribute("src","./images/dice5.png");
// }

// if (img2 === 6 ){
//     document.querySelector(".img2").setAttribute("src","./images/dice6.png");
// }

