const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ball_options;
var ground, bucket1, bucket2;
var theme = "#c0c000"

function preload() {

}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	engine = Engine.create();
	world = engine.world;
	fill(theme);
	noStroke();

	ground = new Wall(600, 595, 1200, 10);
	bucket1 = new Wall(700, 550, 10, 80);
	bucket2 = new Wall(900, 550, 10, 80);
	wall1 = new Wall(5, 295, 10, 590);
	wall2 = new Wall(1195, 295, 10, 590);
	wall3 = new Wall(600, 5, 1200, 10);
	ball = Bodies.circle(80, 300, 15);
	World.add(world, ball);

	ball_options = {restitution: 0.9, friction: 0.0001, density: 1.2}


	Engine.run(engine);
}


function draw() {
	background("black");
	drawSprites();
	ground.show();
	bucket1.show();
	bucket2.show();
	wall1.show();
	wall2.show();
	wall3.show();
	ellipse(ball.position.x, ball.position.y, 15);

	if (keyWentDown("1")) {
		theme = "#ff6060";
	}
	if (keyWentDown("2")) {
		theme = "#60ff60";
	}
	if (keyWentDown("3")) {
		theme = "#c0c000";
	}
	if (keyWentDown("4")) {
		theme = "#6060ff";
	}
	if (keyWentDown("5")) {
		theme = 200;
	}
	if (keyWentDown("R")) {
		Body.setPosition(ball,{x: 80, y: 300});
	}
	if (keyDown("up") && ball.position.y > 575) {
		Body.applyForce(ball, {x:ball.position.x, y:ball.position.y}, {x:0, y:-0.04});
	}
	if (keyDown("right")) {
		Body.applyForce(ball, {x:ball.position.x, y:ball.position.y}, {x:0.002, y:0});
	}
	if (keyDown("left")) {
		Body.applyForce(ball, {x:ball.position.x, y:ball.position.y}, {x:-0.002, y:0});
	}
	console.log(ball.position.y)
}



