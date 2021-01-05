
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roofObject
var rope1, rope2, rope3, rope4, rope5;
var engine, world;


function setup() {
	createCanvas(1800, 900);


	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(width / 2, height / 4, width / 2, 20);

	bobDiameter = 60;

	startBobPositionX = width / 2;
	startBobPositionY = height / 4 + 600;


	bobObject1 = new bob(startBobPositionX - bobDiameter * 2, startBobPositionY, bobDiameter);
	bobObject2 = new bob(startBobPositionX - bobDiameter, startBobPositionY, bobDiameter);
	bobObject3 = new bob(startBobPositionX, startBobPositionY, bobDiameter);
	bobObject4 = new bob(startBobPositionX + bobDiameter, startBobPositionY, bobDiameter);
	bobObject5 = new bob(startBobPositionX + bobDiameter * 2, startBobPositionY, bobDiameter);



	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});



	rope1 = new rope(bobObject1.body, roofObject.body, -bobDiameter * 2, 0)

	rope2 = new rope(bobObject2.body, roofObject.body, -bobDiameter * 1, 0)
	rope3 = new rope(bobObject3.body, roofObject.body, 0, 0)
	rope4 = new rope(bobObject4.body, roofObject.body, bobDiameter * 1, 0)
	rope5 = new rope(bobObject5.body, roofObject.body, bobDiameter * 2, 0)

	Engine.run(engine);
}


function draw() {

	background(230);
	textSize(30)
	fill("blue")
	text("Press SpaceBar to move the bob", 800, 130)
	roofObject.display();

	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	text(mouseX + "," + mouseY, mouseX, mouseY)

}

function keyPressed() {
	if (keyCode === 32) {

		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -50, y: -45 });

	}
}


