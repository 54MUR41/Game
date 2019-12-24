 class Shot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }
    attach(body){
        gameState = "stop";
        this.shot.bodyA = body;}
    shoot(){
        this.shot.bodyA = null;}
        display(){
        if(this.shot.bodyA){
            var pointA = this.shot.bodyA.position;
            //this.pointB.x = fireX;
            //this.pointB.y = fireY;
            var pointB = this.pointB;
            //push();
            //stroke(48,22,8); 
            //pop();
        }
    }
    
}