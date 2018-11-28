


export default function( sketch ) {

    var width = 0;
    var height = 0;
    var colorR, colorG, colorB;
    var paddle1, paddle2;
    var paddle1Y = 150;
    var paddle2Y = 150;
    var boule, bouleX, bouleY;
    var bouleX = 300;
    var bouleY = 200;
    var directionX, directionY;
    var vitesseBoule;
    var random1aMoins1;
    var scoreBleu, scoreRouge;
    var recoveryTime =0;
    var placementBoule=false;
    var gamePlays = false;




sketch.setup = function() {
//rafraichissement du jeu:
sketch.frameRate(50);

//création d'un canevas
width = 600;
height = 400;
sketch.createCanvas(width, height);

//choix de couleur de la boule
colorB = sketch.random(50,255);
colorG = sketch.random(50,255);
colorR = sketch.random(50,255);

//score
scoreBleu = scoreRouge = 0

//vitesse de la boule. On la définit pour pouvoir la faire varier
//et pour déterminer les composantes de cette vitesse par rapport à cette dernière.
vitesseBoule = 6.2; //ceci signifie 6.2 pixels par rafraichissement

random1aMoins1 = sketch.random(-1, 1)
directionX = sketch.random(4.5, 6) * (random1aMoins1 / sketch.abs(random1aMoins1));
//cela permet de selectionner au hazard -1 ou 1 * la direction positive

random1aMoins1 = sketch.random(-1, 1)
directionY = sketch.sqrt((sketch.pow(vitesseBoule, 2)) - sketch.pow(directionX, 2)) * (random1aMoins1 / sketch.abs(random1aMoins1));
}











sketch.draw = function() {

if (sketch.keyIsPressed === true){
    gamePlays = true;
}


recoveryTime++

if (gamePlays==true){
//image de fond
sketch.background(0);

//score
sketch.fill(255,200);
sketch.textSize(25);
sketch.textAlign(sketch.CENTER);
sketch.text(scoreBleu + '|' + scoreRouge, 300, 25);

//barre du milllieu
sketch.fill(255);
//A FAIRE !!!

//paddle1 (gauche)
sketch.fill(0, 0, 355);
paddle1 = sketch.rect(0, paddle1Y, 10, 100);

//paddle2 (droite)
sketch.fill(355, 0, 0);
paddle2 = sketch.rect(590, paddle2Y, 10, 100);

//boule
sketch.fill(colorR, colorG, colorB);
boule = sketch.ellipse(bouleX, bouleY, 20, 20);

//mouvements des barres
if (sketch.keyIsDown(sketch.UP_ARROW) && (paddle2Y >= 0)) {
    paddle2Y -= 6;
}
if (sketch.keyIsDown(sketch.DOWN_ARROW) && (paddle2Y <= 300)) {
    paddle2Y += 6;
}
if (sketch.keyIsDown(87) && (paddle1Y >= 0)) {
        paddle1Y -= 6;
}
if (sketch.keyIsDown(83) && (paddle1Y <= 300)) {
    paddle1Y += 6;
}

//mouvements de balle
bouleX += 1 * directionX;
bouleY += 1 * directionY;

//Gagnant
if (scoreBleu == 10 || scoreRouge == 10) {
    if (scoreBleu == 10) {
        alert("La partie est Terminée ! Le joueur bleu a gagné !");
    } else if (scoreRouge == 10) {
        alert("La partie est Terminée ! Le joueur rouge a gagné !");
    }
    scoreBleu = scoreRouge = 0
}

//collisions balle avec barres
if ((placementBoule==false) && (bouleX > 580) && ((paddle2Y > bouleY+10) || ((paddle2Y + 100) < bouleY-10))) {
    scoreBleu += 1;
    sketch.print("Point marqué par joueur bleu !");
    recoveryTime=0;
    placementBoule=true;
} else if ((placementBoule==false)&&(bouleX > 580)&&(sketch.pow(directionY,2)+sketch.pow(directionX,2))<160) {
    bouleX = 580;
    directionY *= 1.05;
    directionX *= -1.05;
} else if ((placementBoule==false)&&(bouleX > 580)){
    bouleX = 580;
    directionX *= -1;
}

if ((placementBoule==false) && (bouleX < 20) && ((paddle1Y > bouleY+10) || ((paddle1Y + 100) < bouleY-10))) {
    scoreRouge += 1;
    sketch.print("Point marqué par joueur rouge !");
    recoveryTime=0;
    placementBoule=true;
} else if ((placementBoule==false)&&(bouleX < 20)&&(sketch.pow(directionY,2)+sketch.pow(directionX,2))<160) {
    bouleX = 20;
    directionY *= 1.05;
    directionX *= -1.05;
} else if ((placementBoule==false)&&(bouleX < 20)){
    bouleX = 20;
    directionX *= -1;
}

//collisions avec les bords de la map
if (bouleY > 390) {
    bouleY = 390
    directionY *= -1;
}
if (bouleY < 10) {
    bouleY = 10
    directionY *= -1;
}

//replacement de la boule avec nouvelles valeurs
if (recoveryTime > 100){
if (placementBoule==true){
    random1aMoins1 = sketch.random(-1, 1)
    directionX = sketch.random(4.5, 6) * (random1aMoins1 / sketch.abs(random1aMoins1));
    random1aMoins1 = sketch.random(-1, 1)
    directionY = sketch.sqrt((sketch.pow(vitesseBoule, 2)) - sketch.pow(directionX, 2)) * (random1aMoins1 / sketch.abs(random1aMoins1));
    bouleX=300;
    bouleY=200;
    placementBoule=false;
}
}







}//FIN DE LA CONDITION DE JEU

}//FIN DE LA FONCTION 'DRAW'

}//demi-colone d'exportation !!!!!
