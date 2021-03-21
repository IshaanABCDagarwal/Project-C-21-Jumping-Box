var canvas;

var surface1 , surface2 , surface3 , surface4;

var Ball, edges


function setup(){
    canvas = createCanvas(800,600);


    Ball = createSprite( random(50,750),100,50,50 )
    Ball.shapeColor = rgb(255,255,255);
    Ball.velocityX = 2
    Ball.velocityY = 5

    surface1 = createSprite( 100,550,200,50)
    surface1.shapeColor = rgb(0,0,255);

    surface2 = createSprite( 300,550,200,50)
    surface2.shapeColor = rgb(255,120,0);

    surface3 = createSprite( 500,550,200,50)
    surface3.shapeColor = rgb(153,0,76);

    surface4 = createSprite( 700,550,200,50)
    surface4.shapeColor = rgb(0,100,0);
    //create 4 different surfaces

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    Ball.bounceOff(edges)
  
    //create edgeSprite

    if( surface1.isTouching(Ball) && Ball.bounceOff(surface1)){
        Ball.shapeColor = rgb(0,0,255)
    }

    if( surface2.isTouching(Ball) ){
        Ball.shapeColor = rgb(255,120,0)
        Ball.velocityY = 0
        Ball.velocityX = 0
    }

    if( surface3.isTouching(Ball) && Ball.bounceOff(surface3)){
        Ball.shapeColor = rgb(153,0,76)
    } 

    if( surface4.isTouching(Ball) && Ball.bounceOff(surface4)){
        Ball.shapeColor = rgb(0,100,0)
    }
    //add condition to check if box touching surface and make it box
    drawSprites();

}
