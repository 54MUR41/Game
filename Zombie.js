class Zombie{
    constructor(x, y, width, height) {
        var options = {
            'frictionAir':0,
            'friction':0,
            'frictionStatic':1,
            //'inertia':Infinity,
            'restitution':0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadAnimation("Images/movement1.png","Images/movement2.png","Images/movement3.png");
        
        World.add(world, this.body);
        
      }
      display(){
        var pos = this.body.postion;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        animation(this.image,0,0,this.width,this.height);
        pop();
      }
}