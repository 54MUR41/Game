class Bullet {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':0,
          'density':0,
          'frictionAir':0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      if(gameState === "Shoot"){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
     
    }
  };