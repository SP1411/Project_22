class rope {
	constructor(body1,body2,pointA,pointB)
	{
       this.pointA = pointA;
	   this.pointB = pointB;

	   var options={

		  bodyA:body1,
		  bodyB:body2,
		  pointB:{x:this.pointA, y:this.pointB}
	   }
	//create rope constraint here
	con = Matter.Constraint.create({
		pointA:{x:320,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0
	  });
    World.add(world,con);
	}


    //create display() here 
     display() {

        var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		push();
        strokeWeight(2);
        stroke(255);
        line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
        pop();
	}
}
