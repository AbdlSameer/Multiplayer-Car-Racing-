var canvas,backgroundImage;
var gamestate = 0;
var playerCount = 0;
var database,form,player,game;


function setup(){
 canvas = createCanvas(400,400);
 database = firebase.database();
 console.log(database);
 game = new Game();
 game.getState();
 game.start();
}

function draw(){
  background("white");
  drawSprites();
  
  
}

