var ply1=Math.random();
var ply2=Math.random();
ply1=ply1*6;
ply2=ply2*6;
ply1=Math.floor(ply1)+1;
ply2=Math.floor(ply2)+1;
//change img
switch (ply1) {
    case 1:
      document.getElementsByClassName("img1")[0].setAttribute("src","dice1.png");
      break;
    case 2:
        document.getElementsByClassName("img1")[0].setAttribute("src","dice2.png");
      break;
    case 3:
        document.getElementsByClassName("img1")[0].setAttribute("src","dice3.png");
      break;
    case 4:
        document.getElementsByClassName("img1")[0].setAttribute("src","dice4.png");
      break;
    case 5:
        document.getElementsByClassName("img1")[0].setAttribute("src","dice5.png");
      break;
    case 6:
        document.getElementsByClassName("img1")[0].setAttribute("src","dice6.png");
      break;    
  }
switch (ply2) {
    case 1:
      document.getElementsByClassName("img2")[0].setAttribute("src","dice1.png");
      break;
    case 2:
        document.getElementsByClassName("img2")[0].setAttribute("src","dice2.png");
      break;
    case 3:
        document.getElementsByClassName("img2")[0].setAttribute("src","dice3.png");
      break;
    case 4:
        document.getElementsByClassName("img2")[0].setAttribute("src","dice4.png");
      break;
    case 5:
        document.getElementsByClassName("img2")[0].setAttribute("src","dice5.png");
      break;
    case 6:
        document.getElementsByClassName("img2")[0].setAttribute("src","dice6.png");
      break;    
  }
//change heading
if(ply1>ply2){
 document.getElementsByTagName("h1")[0].textContent="🚩Player 1 won!!!";
}
else if(ply2>ply1){
    document.getElementsByTagName("h1")[0].textContent="Player 2 won!!!🚩";
}
else{
    document.getElementsByTagName("h1")[0].textContent="Refresh Me";
}