class stone {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body)
        this.image = loadImage("stone.png");
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        
    }
}