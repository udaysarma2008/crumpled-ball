class Paper{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x , this.y , (this.r - 20)/2 , options);
        World.add(world, this.body);
      }
      display(){
        var pospaper = this.body.position;
        push();
        translate(pospaper.x, pospaper.y);
        rectMode(CENTER);
        fill(255 , 0 , 255); 
        imageMode(CENTER);
        image(this.image, 0, 0, this.r , this.r);
        pop();
      }
}