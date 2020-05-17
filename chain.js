class Chain{

    constructor(bodyA,bodyB){
        var options={
            bodyA:bird.body,
            bodyB:constraint_log.body,
            stiffness:0.04,
            length:10
        }
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    

    }
display(){
var PointA=this.chain.bodyA.position;
var PointB=this.chain.bodyB.position;

strokeWeight(4);
line(PointA.x,PointA.y,PointB.x,PointB.y);

}
}