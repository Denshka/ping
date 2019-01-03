<script>
function Point(x, y) {
 this.x=x;
 this.y=y;

 this.toString = function toString() {
 return this.x +" "+this.y;
 }
}

function Node(point) {
 var next =null;
 this.point=point;

  this.getX = function getX() {
    return this.point.x;
 }

  this.getY = function getY() {
     return this.point.y;
 }

  this.setX = function setX(x) {
   this.point.x=x;
 }

  this.setY = function setY(y) {
   this.point.y=y;
 }

  this.toString = function toString() {
    return this.point.x +" "+this.point.y + " "+this.next;
 }
}

function LinkedList() {

 var first = null;
 var elements = 0;

 this.getLength = function getLength() {
     return elements;
 }

 this.addFirst = function addFirst(point) {

     elements++;
     var newNode = new Node(point);
     newNode.next = first;
     first = newNode;
 }

this.addLast = function addLast(point) {
  elements++;
        var newNode = new Node(point);
        var currentNode = first;

        while(currentNode.next!=null) {
            currentNode = currentNode.next;
        }
   currentNode.next = newNode;
         newNode = currentNode;
    }

  this.getX = function getX(index) {

  var currentNode = first;
  var tmp =0;

    while(true) {

             if(index> elements - 1) {
        return null;
             }

             if(tmp==index) {
      return currentNode.getX();
             }

             tmp++;
             currentNode= currentNode.next;
     }
   }

 this.setX = function setX(index, value) {

  var currentNode = first;
  var tmp =0;

while(true) {

             if(index> elements - 1) {
        return null;
             }

             if(tmp==index) {
       currentNode.setX(value);
        return currentNode;
             }

             tmp++;
             currentNode= currentNode.next;
     }
   }

 this.setY = function setX(index, value) {

  var currentNode = first;
  var tmp =0;

 while(true) {

             if(index> elements - 1) {
        return null;
             }

             if(tmp==index) {
       currentNode.setY(value);
        return currentNode;
             }

             tmp++;
             currentNode= currentNode.next;
     }
   }

 this.getY = function getY(index) {

 var currentNode = first;
 var tmp =0;

 while(true) {

     if(index> elements - 1) {
        return null;
     }

     if(tmp==index) {
      return currentNode.getY();
     }
     tmp++;
     currentNode= currentNode.next;
   }
 }
}

var boardWidth = 35;
 var boardHeight = 35;
 var canvas;
 var context;
 var snakeList = new LinkedList();

 function Food() {
  var positionX;
  var positionY;

 this.randomFood = function randomFood() {
    this.positionX= Math.floor((Math.random() * (boardWidth-10)));
    this.positionY = Math.floor((Math.random() * (boardHeight-10)));
 }

this.getX = function getX() {
    return this.positionX;
 }

this.getY = function getY() {
    return this.positionY;
 }
}

function Snake() {

var positionX = Math.floor((Math.random() * (boardWidth-5)));
var positionY = Math.floor((Math.random() * (boardWidth-5)));
var interval = setInterval(update, 100);
var pressedKey = 0; // start game with arroa key
var food = new Food();
var points =0;

food.randomFood();
snakeList.addFirst(new Point(positionX,positionY));
snakeList.addFirst(new Point(positionX-1,positionY));
snakeList.addFirst(new Point(positionX-2,positionY));

 function update() {

  if(pressedKey!=0) {
   move();
 }

   eatApple();
   changeDirection();
   checkGameOver();
   repaint();

         if(pressedKey==0) {
            context.strokeText("Appuyer sur une fleche pour commencer, F5 pour recommencer",10,20,300);
         }
}

function move() {

 for(var i= snakeList.getLength()-1; i > 0; i--) {
     snakeList.setX(i,snakeList.getX(i-1));
     snakeList.setY(i,snakeList.getY(i-1));
   }
 }

function eatApple() {

 if(snakeList.getX(0)==food.getX(0) && snakeList.getY(0)==food.getY(0)) {
 snakeList.addLast(new Point());
 points++;
    document.getElementById("textareapoints").value = "Points: "+points;
    food.randomFood();
  }
}

function changeDirection() {

 var xDirection= snakeList.getX(0);
 var yDirection= snakeList.getY(0);

 window.onkeydown = function(evt) {

if (evt.keyCode == 37) { pressedKey=37;} //left

if (evt.keyCode == 38) { pressedKey=38;} //up

if (evt.keyCode == 39) { pressedKey=39;} //right

if (evt.keyCode == 40) { pressedKey=40;} //down

}

switch(pressedKey) {
 case 37: snakeList.setX(0,xDirection-1); break;
 case 38: snakeList.setY(0,yDirection-1); break;
 case 39: snakeList.setX(0,xDirection+1); break;
 case 40: snakeList.setY(0,yDirection+1); break;
 default: break;
  }
} 

 function checkGameOver() {

  for(var i=1; i<snakeList.getLength(); i++) { // eat itself

 if(snakeList.getX(0)== snakeList.getX(i) && 
   snakeList.getY(0)==snakeList.getY(i)) {
     clearInterval(interval);
  }
 }

 if(snakeList.getX(0) < 0 || snakeList.getX(0) > boardWidth-1 || // hit border
    snakeList.getY(0) < 0 || snakeList.getY(0) > boardHeight-1) {
    clearInterval(interval);
   }
 }

function repaint() {

 context.fillStyle = "orange"; // repaint whole canvas
  for(var i=0; i<boardWidth; i++) {
   for(var j=0; j<boardHeight; j++) {
  context.fillRect(i*10, j*10,10,10);
 }
}

context.fillStyle = "black"; // food
context.fillRect(food.getX()*10, food.getY()*10, 10, 10)

context.fillStyle = "red"; //snake head
context.fillRect(snakeList.getX(0)*10, snakeList.getY(0)*10,10,10);

context.fillStyle = "blue"; // snake body

for(var i=1; i<snakeList.getLength(); i++) {
  context.fillRect(snakeList.getX(i)*10, snakeList.getY(i)*10,10,10);
  }
 }
}

function initCanvas() {
 canvas  = document.getElementById("canvas");
 context = canvas.getContext("2d");
 canvas.width = 350;
 canvas.height = 350;
 context.fillStyle = "yellow";
 context.fillRect(0,0,canvas.width, canvas.height);
 context.fillStyle = "black";
}

window.onload = function() {
 initCanvas();
 var s = new Snake();
}


</script>

<template>
<body>

<header>
<h1>Snake</h1>
</header>
<canvas id="canvas"> </canvas>
<textarea id="textareapoints" type="text" rows="1" cols="30">
Points: 0
</textarea>

</body>
</template>

<style scoped>
h1 {
    text-align: center;
    font-weight: normal;
    font-family: Verdana;
    text-align: center;
    color: #FA0303;
    border: 3px solid red;
    background-color: orange;
}
li {
  display: flex;
  margin: 0 250px;
}
ul {
 padding:0;
 margin:0;
 list-style-type:none;
 text-align: right;
 }
li {
 text-align: center;
 }
ul li a {
 display:block;
 float:left;
 width:300px;
 background-color:#FF0000;
 color:black;
 text-decoration:none;
 padding:5px;
 border:2px solid;
 border-color:#DCDCDC #696969 #696969 #DCDCDC;
 }
ul li a:hover {
 background-color: yellow;
 border-color:#696969 #DCDCDC #DCDCDC #696969;
 }
</style>

