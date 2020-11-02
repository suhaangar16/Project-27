class Rope{
    constructor(a,b){
        var options ={
            bodyA:a,
            bodyB:b,
            length:200,
            stiffness:0.04
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y);
    }
}