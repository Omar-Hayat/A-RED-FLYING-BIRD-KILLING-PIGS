class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        //TO LOAD THE CATAPULT IMAGES!!!!
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

        display(){
            //ADDING THE CATAPULT'S IMAGES!!!!
                image(this.sling1,180,23)
                image(this.sling2,150,23)
            if(this.sling.bodyA){
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB;
                stroke(48,22,8);
                //TO MAKE THE RUBBER BAND THICK IF THE BURD IS ON THE RIGHT SIDE OF CATAPULT!!!!!
                if(pointA.x>200){
                strokeWeight(7);
                line(pointA.x-26, pointA.y, pointB.x-24, pointB.y+11);
                line(pointA.x-26, pointA.y, pointB.x+24, pointB.y+11);
                // TO ADD THE IMAGE FOR THE SUPPORT XD
                image(this.sling3,pointA.x-31,pointA.y-13,15,30)  
                }      
                //TO MAKE THE RUBBER BAND THINNER IF THE BURD IS ON THE LEFT SIDE OF CATAPULT!!!!!
                else{
                    strokeWeight(3.5);
                    line(pointA.x-26, pointA.y, pointB.x-24, pointB.y+11);
                    line(pointA.x-26, pointA.y, pointB.x+24, pointB.y+11);
                    image(this.sling3,pointA.x-31,pointA.y-13,15,30)  
                }
            }
        }

        
    }