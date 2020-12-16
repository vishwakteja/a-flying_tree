class Ground {

    constructor(x, y, width, height ) {
        var options = {
            isStatic:true
        }
        this.body =  Matter.Bodies.rectangle(x, y,width,  height,  options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
         rectMode(CENTER)
        fill(145, 172, 87 );
        strokeWeight(4)
        stroke(145, 172, 87)
        rect(0, 0, this.width, this.height);
        pop();
}
}