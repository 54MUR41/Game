class Gun{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/AWP.png");
        World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position;
        pos.y = mouseY;
        var angle = this.body.angle;
        var fireX = pos.x+this.height;
        var fireY = pos.y+this.height;
        if(keyIsDown(DOWN_ARROW)){
            Matter.Body.setPosition(bullet.body,{x:fireX,y:fireY});
        }
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
