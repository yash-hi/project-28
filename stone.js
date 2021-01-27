class Stone 
{
constructor (x,y,radius)
{
this.x = x;
this.y = y;
this.radius = radius;
this.image = loadImage("stone.png");

var options = {
isStatic : false,
restitution : 0,
friction : 1,
density : 1.2,
}

this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
World.add(world,this.body);
}

display() 
{
var pos = this.body.position;
push();
translate(pos.x,pos.y);
rectMode(CENTER);
strokeWeight(3);
imageMode(CENTER);
image(this.image, 0, 0, this.radius*2,this.radius*2);
pop();
}
};