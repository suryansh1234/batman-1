class Drop{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5,
        }
        this.body=Bodies.circle(x,y,radius,options);
    console.log(this.body.radius)
        this.radius=radius;
        this.image = loadImage("drop.png");
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        //fill("blue");
        ellipseMode(CENTER);
        imageMode(CENTER)
        //ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
        image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2)
        
       
        
        
      }
      update(){
          if (this.body.position.y>650) {
              Matter.Body.setPosition(this.body,{x:this.body.position.x,y:0})
          }
      }
    
    }